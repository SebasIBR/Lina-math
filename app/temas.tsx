import React from "react";
import { Text, StyleSheet, FlatList, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { theme } from "../src/theme";
import { TOPICS } from "../src/data/topics";

export default function TemasScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
      <Text style={styles.header}>Temas</Text>
      <Text style={styles.subheader}>Selecciona un contenido para estudiar.</Text>

      <FlatList
        data={TOPICS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 14, paddingBottom: 24 }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push(`/tema/${item.id}`)}
          >
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardDesc}>{item.texto}</Text>
            <Text style={styles.cardHint}>Abrir tema</Text>
          </Pressable>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { color: theme.colors.text, fontSize: 26, fontWeight: "900" },
  subheader: { marginTop: 6, color: theme.colors.textMuted, fontSize: 14 },
  card: {
    padding: 16,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 12,
  },
  cardTitle: { color: theme.colors.text, fontSize: 18, fontWeight: "900" },
  cardDesc: { marginTop: 10, color: theme.colors.textMuted, lineHeight: 20 },
  cardHint: { marginTop: 10, color: "rgba(45,107,255,0.9)", fontWeight: "800" },
});