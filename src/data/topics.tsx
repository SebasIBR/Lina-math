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
    id: "Números Enteros",
    titulo: "Números Enteros",
    youtubeId: "VXDRr8MUwZw",
    texto:
      "Los números enteros son aquellos que no tienen parte decimal."+
      " Incluyen números positivos.(1,2,3), el cero (0) y números negativos (-1, -2, -3)."+
      "\n\nSe utilizan para representar situaciones como ganancias y pérdidas,"+
      "temperaturas bajo cero o niveles por encima y debajo de un punto de referencia.",
    quiz: [
      {
        id: "A1",
        question: "El valor absoluto de |-5| es:",
        options: [
            { id: "a", text: "-5" },
            { id: "b", text: "5" },
            { id: "c", text: "55" },
        ],
        correctOptionId: "b",
        feedback: "El valor absoluto representa la distancia al cero en la recta numérica, por eso |-5| = 5.",
        },
        {
        id: "A2",
        question: "El opuesto de 15 es:",
        options: [
            { id: "a", text: "10" },
            { id: "b", text: "51" },
            { id: "c", text: "-15" },
        ],
        correctOptionId: "c",
        feedback: "El opuesto de un número es el mismo valor pero con signo contrario. El opuesto de 15 es -15.",
        },
        {
        id: "A3",
        question: "Los números enteros se representan con la letra:",
        options: [
            { id: "a", text: "X" },
            { id: "b", text: "Y" },
            { id: "c", text: "Z" },
        ],
        correctOptionId: "c",
        feedback: "El conjunto de los números enteros se representa con la letra Z.",
        },
        {
        id: "A4",
        question: "El conjunto de los números enteros está formado por:",
        options: [
            { id: "a", text: "Positivos, negativos y el cero" },
            { id: "b", text: "Racionales, irracionales y naturales" },
            { id: "c", text: "Negativos, irracionales y reales" },
        ],
        correctOptionId: "a",
        feedback: "Los números enteros incluyen los números positivos, los negativos y el cero.",
        },
        {
        id: "A5",
        question: "¿Qué número es mayor entre -5 y -10?",
        options: [
            { id: "a", text: "Son iguales" },
            { id: "b", text: "-10" },
            { id: "c", text: "-5" },
        ],
        correctOptionId: "c",
        feedback: "En los números negativos, el que está más cerca del cero es el mayor. Por eso, -5 es mayor que -10.",
        },
    ],
  },
];