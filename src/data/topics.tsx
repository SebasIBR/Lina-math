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

export const TOPICS: Topic[] = [
  {
    id: "sumas",
    titulo: "Sumas",
    youtubeId: "VXDRr8MUwZw",
    texto:
      "La suma combina cantidades para obtener un total. Identifica los datos y añade de forma ordenada.",
    quiz: [
      {
        id: "s1",
        question: "¿Qué representa el resultado de una suma?",
        options: [
          { id: "a", text: "La diferencia" },
          { id: "b", text: "El total" },
          { id: "c", text: "El reparto" },
        ],
        correctOptionId: "b",
        feedback: "En una suma, el resultado es el total de las cantidades.",
      },
      {
        id: "s2",
        question: "Si tienes 8 lápices y te dan 5 más, ¿qué operación haces?",
        options: [
          { id: "a", text: "Resta" },
          { id: "b", text: "Suma" },
          { id: "c", text: "División" },
        ],
        correctOptionId: "b",
        feedback: "Al aumentar una cantidad, normalmente sumas.",
      },
      {
        id: "s3",
        question: "12 + 7 es igual a:",
        options: [
          { id: "a", text: "17" },
          { id: "b", text: "18" },
          { id: "c", text: "19" },
        ],
        correctOptionId: "c",
        feedback: "12 + 7 = 19.",
      },
    ],
  },
];