import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";
import { theme } from "../../src/theme";

const contenidos: Record<string, { youtubeId: string; texto: string; titulo?: string }> = {
  sumas: {
    youtubeId: "W8aA1Yt2H5A",
    texto: "La suma combina cantidades para obtener un total. Identifica los datos y añade de forma ordenada.",
    titulo: "Sumas",
  },
  restas: {
    youtubeId: "f2E2o6Z5w1k",
    texto: "La resta permite hallar la diferencia. Es útil para saber cuánto falta o cuánto se perdió.",
    titulo: "Restas",
  },
  multiplicacion: {
    youtubeId: "m2Q2pTg7KxE",
    texto: "La multiplicación representa grupos iguales. Ayuda a calcular de manera rápida con tablas.",
    titulo: "Multiplicación",
  },
  division: {
    youtubeId: "Sx0WJYfQq7I",
    texto: "La división reparte en partes iguales. Verifica que el reparto sea justo y sin sobrantes.",
    titulo: "División",
  },
};

export default function TemaDetalle() {
  const { id } = useLocalSearchParams();
  const data = contenidos[String(id)];

  const fade = useRef(new Animated.Value(0)).current;
  const up = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 360, useNativeDriver: true }),
      Animated.timing(up, { toValue: 0, duration: 360, useNativeDriver: true }),
    ]).start();
  }, []);

  if (!data) {
    return (
      <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
        <Text style={{ color: "#fff" }}>Tema no encontrado.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
      <Animated.View style={{ opacity: fade, transform: [{ translateY: up }] }}>
        <View style={styles.videoBox}>
          <WebView
            source={{ uri: `https://www.youtube.com/embed/${data.youtubeId}` }}
            allowsFullscreenVideo
          />
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Explicación breve</Text>
          <ScrollView>
            <Text style={styles.panelText}>{data.texto}</Text>
          </ScrollView>
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop:100 },

  videoBox: {
    height: 230,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  panel: {
    marginTop: 14,
    padding: 16,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    maxHeight: 240,
  },

  panelTitle: { color: theme.colors.text, fontSize: 16, fontWeight: "900" },
  panelText: { marginTop: 10, color: theme.colors.textMuted, lineHeight: 22, fontSize: 14 },
});