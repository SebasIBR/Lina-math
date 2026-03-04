import React, { useState, useCallback, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, ScrollView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe"; // Importar la librería
import { theme } from "../../src/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const contenidos = {
  sumas: {
    youtubeId: "JHN-NiDw26U",
    texto: "La suma combina cantidades para obtener un total. Identifica los datos y añade de forma ordenada.",
    titulo: "Sumas",
  },
  restas: {
    youtubeId: "toDqAGu1hmo",
    texto: "La resta permite hallar la diferencia. Es útil para saber cuánto falta o cuánto se perdió.",
    titulo: "Restas",
  },


};

export default function TemaDetalle() {
  const { id } = useLocalSearchParams();
  const data = contenidos[String(id)];
  
  const [playing, setPlaying] = useState(false);
  const fade = useRef(new Animated.Value(0)).current;
  const up = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 360, useNativeDriver: true }),
      Animated.timing(up, { toValue: 0, duration: 360, useNativeDriver: true }),
    ]).start();
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("¡Muy bien!", "Has terminado de ver la explicación.");
    }
  }, []);

  if (!data) return <Text>Tema no encontrado.</Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
        <Animated.View style={{ opacity: fade, transform: [{ translateY: up }] }}>
          
          <View style={styles.videoBox}>
            <YoutubePlayer
              height={230}
              play={playing}
              videoId={data.youtubeId}
              onChangeState={onStateChange}
              webViewProps={{
                // Esto fuerza el origen correcto para evitar el error 153
                androidLayerType: 'hardware',
              }}
              initialPlayerParams={{
                preventFullScreen: false,
                modestbranding: true,
                rel: false,
              }}
            />
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Explicación breve: {data.titulo}</Text>
            <ScrollView>
              <Text style={styles.panelText}>{data.texto}</Text>
            </ScrollView>
          </View>

        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  videoBox: {
    height: 230,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    backgroundColor: "#000", // Fondo negro para el reproductor
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