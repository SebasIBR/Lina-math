import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { theme } from "../src/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const fade = useRef(new Animated.Value(0)).current;
  const up = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 450, useNativeDriver: true }),
      Animated.timing(up, { toValue: 0, duration: 450, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fade, transform: [{ translateY: up }] }]}>
        <View style={styles.hero}>
          <Text style={styles.badge}>BIENVENIDO</Text>

          <Text style={styles.title}>LINAMATH</Text>

          <Text style={styles.subtitle}>
            Un espacio de aprendizaje diseñado para reforzar contenidos matemáticos
            con explicaciones claras, recursos audiovisuales y acompañamiento paso a paso.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>En esta aplicación podrás:</Text>

          <View style={styles.list}>
            <Text style={styles.bullet}>• Explorar temas de matemáticas de forma organizada.</Text>
            <Text style={styles.bullet}>• Ver videos explicativos para comprender cada contenido.</Text>
            <Text style={styles.bullet}>• Leer un resumen breve para recordar lo más importante.</Text>
          </View>

          <View style={styles.howBox}>
            <Text style={styles.howTitle}>¿Cómo funciona?</Text>
            <Text style={styles.howText}>
              1) Presiona <Text style={styles.bold}>Empezar</Text>.{"\n"}
              2) Elige un <Text style={styles.bold}>tema</Text>.{"\n"}
              3) Mira el <Text style={styles.bold}>video</Text> y revisa la <Text style={styles.bold}>explicación</Text>.
            </Text>
          </View>
        </View>
      </Animated.View>

      <Pressable style={styles.button} onPress={() => router.push("/temas")}>
        <Text style={styles.buttonText}>EMPEZAR</Text>
      </Pressable>
    </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "space-between" },
  content: { marginTop: 24 },

  hero: {
    padding: 18,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "rgba(45,107,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(45,107,255,0.35)",
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },

  title: { marginTop: 14, color: theme.colors.text, fontSize: 44, fontWeight: "900" },

  subtitle: {
    marginTop: 10,
    color: theme.colors.textMuted,
    fontSize: 16,
    lineHeight: 22,
  },

  divider: {
    marginTop: 16,
    marginBottom: 14,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.12)",
  },

  sectionTitle: { color: theme.colors.text, fontSize: 16, fontWeight: "900" },

  list: { marginTop: 10, gap: 8 },

  bullet: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },

  howBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: theme.radius.lg,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },
  howTitle: { color: theme.colors.text, fontSize: 14, fontWeight: "900" },
  howText: { marginTop: 8, color: theme.colors.textMuted, lineHeight: 20, fontSize: 13 },

  bold: { fontWeight: "900", color: theme.colors.text },

  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    borderRadius: theme.radius.lg,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "900", fontSize: 16, letterSpacing: 1 },
});