export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  feedback?: string;
};

export type Topic = {
  id: string;
  titulo: string;
  youtubeId: string;
  texto: string;
  quiz: QuizQuestion[];
};

import { NUMEROS_ENTEROS_TOPICS } from "./temas/numerosEnteros";

export const TOPICS: Topic[] = [
  ...NUMEROS_ENTEROS_TOPICS,
]