import type { Topic } from "../topics";

export const ECUACIONES : Topic[] = [
{
  id: "ecuaciones-sumativas-parte-1",
  titulo: "Ecuaciones sumativas - Parte 1",
  youtubeId: "DHqBQ6Ip8Mo",

  texto:
    "Una ecuación es una igualdad matemática que contiene uno o más valores desconocidos. Estos valores se representan mediante letras llamadas incógnitas." +
    "\n\nPor ejemplo:" +
    "\n• x + 3 = 8" +
    "\n\nEn esta ecuación, x es la incógnita. Nuestro objetivo es encontrar el número que hace verdadera la igualdad." +
    "\n\nPara resolver una ecuación sumativa podemos utilizar la operación inversa. La operación inversa de la suma es la resta." +
    "\n\nEjemplo:" +
    "\n• x + 3 = 8" +
    "\n• x = 8 - 3" +
    "\n• x = 5" +
    "\n\nPodemos comprobar el resultado reemplazando la incógnita por el valor encontrado:" +
    "\n• 5 + 3 = 8" +
    "\n• 8 = 8" +
    "\n\nComo la igualdad es verdadera, sabemos que x = 5 es la solución correcta." +
    "\n\nOtro ejemplo:" +
    "\n• x + 7 = 12" +
    "\n• x = 12 - 7" +
    "\n• x = 5" +
    "\n\nRecuerda: resolver una ecuación significa encontrar el valor de la incógnita que hace verdadera la igualdad.",

  quiz: [
    {
      id: "es1-1",
      question: "¿Qué es una incógnita en una ecuación?",
      options: [
        {
          id: "a",
          text: "Un valor desconocido que debemos encontrar",
        },
        {
          id: "b",
          text: "El signo de igualdad",
        },
        {
          id: "c",
          text: "El resultado de una multiplicación",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La incógnita representa un valor desconocido que debemos encontrar para que la igualdad sea verdadera.",
    },

    {
      id: "es1-2",
      question: "¿Cuál es el valor de x en la ecuación x + 4 = 9?",
      options: [
        { id: "a", text: "13" },
        { id: "b", text: "5" },
        { id: "c", text: "4" },
      ],
      correctOptionId: "b",
      feedback:
        "Restamos 4 a 9 para despejar la incógnita: x = 9 - 4 = 5. Comprobación: 5 + 4 = 9.",
    },

    {
      id: "es1-3",
      question: "¿Cuál es el valor de x en la ecuación x + 6 = 14?",
      options: [
        { id: "a", text: "8" },
        { id: "b", text: "20" },
        { id: "c", text: "6" },
      ],
      correctOptionId: "a",
      feedback:
        "Aplicamos la operación inversa de la suma: x = 14 - 6 = 8.",
    },

    {
      id: "es1-4",
      question: "¿Cuál es la operación inversa de la suma?",
      options: [
        { id: "a", text: "Multiplicación" },
        { id: "b", text: "División" },
        { id: "c", text: "Resta" },
      ],
      correctOptionId: "c",
      feedback:
        "La resta es la operación inversa de la suma. Por eso podemos utilizarla para despejar una incógnita que está sumando.",
    },

    {
      id: "es1-5",
      question: "Si x + 10 = 17, ¿cuál es el valor de x?",
      options: [
        { id: "a", text: "27" },
        { id: "b", text: "7" },
        { id: "c", text: "10" },
      ],
      correctOptionId: "b",
      feedback:
        "Restamos 10 en ambos lados de la igualdad: x = 17 - 10 = 7. Podemos comprobarlo: 7 + 10 = 17.",
    },
  ],
},
{
  id: "ecuaciones-sumativas-parte-2",
  titulo: "Ecuaciones sumativas - Parte 2",
  youtubeId: "y5X6QHwR9D8",

  texto:
    "En las ecuaciones sumativas también podemos encontrar situaciones en las que la incógnita está acompañada por una resta o por números enteros negativos." +
    "\n\nPara encontrar el valor de la incógnita debemos mantener la igualdad y utilizar la operación inversa correspondiente." +
    "\n\nSi tenemos una resta, podemos utilizar una suma para despejar la incógnita." +
    "\n\nEjemplo:" +
    "\n• x - 4 = 7" +
    "\n• x = 7 + 4" +
    "\n• x = 11" +
    "\n\nComprobación:" +
    "\n• 11 - 4 = 7" +
    "\n• 7 = 7" +
    "\n\nTambién podemos encontrar resultados negativos." +
    "\n\nEjemplo:" +
    "\n• x + 8 = 3" +
    "\n• x = 3 - 8" +
    "\n• x = -5" +
    "\n\nComprobación:" +
    "\n• (-5) + 8 = 3" +
    "\n• 3 = 3" +
    "\n\nOtro ejemplo:" +
    "\n• x - 6 = -2" +
    "\n• x = -2 + 6" +
    "\n• x = 4" +
    "\n\nEs importante observar cuidadosamente el signo de cada número y recordar las reglas para sumar y restar números enteros.",

  quiz: [
    {
      id: "es2-1",
      question: "¿Cuál es el valor de x en la ecuación x - 5 = 8?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "13" },
        { id: "c", text: "-13" },
      ],
      correctOptionId: "b",
      feedback:
        "El 5 está restando, por lo tanto utilizamos su operación inversa: x = 8 + 5 = 13.",
    },

    {
      id: "es2-2",
      question: "¿Cuál es el valor de x en la ecuación x + 7 = 2?",
      options: [
        { id: "a", text: "-5" },
        { id: "b", text: "5" },
        { id: "c", text: "9" },
      ],
      correctOptionId: "a",
      feedback:
        "Restamos 7 en ambos lados: x = 2 - 7 = -5. Comprobación: (-5) + 7 = 2.",
    },

    {
      id: "es2-3",
      question: "¿Cuál es el valor de x en la ecuación x - 9 = -4?",
      options: [
        { id: "a", text: "-13" },
        { id: "b", text: "5" },
        { id: "c", text: "-5" },
      ],
      correctOptionId: "b",
      feedback:
        "Sumamos 9 en ambos lados de la ecuación: x = -4 + 9 = 5.",
    },

    {
      id: "es2-4",
      question: "¿Cuál es el valor de x en la ecuación x + 6 = -3?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "-9" },
        { id: "c", text: "-3" },
      ],
      correctOptionId: "b",
      feedback:
        "Restamos 6 en ambos lados: x = -3 - 6 = -9. Comprobación: (-9) + 6 = -3.",
    },

    {
      id: "es2-5",
      question: "Si x - 4 = -10, ¿cuál es el valor de x?",
      options: [
        { id: "a", text: "-6" },
        { id: "b", text: "6" },
        { id: "c", text: "-14" },
      ],
      correctOptionId: "a",
      feedback:
        "Sumamos 4 en ambos lados: x = -10 + 4 = -6. Al comprobar: (-6) - 4 = -10.",
    },
  ],
},
{
  id: "ecuaciones-sumativas-parte-3",
  titulo: "Ecuaciones sumativas - Parte 3",
  youtubeId: "W3WJ9RoBP08",

  texto:
    "En esta tercera parte trabajaremos ecuaciones sumativas en las que la incógnita puede aparecer en diferentes posiciones." +
    "\n\nHasta ahora hemos trabajado principalmente expresiones como:" +
    "\n• x + 5 = 12" +
    "\n• x - 4 = 7" +
    "\n\nSin embargo, también podemos encontrar ecuaciones como:" +
    "\n• 8 + x = 15" +
    "\n• 10 - x = 4" +
    "\n\nCuando la incógnita está sumando, podemos utilizar la resta para encontrar su valor." +
    "\n\nEjemplo:" +
    "\n• 8 + x = 15" +
    "\n• x = 15 - 8" +
    "\n• x = 7" +
    "\n\nCuando la incógnita aparece después del signo de resta debemos tener especial cuidado." +
    "\n\nEjemplo:" +
    "\n• 10 - x = 4" +
    "\n\nPodemos preguntarnos: ¿qué número debemos restarle a 10 para obtener 4?" +
    "\n• 10 - 6 = 4" +
    "\n• Por lo tanto, x = 6." +
    "\n\nTambién podemos resolverla algebraicamente:" +
    "\n• 10 - x = 4" +
    "\n• -x = 4 - 10" +
    "\n• -x = -6" +
    "\n• x = 6" +
    "\n\nOtro ejemplo:" +
    "\n• 3 - x = 8" +
    "\n• -x = 8 - 3" +
    "\n• -x = 5" +
    "\n• x = -5" +
    "\n\nComprobación:" +
    "\n• 3 - (-5) = 8" +
    "\n• 3 + 5 = 8" +
    "\n• 8 = 8" +
    "\n\nRecuerda que siempre podemos comprobar la solución sustituyendo la incógnita por el valor encontrado.",

  quiz: [
    {
      id: "es3-1",
      question: "¿Cuál es el valor de x en la ecuación 6 + x = 14?",
      options: [
        { id: "a", text: "8" },
        { id: "b", text: "20" },
        { id: "c", text: "6" },
      ],
      correctOptionId: "a",
      feedback:
        "La incógnita está sumando. Restamos 6 a 14: x = 14 - 6 = 8.",
    },

    {
      id: "es3-2",
      question: "¿Cuál es el valor de x en la ecuación 12 - x = 5?",
      options: [
        { id: "a", text: "17" },
        { id: "b", text: "7" },
        { id: "c", text: "-7" },
      ],
      correctOptionId: "b",
      feedback:
        "Buscamos el número que al restarlo de 12 produce 5. Como 12 - 7 = 5, entonces x = 7.",
    },

    {
      id: "es3-3",
      question: "¿Cuál es el valor de x en la ecuación 4 + x = -3?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "-1" },
        { id: "c", text: "-7" },
      ],
      correctOptionId: "c",
      feedback:
        "Restamos 4 en ambos lados: x = -3 - 4 = -7. Comprobación: 4 + (-7) = -3.",
    },

    {
      id: "es3-4",
      question: "¿Cuál es el valor de x en la ecuación 5 - x = 9?",
      options: [
        { id: "a", text: "-4" },
        { id: "b", text: "4" },
        { id: "c", text: "14" },
      ],
      correctOptionId: "a",
      feedback:
        "Tenemos 5 - x = 9. Entonces -x = 9 - 5 = 4 y, por lo tanto, x = -4. Comprobación: 5 - (-4) = 9.",
    },

    {
      id: "es3-5",
      question: "¿Para qué sirve comprobar la solución de una ecuación?",
      options: [
        {
          id: "a",
          text: "Para cambiar el valor de la incógnita",
        },
        {
          id: "b",
          text: "Para verificar que el valor encontrado hace verdadera la igualdad",
        },
        {
          id: "c",
          text: "Para convertir la ecuación en una multiplicación",
        },
      ],
      correctOptionId: "b",
      feedback:
        "La comprobación consiste en sustituir la incógnita por el valor obtenido y verificar que ambos lados de la ecuación sean iguales.",
    },
  ],
},
{
  id: "ecuaciones-multiplicativas-parte-1",
  titulo: "Ecuaciones multiplicativas - Parte 1",
  youtubeId: "6MGEzCgWBLo",

  texto:
    "Las ecuaciones multiplicativas son aquellas en las que la incógnita aparece multiplicada por un número." +
    "\n\nPor ejemplo:" +
    "\n• 3x = 12" +
    "\n\nLa expresión 3x significa 3 × x. Nuestro objetivo es encontrar el valor de x que hace verdadera la igualdad." +
    "\n\nPara despejar la incógnita utilizamos la operación inversa de la multiplicación, que es la división." +
    "\n\nEjemplo:" +
    "\n• 3x = 12" +
    "\n• x = 12 ÷ 3" +
    "\n• x = 4" +
    "\n\nPodemos comprobar el resultado sustituyendo x por 4:" +
    "\n• 3 × 4 = 12" +
    "\n• 12 = 12" +
    "\n\nOtro ejemplo:" +
    "\n• 5x = 30" +
    "\n• x = 30 ÷ 5" +
    "\n• x = 6" +
    "\n\nTambién podemos encontrar ecuaciones con coeficientes negativos." +
    "\n\nEjemplo:" +
    "\n• -4x = 20" +
    "\n• x = 20 ÷ (-4)" +
    "\n• x = -5" +
    "\n\nComprobación:" +
    "\n• (-4) × (-5) = 20" +
    "\n• 20 = 20" +
    "\n\nEl número que acompaña y multiplica a la incógnita se llama coeficiente. Para despejar x, dividimos ambos lados de la ecuación entre ese coeficiente.",

  quiz: [
    {
      id: "em1-1",
      question: "¿Cuál es la operación inversa de la multiplicación?",
      options: [
        { id: "a", text: "Suma" },
        { id: "b", text: "División" },
        { id: "c", text: "Resta" },
      ],
      correctOptionId: "b",
      feedback:
        "La división es la operación inversa de la multiplicación. Por eso la utilizamos para despejar una incógnita que está siendo multiplicada.",
    },

    {
      id: "em1-2",
      question: "¿Cuál es el valor de x en la ecuación 4x = 20?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "16" },
        { id: "c", text: "80" },
      ],
      correctOptionId: "a",
      feedback:
        "Dividimos ambos lados entre 4: x = 20 ÷ 4 = 5. Comprobación: 4 × 5 = 20.",
    },

    {
      id: "em1-3",
      question: "¿Cuál es el valor de x en la ecuación 7x = 42?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "6" },
        { id: "c", text: "35" },
      ],
      correctOptionId: "b",
      feedback:
        "El 7 está multiplicando a x. Dividimos 42 entre 7: x = 42 ÷ 7 = 6.",
    },

    {
      id: "em1-4",
      question: "¿Cuál es el valor de x en la ecuación -3x = 18?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "-6" },
        { id: "c", text: "-15" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos ambos lados entre -3: x = 18 ÷ (-3) = -6. Comprobación: (-3) × (-6) = 18.",
    },

    {
      id: "em1-5",
      question: "En la ecuación 8x = 40, ¿qué representa el número 8?",
      options: [
        {
          id: "a",
          text: "El coeficiente de la incógnita",
        },
        {
          id: "b",
          text: "La solución de la ecuación",
        },
        {
          id: "c",
          text: "El signo de igualdad",
        },
      ],
      correctOptionId: "a",
      feedback:
        "El número que multiplica a una incógnita se denomina coeficiente. En 8x = 40, el coeficiente de x es 8.",
    },
  ],
},
{
  id: "ecuaciones-multiplicativas-parte-2",
  titulo: "Ecuaciones multiplicativas - Parte 2",
  youtubeId: "2I7og50O_4A",

  texto:
    "En las ecuaciones multiplicativas también podemos encontrar la incógnita dividida entre un número." +
    "\n\nPor ejemplo:" +
    "\n• x ÷ 4 = 5" +
    "\n\nPara encontrar el valor de la incógnita utilizamos la operación inversa de la división, que es la multiplicación." +
    "\n\nEjemplo:" +
    "\n• x ÷ 4 = 5" +
    "\n• x = 5 × 4" +
    "\n• x = 20" +
    "\n\nPodemos comprobar el resultado sustituyendo x por 20:" +
    "\n• 20 ÷ 4 = 5" +
    "\n• 5 = 5" +
    "\n\nTambién podemos encontrar números negativos." +
    "\n\nEjemplo:" +
    "\n• x ÷ 3 = -6" +
    "\n• x = (-6) × 3" +
    "\n• x = -18" +
    "\n\nOtro ejemplo:" +
    "\n• x ÷ (-5) = 4" +
    "\n• x = 4 × (-5)" +
    "\n• x = -20" +
    "\n\nComprobación:" +
    "\n• (-20) ÷ (-5) = 4" +
    "\n• 4 = 4" +
    "\n\nDebemos recordar la ley de los signos:" +
    "\n• (+) × (+) = (+)" +
    "\n• (-) × (-) = (+)" +
    "\n• (+) × (-) = (-)" +
    "\n• (-) × (+) = (-)" +
    "\n\nEn resumen, si la incógnita está dividida entre un número, podemos despejarla multiplicando ambos lados de la igualdad por ese número.",

  quiz: [
    {
      id: "em2-1",
      question: "¿Cuál es el valor de x en la ecuación x ÷ 5 = 6?",
      options: [
        { id: "a", text: "30" },
        { id: "b", text: "11" },
        { id: "c", text: "1" },
      ],
      correctOptionId: "a",
      feedback:
        "La incógnita está dividida entre 5. Multiplicamos 6 × 5 = 30. Por lo tanto, x = 30.",
    },

    {
      id: "em2-2",
      question: "¿Cuál es el valor de x en la ecuación x ÷ 4 = -3?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "-12" },
        { id: "c", text: "-7" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos ambos lados por 4: x = (-3) × 4 = -12. Comprobación: (-12) ÷ 4 = -3.",
    },

    {
      id: "em2-3",
      question: "¿Cuál es el valor de x en la ecuación x ÷ (-6) = 5?",
      options: [
        { id: "a", text: "-30" },
        { id: "b", text: "30" },
        { id: "c", text: "-1" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos 5 por -6: x = 5 × (-6) = -30. Comprobación: (-30) ÷ (-6) = 5.",
    },

    {
      id: "em2-4",
      question: "¿Cuál es el valor de x en la ecuación x ÷ (-7) = -2?",
      options: [
        { id: "a", text: "-14" },
        { id: "b", text: "14" },
        { id: "c", text: "-9" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos (-2) × (-7). Como los signos son iguales, el resultado es positivo: x = 14.",
    },

    {
      id: "em2-5",
      question: "Si la incógnita está dividida entre un número, ¿qué operación utilizamos para despejarla?",
      options: [
        {
          id: "a",
          text: "La resta",
        },
        {
          id: "b",
          text: "La suma",
        },
        {
          id: "c",
          text: "La multiplicación",
        },
      ],
      correctOptionId: "c",
      feedback:
        "La multiplicación es la operación inversa de la división. Por eso podemos utilizarla para despejar una incógnita que está dividida entre un número.",
    },
  ],
},
{
  id: "ecuaciones-multiplicativas-parte-3",
  titulo: "Ecuaciones multiplicativas - Parte 3",
  youtubeId: "CIiLaEOMe7M",

  texto:
    "En esta tercera parte resolveremos ecuaciones multiplicativas con números enteros positivos y negativos, aplicando las operaciones inversas y la ley de los signos." +
    "\n\nAntes de resolver una ecuación debemos identificar qué operación está afectando a la incógnita." +
    "\n\nSi la incógnita está multiplicada por un número, utilizamos la división para despejarla." +
    "\n\nEjemplo:" +
    "\n• -5x = 35" +
    "\n• x = 35 ÷ (-5)" +
    "\n• x = -7" +
    "\n\nComprobación:" +
    "\n• (-5) × (-7) = 35" +
    "\n• 35 = 35" +
    "\n\nSi la incógnita está dividida entre un número, utilizamos la multiplicación." +
    "\n\nEjemplo:" +
    "\n• x ÷ (-4) = 6" +
    "\n• x = 6 × (-4)" +
    "\n• x = -24" +
    "\n\nComprobación:" +
    "\n• (-24) ÷ (-4) = 6" +
    "\n• 6 = 6" +
    "\n\nTambién podemos encontrar ecuaciones donde ambos lados contienen números negativos." +
    "\n\nEjemplo:" +
    "\n• -8x = -56" +
    "\n• x = (-56) ÷ (-8)" +
    "\n• x = 7" +
    "\n\nRecuerda la ley de los signos:" +
    "\n• Signos iguales producen un resultado positivo." +
    "\n• Signos diferentes producen un resultado negativo." +
    "\n\nPara resolver correctamente una ecuación multiplicativa debemos identificar la operación, aplicar su operación inversa, respetar la ley de los signos y comprobar la respuesta.",

  quiz: [
    {
      id: "em3-1",
      question: "¿Cuál es el valor de x en la ecuación -6x = 42?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "-7" },
        { id: "c", text: "-36" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos ambos lados entre -6: x = 42 ÷ (-6) = -7. Comprobación: (-6) × (-7) = 42.",
    },

    {
      id: "em3-2",
      question: "¿Cuál es el valor de x en la ecuación -9x = -72?",
      options: [
        { id: "a", text: "-8" },
        { id: "b", text: "8" },
        { id: "c", text: "63" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos -72 entre -9. Como ambos números tienen el mismo signo, el resultado es positivo: x = 8.",
    },

    {
      id: "em3-3",
      question: "¿Cuál es el valor de x en la ecuación x ÷ (-5) = -6?",
      options: [
        { id: "a", text: "-30" },
        { id: "b", text: "30" },
        { id: "c", text: "11" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos (-6) × (-5). Como los signos son iguales, obtenemos x = 30. Comprobación: 30 ÷ (-5) = -6.",
    },

    {
      id: "em3-4",
      question: "Si 12x = -96, ¿cuál es el valor de x?",
      options: [
        { id: "a", text: "-8" },
        { id: "b", text: "8" },
        { id: "c", text: "-84" },
      ],
      correctOptionId: "a",
      feedback:
        "Dividimos -96 entre 12: x = -96 ÷ 12 = -8. Como los signos son diferentes, el resultado es negativo.",
    },

    {
      id: "em3-5",
      question: "¿Cuál es el procedimiento correcto para resolver y verificar una ecuación multiplicativa?",
      options: [
        {
          id: "a",
          text: "Aplicar la operación inversa, hallar x y comprobar sustituyendo el resultado",
        },
        {
          id: "b",
          text: "Cambiar todos los signos y sumar los números",
        },
        {
          id: "c",
          text: "Multiplicar siempre los dos lados sin importar la operación",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Primero identificamos la operación que afecta a la incógnita, aplicamos su operación inversa y finalmente sustituimos el valor obtenido para comprobar que la igualdad sea verdadera.",
    },
  ],
},
]
  
    