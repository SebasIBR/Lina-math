import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { theme } from "../src/theme";

import {
  responsiveFont,
  responsiveSpace,
} from "../src/utils/responsive";

export default function HomeScreen() {
  const router = useRouter();

  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const fade = useRef(new Animated.Value(0)).current;
  const up = useRef(new Animated.Value(14)).current;

  const isSmallScreen = height < 700;
  const isTablet = width >= 768;

  const horizontalPadding = isTablet
    ? Math.min(width * 0.12, 100)
    : responsiveSpace(width, 20);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),

      Animated.timing(up, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[
          theme.colors.bg1,
          theme.colors.bg2,
        ]}
        style={styles.gradient}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingHorizontal: horizontalPadding,
              paddingTop: responsiveSpace(width, 14),
              paddingBottom:
                insets.bottom +
                responsiveSpace(width, 20),
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={[
              styles.contentWrapper,
              isTablet && styles.contentTablet,
              {
                opacity: fade,
                transform: [{ translateY: up }],
              },
            ]}
          >
            <View
              style={[
                styles.hero,
                {
                  padding: responsiveSpace(width, 20),
                },
              ]}
            >
              <Text
                style={[
                  styles.badge,
                  {
                    fontSize: responsiveFont(
                      width,
                      12,
                      11,
                      14
                    ),
                  },
                ]}
              >
                BIENVENIDA
              </Text>

              <Text
                maxFontSizeMultiplier={1.2}
                style={[
                  styles.title,
                  {
                    fontSize: responsiveFont(
                      width,
                      isSmallScreen ? 36 : 44,
                      32,
                      52
                    ),
                  },
                ]}
              >
                LINAMATH
              </Text>

              <Text
                style={[
                  styles.subtitle,
                  {
                    fontSize: responsiveFont(
                      width,
                      16,
                      14,
                      18
                    ),
                    lineHeight: responsiveFont(
                      width,
                      23,
                      20,
                      27
                    ),
                  },
                ]}
              >
                Un espacio de aprendizaje diseñado
                para reforzar contenidos matemáticos
                mediante videos, explicaciones claras
                y actividades interactivas.
              </Text>

              <View style={styles.divider} />

              <Text
                style={[
                  styles.sectionTitle,
                  {
                    fontSize: responsiveFont(
                      width,
                      16,
                      15,
                      19
                    ),
                  },
                ]}
              >
                En LINAMATH podrás:
              </Text>

              <View style={styles.list}>
                <Text style={styles.bullet}>
                  • Explorar contenidos matemáticos
                  de forma organizada.
                </Text>

                <Text style={styles.bullet}>
                  • Aprender mediante videos
                  explicativos.
                </Text>

                <Text style={styles.bullet}>
                  • Consultar explicaciones y
                  ejemplos.
                </Text>

                <Text style={styles.bullet}>
                  • Resolver cuestionarios para
                  comprobar tu aprendizaje.
                </Text>
              </View>

              <View style={styles.howBox}>
                <Text style={styles.howTitle}>
                  ¿Cómo funciona?
                </Text>

                <Text style={styles.howText}>
                  1. Presiona Empezar.{"\n"}
                  2. Selecciona un tema.{"\n"}
                  3. Mira el video.{"\n"}
                  4. Lee la explicación.{"\n"}
                  5. Resuelve el cuestionario.
                </Text>
              </View>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() =>
                router.push("/temas")
              }
            >
              <Text style={styles.buttonText}>
                EMPEZAR
              </Text>
            </Pressable>
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.bg1,
  },

  gradient: {
    flex: 1,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },

  contentWrapper: {
    width: "100%",
    alignSelf: "center",
  },

  contentTablet: {
    maxWidth: 720,
  },

  hero: {
    width: "100%",
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 100,
    backgroundColor:
      "rgba(45,107,255,0.18)",
    borderWidth: 1,
    borderColor:
      "rgba(45,107,255,0.35)",
    color: theme.colors.text,
    fontWeight: "900",
    letterSpacing: 1,
  },

  title: {
    marginTop: 16,
    color: theme.colors.text,
    fontWeight: "900",
  },

  subtitle: {
    marginTop: 10,
    color: theme.colors.textMuted,
  },

  divider: {
    height: 1,
    marginVertical: 18,
    backgroundColor:
      "rgba(255,255,255,0.12)",
  },

  sectionTitle: {
    color: theme.colors.text,
    fontWeight: "900",
  },

  list: {
    marginTop: 12,
    gap: 10,
  },

  bullet: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },

  howBox: {
    marginTop: 18,
    padding: 14,
    borderRadius: theme.radius.lg,
    backgroundColor:
      "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.10)",
  },

  howTitle: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: "900",
  },

  howText: {
    marginTop: 8,
    color: theme.colors.textMuted,
    fontSize: 13,
    lineHeight: 21,
  },

  button: {
    width: "100%",
    marginTop: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: theme.radius.lg,
    backgroundColor:
      theme.colors.primary,
    alignItems: "center",
  },

  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 1,
  },
});