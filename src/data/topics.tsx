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

import { NUMEROS_ENTEROS } from "./temas/numerosEnteros";
import { ECUACIONES } from "./temas/ecuaciones";
import { FRACCIONES } from "./temas/fracciones";
// import { PROPORCIONALIDAD } from "./temas/proporcionalidad";
// import { MAGNITUDES } from "./temas/magnitudes";

export const TOPICS: Topic[] = [
  ...NUMEROS_ENTEROS,
  ...ECUACIONES,
  ...FRACCIONES,
  // ...PROPORCIONALIDAD,
  // ...MAGNITUDES,
]