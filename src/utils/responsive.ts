import { PixelRatio } from "react-native";

export const clamp = (
  value: number,
  min: number,
  max: number
) => {
  return Math.min(Math.max(value, min), max);
};

export const responsiveFont = (
  width: number,
  baseSize: number,
  minSize?: number,
  maxSize?: number
) => {
  const scale = width / 390;

  return clamp(
    baseSize * scale,
    minSize ?? baseSize * 0.85,
    maxSize ?? baseSize * 1.15
  );
};

export const responsiveSpace = (
  width: number,
  baseSize: number
) => {
  const scale = width / 390;

  return clamp(baseSize * scale, baseSize * 0.8, baseSize * 1.3);
};