import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { theme } from "../src/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const temas = [
  { id: "sumas", titulo: "Sumas", desc: "Operación para combinar cantidades." },
  { id: "restas", titulo: "Restas", desc: "Diferencia entre dos cantidades." },
  { id: "multiplicacion", titulo: "Multiplicación", desc: "Suma repetida y grupos iguales." },
  { id: "division", titulo: "División", desc: "Reparto en partes iguales." },
];

function TopicCard({ item, index, onPress }: any) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 380,
      delay: index * 70,
      useNativeDriver: true,
    }).start();
  }, []);

  const translate = anim.interpolate({ inputRange: [0, 1], outputRange: [10, 0] });

  return (
    <Animated.View style={{ opacity: anim, transform: [{ translateY: translate }] }}>
      <Pressable style={styles.card} onPress={onPress}>
        <View style={styles.cardTop}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.pill}>VIDEO</Text>
        </View>
        <Text style={styles.cardDesc}>{item.desc}</Text>
        <Text style={styles.cardHint}>Ver explicación</Text>
      </Pressable>
    </Animated.View>
  );
}

export default function TemasScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient colors={[theme.colors.bg1, theme.colors.bg2]} style={styles.container}>
      <Text style={styles.header}>Temas</Text>
      <Text style={styles.subheader}>Selecciona un contenido para estudiar.</Text>

      <FlatList
        data={temas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 14, paddingBottom: 24 }}
        renderItem={({ item, index }) => (
          <TopicCard
            item={item}
            index={index}
            onPress={() => router.push(`/tema/${item.id}`)}
          />
        )}
      />
    </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},

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

  cardTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardTitle: { color: theme.colors.text, fontSize: 18, fontWeight: "900" },

  pill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    color: theme.colors.textMuted,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },

  cardDesc: { marginTop: 10, color: theme.colors.textMuted, lineHeight: 20 },
  cardHint: { marginTop: 10, color: "rgba(45,107,255,0.9)", fontWeight: "800" },
});