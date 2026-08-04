import type { Topic } from "../topics";

export const NUMEROS_ENTEROS_TOPICS: Topic[] = [
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
  {
    id: "suma-numeros-enteros",
    titulo: "Suma de números enteros",
    youtubeId: "VXDRr8MUwZw",
    texto:
      "Para sumar números enteros es necesario observar sus signos." +
      "\n\nSi los números tienen el mismo signo, se suman sus valores absolutos y se conserva el signo." +
      "\n\nSi tienen signos diferentes, se restan sus valores absolutos y el resultado conserva el signo del número con mayor valor absoluto." +
      "\n\nEjemplos:" +
      "\n• 4 + 3 = 7" +
      "\n• (-4) + (-3) = -7" +
      "\n• 8 + (-5) = 3" +
      "\n• (-9) + 4 = -5",
    quiz: [
      {
        id: "se-1",
        question: "¿Cuál es el resultado de 5 + 3?",
        options: [
          { id: "a", text: "8" },
          { id: "b", text: "2" },
          { id: "c", text: "-8" },
        ],
        correctOptionId: "a",
        feedback:
          "Ambos números son positivos, por lo tanto se suman directamente: 5 + 3 = 8.",
      },
      {
        id: "se-2",
        question: "¿Cuál es el resultado de (-4) + (-6)?",
        options: [
          { id: "a", text: "2" },
          { id: "b", text: "-10" },
          { id: "c", text: "10" },
        ],
        correctOptionId: "b",
        feedback:
          "Como los dos números son negativos, se suman sus valores absolutos y se conserva el signo negativo: -10.",
      },
      {
        id: "se-3",
        question: "¿Cuál es el resultado de 9 + (-5)?",
        options: [
          { id: "a", text: "14" },
          { id: "b", text: "-4" },
          { id: "c", text: "4" },
        ],
        correctOptionId: "c",
        feedback:
          "Los signos son diferentes. Se resta 9 - 5 = 4 y se conserva el signo positivo porque 9 tiene mayor valor absoluto.",
      },
      {
        id: "se-4",
        question: "¿Cuál es el resultado de (-8) + 3?",
        options: [
          { id: "a", text: "-5" },
          { id: "b", text: "5" },
          { id: "c", text: "-11" },
        ],
        correctOptionId: "a",
        feedback:
          "Los signos son diferentes. Se resta 8 - 3 = 5 y se conserva el signo negativo porque -8 tiene mayor valor absoluto.",
      },
      {
        id: "se-5",
        question: "Cuando se suman dos enteros con el mismo signo, se debe:",
        options: [
          {
            id: "a",
            text: "Restar sus valores absolutos y cambiar el signo",
          },
          {
            id: "b",
            text: "Sumar sus valores absolutos y conservar el signo",
          },
          {
            id: "c",
            text: "Multiplicar sus valores absolutos",
          },
        ],
        correctOptionId: "b",
        feedback:
          "Cuando los signos son iguales, se suman los valores absolutos y se conserva el signo común.",
      },
    ],
  },
  {
  id: "resta-numeros-enteros",
  titulo: "Resta de números enteros",
  youtubeId: "ID_DEL_VIDEO",
  texto:
    "Para restar números enteros, se transforma la resta en una suma del opuesto." +
    "\n\nEsto significa que se conserva el primer número, se cambia la resta por una suma " +
    "y se reemplaza el segundo número por su opuesto." +
    "\n\nRegla general:" +
    "\na - b = a + (-b)" +
    "\n\nEjemplos:" +
    "\n• 8 - 3 = 8 + (-3) = 5" +
    "\n• 6 - (-2) = 6 + 2 = 8" +
    "\n• (-4) - 5 = (-4) + (-5) = -9" +
    "\n• (-7) - (-3) = (-7) + 3 = -4",
  quiz: [
    {
      id: "re-1",
      question: "¿Cuál es el resultado de 9 - 4?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "13" },
        { id: "c", text: "-5" },
      ],
      correctOptionId: "a",
      feedback:
        "Se conserva el 9 y se suma el opuesto de 4: 9 + (-4) = 5.",
    },
    {
      id: "re-2",
      question: "¿Cuál es el resultado de 7 - (-3)?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "10" },
        { id: "c", text: "-10" },
      ],
      correctOptionId: "b",
      feedback:
        "Restar un número negativo equivale a sumar su opuesto: 7 - (-3) = 7 + 3 = 10.",
    },
    {
      id: "re-3",
      question: "¿Cuál es el resultado de (-5) - 4?",
      options: [
        { id: "a", text: "-9" },
        { id: "b", text: "-1" },
        { id: "c", text: "9" },
      ],
      correctOptionId: "a",
      feedback:
        "Se transforma la resta en suma del opuesto: (-5) - 4 = (-5) + (-4) = -9.",
    },
    {
      id: "re-4",
      question: "¿Cuál es el resultado de (-8) - (-2)?",
      options: [
        { id: "a", text: "-10" },
        { id: "b", text: "-6" },
        { id: "c", text: "6" },
      ],
      correctOptionId: "b",
      feedback:
        "Se cambia la resta por suma y se toma el opuesto de -2: (-8) + 2 = -6.",
    },
    {
      id: "re-5",
      question: "Para restar dos números enteros se debe:",
      options: [
        {
          id: "a",
          text: "Cambiar la resta por suma y tomar el opuesto del segundo número",
        },
        {
          id: "b",
          text: "Cambiar el signo de los dos números y multiplicarlos",
        },
        {
          id: "c",
          text: "Sumar siempre los valores absolutos",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La resta de enteros se resuelve conservando el primer número, cambiando la resta por suma y tomando el opuesto del segundo número.",
    },
  ],
},
{
  id: "multiplicacion-numeros-enteros",
  titulo: "Multiplicación de números enteros",
  youtubeId: "ID_DEL_VIDEO",
  texto:
    "La multiplicación de números enteros consiste en multiplicar sus valores absolutos y luego determinar el signo del resultado." +
    "\n\nReglas de los signos:" +
    "\n• (+) × (+) = (+)" +
    "\n• (-) × (-) = (+)" +
    "\n• (+) × (-) = (-)" +
    "\n• (-) × (+) = (-)" +
    "\n\nRecuerda que si los signos son iguales, el resultado es positivo. Si los signos son diferentes, el resultado es negativo." +
    "\n\nEjemplos:" +
    "\n• 6 × 4 = 24" +
    "\n• (-6) × 4 = -24" +
    "\n• 5 × (-3) = -15" +
    "\n• (-7) × (-2) = 14",

  quiz: [
    {
      id: "me-1",
      question: "¿Cuál es el resultado de (-4) × 6?",
      options: [
        { id: "a", text: "-24" },
        { id: "b", text: "24" },
        { id: "c", text: "-10" },
      ],
      correctOptionId: "a",
      feedback:
        "Los signos son diferentes, por lo tanto el resultado es negativo: (-4) × 6 = -24.",
    },
    {
      id: "me-2",
      question: "¿Cuál es el resultado de (-8) × (-5)?",
      options: [
        { id: "a", text: "-40" },
        { id: "b", text: "13" },
        { id: "c", text: "40" },
      ],
      correctOptionId: "c",
      feedback:
        "Al multiplicar dos números negativos, el resultado es positivo: (-8) × (-5) = 40.",
    },
    {
      id: "me-3",
      question: "¿Cuál es el resultado de 9 × (-3)?",
      options: [
        { id: "a", text: "-27" },
        { id: "b", text: "27" },
        { id: "c", text: "-12" },
      ],
      correctOptionId: "a",
      feedback:
        "Como los signos son diferentes, el resultado es negativo: 9 × (-3) = -27.",
    },
    {
      id: "me-4",
      question: "¿Cuál es el resultado de (-5) × (-9)?",
      options: [
        { id: "a", text: "-45" },
        { id: "b", text: "45" },
        { id: "c", text: "14" },
      ],
      correctOptionId: "b",
      feedback:
        "Dos números negativos multiplicados producen un resultado positivo: 45.",
    },
    {
      id: "me-5",
      question: "Cuando se multiplican dos números enteros con signos diferentes, el resultado es:",
      options: [
        { id: "a", text: "Siempre positivo" },
        { id: "b", text: "Siempre negativo" },
        { id: "c", text: "Siempre cero" },
      ],
      correctOptionId: "b",
      feedback:
        "Cuando los signos son diferentes, el producto siempre es negativo.",
    },
  ],
},
{
  id: "division-numeros-enteros",
  titulo: "División de números enteros",
  youtubeId: "ID_DEL_VIDEO",
  texto:
    "La división de números enteros consiste en dividir los valores absolutos de los números y luego determinar el signo del resultado." +
    "\n\nReglas de los signos:" +
    "\n• (+) ÷ (+) = (+)" +
    "\n• (-) ÷ (-) = (+)" +
    "\n• (+) ÷ (-) = (-)" +
    "\n• (-) ÷ (+) = (-)" +
    "\n\nRecuerda que si los signos son iguales, el cociente es positivo. Si los signos son diferentes, el cociente es negativo." +
    "\n\nEl divisor nunca puede ser cero, ya que la división entre cero no está definida." +
    "\n\nEjemplos:" +
    "\n• 24 ÷ 6 = 4" +
    "\n• (-24) ÷ 6 = -4" +
    "\n• 30 ÷ (-5) = -6" +
    "\n• (-42) ÷ (-7) = 6",

  quiz: [
    {
      id: "de-1",
      question: "¿Cuál es el resultado de (-24) ÷ 6?",
      options: [
        { id: "a", text: "-4" },
        { id: "b", text: "4" },
        { id: "c", text: "-30" },
      ],
      correctOptionId: "a",
      feedback:
        "Los signos son diferentes, por lo tanto el resultado es negativo: (-24) ÷ 6 = -4.",
    },
    {
      id: "de-2",
      question: "¿Cuál es el resultado de (-36) ÷ (-9)?",
      options: [
        { id: "a", text: "-4" },
        { id: "b", text: "4" },
        { id: "c", text: "45" },
      ],
      correctOptionId: "b",
      feedback:
        "Cuando ambos números tienen el mismo signo, el resultado es positivo: (-36) ÷ (-9) = 4.",
    },
    {
      id: "de-3",
      question: "¿Cuál es el resultado de 42 ÷ (-6)?",
      options: [
        { id: "a", text: "-7" },
        { id: "b", text: "7" },
        { id: "c", text: "-36" },
      ],
      correctOptionId: "a",
      feedback:
        "Los signos son diferentes, por eso el resultado es negativo: 42 ÷ (-6) = -7.",
    },
    {
      id: "de-4",
      question: "¿Cuál de las siguientes afirmaciones es correcta?",
      options: [
        {
          id: "a",
          text: "Se puede dividir cualquier número entre cero.",
        },
        {
          id: "b",
          text: "La división entre cero no está definida.",
        },
        {
          id: "c",
          text: "Toda división entre enteros es negativa.",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Ningún número puede dividirse entre cero porque esa operación no está definida.",
    },
    {
      id: "de-5",
      question: "Cuando se dividen dos números enteros con signos diferentes, el resultado es:",
      options: [
        { id: "a", text: "Positivo" },
        { id: "b", text: "Negativo" },
        { id: "c", text: "Cero" },
      ],
      correctOptionId: "b",
      feedback:
        "Si los signos son diferentes, el cociente siempre será negativo.",
    },
  ],
},
];