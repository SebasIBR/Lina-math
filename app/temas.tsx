import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  View,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { theme } from "../src/theme";
import { TOPICS } from "../src/data/topics";

import {
  responsiveFont,
  responsiveSpace,
} from "../src/utils/responsive";

export default function TemasScreen() {
  const router = useRouter();

  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const isTablet = width >= 768;

  const horizontalPadding = isTablet
    ? Math.min(width * 0.10, 90)
    : responsiveSpace(width, 16);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[
          theme.colors.bg1,
          theme.colors.bg2,
        ]}
        style={styles.container}
      >
        <View
          style={[
            styles.wrapper,
            {
              paddingHorizontal:
                horizontalPadding,
            },
            isTablet && styles.wrapperTablet,
          ]}
        >
          <Text
            style={[
              styles.header,
              {
                fontSize: responsiveFont(
                  width,
                  28,
                  24,
                  34
                ),
              },
            ]}
          >
            Temas
          </Text>

          <Text style={styles.subheader}>
            Selecciona un contenido para
            comenzar.
          </Text>

          <FlatList
            data={TOPICS}
            keyExtractor={(item) => item.id}
            style={styles.list}
            contentContainerStyle={{
              paddingTop: 16,
              paddingBottom:
                insets.bottom + 24,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                style={({ pressed }) => [
                  styles.card,
                  pressed &&
                    styles.cardPressed,
                ]}
                onPress={() =>
                  router.push(
                    `/tema/${item.id}`
                  )
                }
              >
                <View style={styles.cardRow}>
                  <View style={styles.numberBox}>
                    <Text style={styles.numberText}>
                      {index + 1}
                    </Text>
                  </View>

                  <View style={styles.cardContent}>
                    <Text
                      numberOfLines={3}
                      style={styles.cardTitle}
                    >
                      {item.titulo}
                    </Text>

                    <Text
                      numberOfLines={2}
                      style={styles.cardDesc}
                    >
                      Video, explicación y
                      actividad.
                    </Text>
                  </View>

                  <Text style={styles.arrow}>
                    ›
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.bg1,
  },

  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },

  wrapperTablet: {
    maxWidth: 820,
  },

  header: {
    marginTop: 10,
    color: theme.colors.text,
    fontWeight: "900",
  },

  subheader: {
    marginTop: 6,
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },

  list: {
    flex: 1,
  },

  card: {
    width: "100%",
    padding: 14,
    marginBottom: 12,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  cardPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },

  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  numberBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor:
      "rgba(45,107,255,0.18)",
  },

  numberText: {
    color: theme.colors.text,
    fontWeight: "900",
  },

  cardContent: {
    flex: 1,
    marginLeft: 12,
  },

  cardTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: "900",
    flexShrink: 1,
  },

  cardDesc: {
    marginTop: 5,
    color: theme.colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },

  arrow: {
    marginLeft: 10,
    color: theme.colors.textMuted,
    fontSize: 28,
    flexShrink: 0,
  },
});