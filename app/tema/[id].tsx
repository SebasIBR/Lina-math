import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../src/theme";
import { TOPICS, QuizQuestion } from "../../src/data/topics";

export default function TemaDetalle() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const topicIndex = useMemo(
    () => TOPICS.findIndex((t) => t.id === String(id)),
    [id]
  );

  const data = topicIndex >= 0 ? TOPICS[topicIndex] : null;

  const prevTopic = topicIndex > 0 ? TOPICS[topicIndex - 1] : null;
  const nextTopic =
    topicIndex >= 0 && topicIndex < TOPICS.length - 1
      ? TOPICS[topicIndex + 1]
      : null;

  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const fade = useRef(new Animated.Value(0)).current;
  const up = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 320, useNativeDriver: true }),
      Animated.timing(up, { toValue: 0, duration: 320, useNativeDriver: true }),
    ]).start();
  }, []);

  // Reset al cambiar de tema
  useEffect(() => {
    setShowQuiz(false);
    setAnswers({});
    setSubmitted(false);
  }, [id]);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setShowQuiz(true);
      Alert.alert("¡Muy bien!", "Terminaste el video. Ahora realiza el mini-quiz.");
    }
  }, []);

  const total = data?.quiz.length ?? 0;

  const score = useMemo(() => {
    if (!data) return 0;
    return data.quiz.reduce((acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0), 0);
  }, [answers, data]);

  const handleSubmit = () => {
    setSubmitted(true);
    Alert.alert("Resultado", `Tu puntaje fue ${score} de ${total}.`);
  };

  const goToTopic = (topicId: string) => router.replace(`/tema/${topicId}`);

  if (!data) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={[theme.colors.bg1, theme.colors.bg2]}
          style={[styles.container, { justifyContent: "center" }]}
        >
          <Text style={styles.notFound}>Tema no encontrado.</Text>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
        {/* VIDEO FIJO (NO SCROLL) */}
        <Animated.View style={{ opacity: fade, transform: [{ translateY: up }] }}>
          <Text style={styles.h1}>Módulo: {data.titulo}</Text>

          <View style={styles.videoBox}>
            <YoutubePlayer
              height={230}
              videoId={data.youtubeId}
              onChangeState={onStateChange}
              webViewProps={{ androidLayerType: "hardware" }}
              initialPlayerParams={{
                preventFullScreen: false,
                modestbranding: true,
                rel: false,
              }}
            />
          </View>

          {/* ANTERIOR / SIGUIENTE (FIJO) */}
          <View style={styles.navRow}>
            <Pressable
              style={[styles.navBtn, !prevTopic && styles.navBtnDisabled]}
              onPress={() => prevTopic && goToTopic(prevTopic.id)}
              disabled={!prevTopic}
            >
              <Text style={styles.navBtnText}>Anterior</Text>
            </Pressable>

            <Pressable
              style={[styles.navBtn, !nextTopic && styles.navBtnDisabled]}
              onPress={() => nextTopic && goToTopic(nextTopic.id)}
              disabled={!nextTopic}
            >
              <Text style={styles.navBtnText}>Siguiente</Text>
            </Pressable>
          </View>
        </Animated.View>

        {/* SCROLL SOLO PARA EXPLICACIÓN + QUIZ */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          <Animated.View style={{ opacity: fade, transform: [{ translateY: up }] }}>
            {/* EXPLICACIÓN */}
            <View style={styles.panel}>
              <Text style={styles.panelTitle}>Explicación breve</Text>
              <Text style={styles.panelText}>{data.texto}</Text>
            </View>

            {/* QUIZ (aparece al terminar el video) */}
            {showQuiz && (
              <View style={styles.quizBox}>
                <Text style={styles.quizTitle}>Mini-quiz (3 preguntas)</Text>
                <Text style={styles.quizHint}>Selecciona la respuesta correcta.</Text>

                {data.quiz.map((q) => (
                  <QuestionCard
                    key={q.id}
                    q={q}
                    selected={answers[q.id]}
                    onSelect={(optId) => {
                      if (!submitted) {
                        setAnswers((prev) => ({ ...prev, [q.id]: optId }));
                      }
                    }}
                    showResult={submitted}
                  />
                ))}

                <Pressable
                  style={[
                    styles.submitBtn,
                    Object.keys(answers).length < total && styles.submitBtnDisabled,
                  ]}
                  onPress={handleSubmit}
                  disabled={Object.keys(answers).length < total}
                >
                  <Text style={styles.submitBtnText}>ENVIAR RESPUESTAS</Text>
                </Pressable>

                {submitted && (
                  <Text style={styles.scoreText}>
                    Puntaje: {score} / {total}
                  </Text>
                )}
              </View>
            )}

            {/* Espacio final para no quedar pegado abajo */}
            <View style={{ height: 16 }} />
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

function QuestionCard({
  q,
  selected,
  onSelect,
  showResult,
}: {
  q: QuizQuestion;
  selected?: string;
  onSelect: (optId: string) => void;
  showResult: boolean;
}) {
  return (
    <View style={styles.qCard}>
      <Text style={styles.qText}>{q.question}</Text>

      {q.options.map((opt) => {
        const isSelected = selected === opt.id;
        const isCorrect = opt.id === q.correctOptionId;

        const borderStyle =
          showResult && isSelected
            ? isCorrect
              ? styles.optCorrect
              : styles.optWrong
            : isSelected
              ? styles.optSelected
              : null;

        return (
          <Pressable
            key={opt.id}
            style={[styles.optBtn, borderStyle]}
            onPress={() => onSelect(opt.id)}
          >
            <Text style={styles.optText}>{opt.text}</Text>
          </Pressable>
        );
      })}

      {showResult && q.feedback ? <Text style={styles.feedback}>{q.feedback}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },

  notFound: { color: theme.colors.text, textAlign: "center", fontWeight: "800" },

  h1: { color: theme.colors.text, fontSize: 18, fontWeight: "900", marginBottom: 10 },

  videoBox: {
    height: 230,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    backgroundColor: "#000",
  },

  navRow: { flexDirection: "row", gap: 10, marginTop: 10 },

  navBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  navBtnDisabled: { opacity: 0.45 },
  navBtnText: { color: theme.colors.text, fontWeight: "900" },

  scroll: { flex: 1, marginTop: 12 },
  scrollContent: { paddingBottom: 28 },

  panel: {
    padding: 16,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  panelTitle: { color: theme.colors.text, fontSize: 16, fontWeight: "900" },
  panelText: { marginTop: 10, color: theme.colors.textMuted, lineHeight: 22, fontSize: 14 },

  quizBox: {
    marginTop: 14,
    padding: 16,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  quizTitle: { color: theme.colors.text, fontSize: 16, fontWeight: "900" },
  quizHint: { marginTop: 6, color: theme.colors.textMuted, fontSize: 13 },

  qCard: {
    marginTop: 14,
    padding: 14,
    borderRadius: theme.radius.lg,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },
  qText: { color: theme.colors.text, fontWeight: "900", marginBottom: 10 },

  optBtn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: theme.radius.md,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    marginTop: 8,
  },
  optText: { color: theme.colors.textMuted, fontWeight: "700" },

  optSelected: { borderColor: "rgba(45,107,255,0.85)" },
  optCorrect: { borderColor: "rgba(60,200,120,0.85)" },
  optWrong: { borderColor: "rgba(255,90,90,0.85)" },

  feedback: { marginTop: 10, color: theme.colors.textSoft, fontSize: 12, lineHeight: 18 },

  submitBtn: {
    marginTop: 14,
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: theme.radius.lg,
    alignItems: "center",
  },
  submitBtnDisabled: { opacity: 0.5 },
  submitBtnText: { color: "#fff", fontWeight: "900", letterSpacing: 1 },

  scoreText: { marginTop: 10, color: theme.colors.text, fontWeight: "900", textAlign: "center" },
});