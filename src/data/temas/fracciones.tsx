import type { Topic } from "../topics";

export const FRACCIONES : Topic[] = [
{
  id: "numeros-fraccionarios",
  titulo: "Números fraccionarios",
  youtubeId: "eSR1yzLI278",

  texto:
    "Los números fraccionarios permiten representar partes de una unidad o de un conjunto que ha sido dividido en partes iguales." +
    "\n\nUna fracción está formada por dos números separados por una línea:" +
    "\n• El numerador se encuentra en la parte superior e indica cuántas partes se toman." +
    "\n• El denominador se encuentra en la parte inferior e indica en cuántas partes iguales se divide la unidad." +
    "\n\nPor ejemplo, en la fracción 3/4:" +
    "\n• 3 es el numerador." +
    "\n• 4 es el denominador." +
    "\n• Significa que una unidad fue dividida en 4 partes iguales y se tomaron 3 de ellas." +
    "\n\nLas fracciones aparecen frecuentemente en situaciones de la vida cotidiana." +
    "\n\nEjemplos:" +
    "\n• Si una pizza se divide en 8 partes iguales y comemos 3, hemos comido 3/8 de la pizza." +
    "\n• Media hora puede representarse como 1/2 de una hora." +
    "\n• Si utilizamos 2 de 5 partes iguales de un objeto, representamos esa cantidad como 2/5." +
    "\n\nEl denominador de una fracción no puede ser cero, porque no es posible dividir una cantidad en cero partes." +
    "\n\nTambién debemos recordar que la línea de la fracción representa una división. Por ejemplo, 3/4 también significa 3 ÷ 4.",

  quiz: [
    {
      id: "nf-1",
      question: "¿Qué indica el numerador de una fracción?",
      options: [
        {
          id: "a",
          text: "La cantidad de partes que se toman",
        },
        {
          id: "b",
          text: "La cantidad de partes iguales en que se divide la unidad",
        },
        {
          id: "c",
          text: "El resultado de multiplicar la fracción",
        },
      ],
      correctOptionId: "a",
      feedback:
        "El numerador indica cuántas partes de la unidad estamos tomando o considerando.",
    },

    {
      id: "nf-2",
      question: "En la fracción 3/7, ¿cuál es el denominador?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "7" },
        { id: "c", text: "10" },
      ],
      correctOptionId: "b",
      feedback:
        "El denominador es el número que aparece en la parte inferior de una fracción. En 3/7, el denominador es 7.",
    },

    {
      id: "nf-3",
      question: "¿Qué representa la fracción 2/5?",
      options: [
        {
          id: "a",
          text: "Se toman 2 partes de una unidad dividida en 5 partes iguales",
        },
        {
          id: "b",
          text: "Se toman 5 partes de una unidad dividida en 2 partes iguales",
        },
        {
          id: "c",
          text: "La unidad se divide en 7 partes iguales",
        },
      ],
      correctOptionId: "a",
      feedback:
        "En 2/5, el denominador 5 indica que la unidad está dividida en 5 partes iguales y el numerador 2 indica que tomamos 2 de ellas.",
    },

    {
      id: "nf-4",
      question: "Una pizza se divide en 8 partes iguales y se comen 3. ¿Qué fracción representa la parte que se comió?",
      options: [
        { id: "a", text: "8/3" },
        { id: "b", text: "3/8" },
        { id: "c", text: "5/8" },
      ],
      correctOptionId: "b",
      feedback:
        "La pizza fue dividida en 8 partes iguales y se tomaron 3. Por eso, la cantidad consumida se representa como 3/8.",
    },

    {
      id: "nf-5",
      question: "¿Cuál de las siguientes afirmaciones es correcta?",
      options: [
        {
          id: "a",
          text: "El denominador de una fracción puede ser cero",
        },
        {
          id: "b",
          text: "La línea de una fracción también representa una división",
        },
        {
          id: "c",
          text: "Todas las fracciones representan números enteros",
        },
      ],
      correctOptionId: "b",
      feedback:
        "La línea fraccionaria representa una división. Por ejemplo, 3/4 equivale a realizar la operación 3 ÷ 4. El denominador nunca puede ser cero.",
    },
  ],
},
{
  id: "clases-fracciones-representacion-grafica",
  titulo: "Clases de fracciones y su representación gráfica",
  youtubeId: "cpfx6jhz9Nc",

  texto:
    "Las fracciones pueden clasificarse de acuerdo con la relación que existe entre su numerador y su denominador." +
    "\n\nLas principales clases de fracciones son:" +
    "\n\n• Fracción propia: el numerador es menor que el denominador. Su valor es menor que una unidad." +
    "\nEjemplos: 2/5, 3/4 y 5/8." +
    "\n\n• Fracción impropia: el numerador es mayor que el denominador. Su valor es mayor que una unidad." +
    "\nEjemplos: 5/3, 7/4 y 9/5." +
    "\n\n• Fracción aparente: el numerador es igual al denominador o es un múltiplo exacto de este. Su resultado corresponde a un número entero." +
    "\nEjemplos: 4/4 = 1, 8/4 = 2 y 12/3 = 4." +
    "\n\nPara representar gráficamente una fracción, dividimos una figura en tantas partes iguales como indique el denominador y señalamos tantas partes como indique el numerador." +
    "\n\nEjemplo:" +
    "\n• Para representar 3/4, dividimos una figura en 4 partes iguales y señalamos 3." +
    "\n\nEn una fracción impropia necesitamos representar más de una unidad." +
    "\n\nEjemplo:" +
    "\n• 5/4 representa una unidad completa (4/4) y una cuarta parte adicional (1/4)." +
    "\n\nLa representación gráfica nos permite comprender visualmente qué cantidad representa una fracción y si esta es menor, igual o mayor que una unidad.",

  quiz: [
    {
      id: "cf-1",
      question: "¿Cuál de las siguientes es una fracción propia?",
      options: [
        { id: "a", text: "3/5" },
        { id: "b", text: "7/4" },
        { id: "c", text: "8/4" },
      ],
      correctOptionId: "a",
      feedback:
        "3/5 es una fracción propia porque el numerador 3 es menor que el denominador 5.",
    },

    {
      id: "cf-2",
      question: "¿Cuál de las siguientes es una fracción impropia?",
      options: [
        { id: "a", text: "2/7" },
        { id: "b", text: "3/8" },
        { id: "c", text: "7/5" },
      ],
      correctOptionId: "c",
      feedback:
        "7/5 es una fracción impropia porque el numerador 7 es mayor que el denominador 5.",
    },

    {
      id: "cf-3",
      question: "¿Cuál de las siguientes es una fracción aparente?",
      options: [
        { id: "a", text: "3/5" },
        { id: "b", text: "8/4" },
        { id: "c", text: "7/9" },
      ],
      correctOptionId: "b",
      feedback:
        "8/4 es una fracción aparente porque el numerador es múltiplo del denominador y la división da como resultado un número entero: 8 ÷ 4 = 2.",
    },

    {
      id: "cf-4",
      question: "Para representar gráficamente la fracción 3/5, ¿qué debemos hacer?",
      options: [
        {
          id: "a",
          text: "Dividir la figura en 5 partes iguales y señalar 3",
        },
        {
          id: "b",
          text: "Dividir la figura en 3 partes iguales y señalar 5",
        },
        {
          id: "c",
          text: "Dividir la figura en 8 partes iguales",
        },
      ],
      correctOptionId: "a",
      feedback:
        "El denominador 5 indica que debemos dividir la unidad en 5 partes iguales y el numerador 3 indica que debemos señalar 3 de esas partes.",
    },

    {
      id: "cf-5",
      question: "¿Qué representa gráficamente la fracción 5/4?",
      options: [
        {
          id: "a",
          text: "Una cantidad menor que una unidad",
        },
        {
          id: "b",
          text: "Una unidad completa y 1/4 adicional",
        },
        {
          id: "c",
          text: "Exactamente cuatro unidades",
        },
      ],
      correctOptionId: "b",
      feedback:
        "5/4 es una fracción impropia. Podemos descomponerla como 4/4 + 1/4, es decir, una unidad completa y una cuarta parte adicional.",
    },
  ],
},
{
  id: "fracciones-representacion-grafica-parte-2",
  titulo: "Fracciones y su representación gráfica - Parte 2",
  youtubeId: "LV3CwglLAQ8",

  texto:
    "La representación gráfica de las fracciones nos permite observar de manera visual la cantidad que representa una fracción." +
    "\n\nPara representar correctamente una fracción debemos recordar que todas las unidades utilizadas deben dividirse en partes iguales." +
    "\n\nEl denominador indica en cuántas partes iguales se divide cada unidad y el numerador indica cuántas de esas partes debemos tomar o señalar." +
    "\n\nEjemplo con una fracción propia:" +
    "\n• Para representar 3/5, dividimos una unidad en 5 partes iguales y señalamos 3 de ellas." +
    "\n\nCuando el numerador es mayor que el denominador, necesitamos utilizar más de una unidad." +
    "\n\nEjemplo:" +
    "\n• Para representar 7/4, cada unidad se divide en 4 partes iguales." +
    "\n• Primero señalamos 4/4, que corresponde a una unidad completa." +
    "\n• Luego señalamos 3/4 de una segunda unidad." +
    "\n• Por lo tanto, 7/4 representa 1 unidad completa y 3/4 de otra." +
    "\n\nTambién podemos encontrar la fracción observando una representación gráfica." +
    "\n\nPara hacerlo:" +
    "\n• Observamos en cuántas partes iguales está dividida cada unidad. Este número será el denominador." +
    "\n• Contamos cuántas partes están señaladas en total. Este número será el numerador." +
    "\n\nEjemplo:" +
    "\n• Si cada figura está dividida en 6 partes iguales y encontramos 8 partes señaladas en total, la fracción representada es 8/6." +
    "\n\nUna representación gráfica puede contener una sola unidad, varias unidades completas o unidades completas acompañadas de una parte de otra unidad.",

  quiz: [
    {
      id: "frg2-1",
      question: "Para representar gráficamente 4/7, ¿en cuántas partes iguales debemos dividir la unidad?",
      options: [
        { id: "a", text: "4 partes" },
        { id: "b", text: "7 partes" },
        { id: "c", text: "11 partes" },
      ],
      correctOptionId: "b",
      feedback:
        "El denominador indica en cuántas partes iguales debemos dividir la unidad. En 4/7, el denominador es 7.",
    },

    {
      id: "frg2-2",
      question: "¿Cuántas partes debemos señalar para representar 5/8?",
      options: [
        { id: "a", text: "5 partes" },
        { id: "b", text: "8 partes" },
        { id: "c", text: "3 partes" },
      ],
      correctOptionId: "a",
      feedback:
        "El numerador indica cuántas partes debemos tomar o señalar. En 5/8, debemos señalar 5 de las 8 partes.",
    },

    {
      id: "frg2-3",
      question: "¿Cómo podemos representar gráficamente 7/4?",
      options: [
        {
          id: "a",
          text: "Una unidad completa y 3/4 de otra",
        },
        {
          id: "b",
          text: "Tres unidades completas y 1/4",
        },
        {
          id: "c",
          text: "Solamente 3/4 de una unidad",
        },
      ],
      correctOptionId: "a",
      feedback:
        "7/4 puede separarse como 4/4 + 3/4. Como 4/4 equivale a una unidad, obtenemos una unidad completa y 3/4 de otra.",
    },

    {
      id: "frg2-4",
      question: "Una figura está dividida en 6 partes iguales y 5 están señaladas. ¿Qué fracción representa?",
      options: [
        { id: "a", text: "6/5" },
        { id: "b", text: "5/6" },
        { id: "c", text: "1/6" },
      ],
      correctOptionId: "b",
      feedback:
        "La unidad está dividida en 6 partes, por lo que 6 es el denominador. Hay 5 partes señaladas, por lo que 5 es el numerador: 5/6.",
    },

    {
      id: "frg2-5",
      question: "Dos figuras están divididas en 4 partes iguales. La primera está completamente señalada y en la segunda hay 2 partes señaladas. ¿Qué fracción representan en total?",
      options: [
        { id: "a", text: "4/6" },
        { id: "b", text: "6/4" },
        { id: "c", text: "2/4" },
      ],
      correctOptionId: "b",
      feedback:
        "La primera figura tiene 4/4 señalados y la segunda tiene 2/4. En total tenemos 4/4 + 2/4 = 6/4.",
    },
  ],
},
{
  id: "fracciones-recta-numerica",
  titulo: "Representación gráfica en la recta numérica",
  youtubeId: "i8NarbnHLDg",

  texto:
    "Las fracciones también pueden representarse en la recta numérica. Esto nos permite visualizar su posición, compararlas y comprender qué tan cerca se encuentran de otros números." +
    "\n\nPara ubicar una fracción en la recta numérica debemos observar su denominador y su numerador." +
    "\n\nEl denominador indica en cuántas partes iguales debemos dividir cada unidad de la recta." +
    "\n\nEl numerador indica cuántas de esas partes debemos avanzar desde el cero." +
    "\n\nEjemplo:" +
    "\n• Para representar 3/4, dividimos el espacio entre 0 y 1 en 4 partes iguales." +
    "\n• Comenzamos desde 0 y avanzamos 3 de esas partes." +
    "\n• El punto alcanzado representa 3/4." +
    "\n\nOtro ejemplo:" +
    "\n• Para representar 2/5, dividimos el segmento entre 0 y 1 en 5 partes iguales." +
    "\n• Avanzamos 2 partes desde el cero." +
    "\n• Ese punto corresponde a 2/5." +
    "\n\nLas fracciones propias, como 1/4, 2/3 o 4/5, se encuentran entre 0 y 1 porque su numerador es menor que su denominador." +
    "\n\nTambién podemos encontrar fracciones equivalentes en el mismo punto de la recta numérica." +
    "\n\nEjemplo:" +
    "\n• 1/2 y 2/4 representan exactamente el mismo punto." +
    "\n\nLa recta numérica permite observar que, al igual que ocurre con los números enteros, una fracción ubicada más a la derecha representa un valor mayor.",

  quiz: [
    {
      id: "frn1-1",
      question: "Para representar 3/5 en la recta numérica, ¿en cuántas partes iguales debemos dividir el segmento entre 0 y 1?",
      options: [
        { id: "a", text: "3 partes" },
        { id: "b", text: "5 partes" },
        { id: "c", text: "8 partes" },
      ],
      correctOptionId: "b",
      feedback:
        "El denominador indica en cuántas partes iguales debemos dividir la unidad. En 3/5, el denominador es 5.",
    },

    {
      id: "frn1-2",
      question: "Después de dividir la unidad en 5 partes, ¿cuántas debemos avanzar desde cero para ubicar 3/5?",
      options: [
        { id: "a", text: "3 partes" },
        { id: "b", text: "5 partes" },
        { id: "c", text: "2 partes" },
      ],
      correctOptionId: "a",
      feedback:
        "El numerador indica cuántas partes avanzamos desde el cero. Como el numerador es 3, avanzamos tres partes.",
    },

    {
      id: "frn1-3",
      question: "¿Entre qué números enteros se encuentra la fracción 3/4?",
      options: [
        { id: "a", text: "Entre 0 y 1" },
        { id: "b", text: "Entre 1 y 2" },
        { id: "c", text: "Entre 2 y 3" },
      ],
      correctOptionId: "a",
      feedback:
        "3/4 es una fracción propia y su valor es menor que 1 pero mayor que 0. Por eso se encuentra entre 0 y 1.",
    },

    {
      id: "frn1-4",
      question: "¿Cuáles de estas fracciones ocupan el mismo punto en la recta numérica?",
      options: [
        { id: "a", text: "1/2 y 2/4" },
        { id: "b", text: "1/2 y 1/4" },
        { id: "c", text: "2/3 y 1/3" },
      ],
      correctOptionId: "a",
      feedback:
        "1/2 y 2/4 son fracciones equivalentes, por lo tanto representan el mismo valor y ocupan el mismo punto en la recta numérica.",
    },

    {
      id: "frn1-5",
      question: "Si una fracción está ubicada más a la derecha que otra en la recta numérica, podemos afirmar que:",
      options: [
        {
          id: "a",
          text: "Su valor es mayor",
        },
        {
          id: "b",
          text: "Su valor siempre es menor",
        },
        {
          id: "c",
          text: "Las dos fracciones tienen necesariamente el mismo valor",
        },
      ],
      correctOptionId: "a",
      feedback:
        "En la recta numérica los valores aumentan hacia la derecha. Por eso, una fracción situada más a la derecha tiene un valor mayor.",
    },
  ],
},
{
  id: "fracciones-recta-numerica-parte-2",
  titulo: "Representación gráfica en la recta numérica - Parte 2",
  youtubeId: "0uiydV7IW0E",

  texto:
    "En la recta numérica también podemos representar fracciones mayores que una unidad y fracciones negativas." +
    "\n\nCuando una fracción es impropia, su numerador es mayor que su denominador y su valor es mayor que 1." +
    "\n\nPara ubicar una fracción impropia debemos identificar entre qué números enteros se encuentra." +
    "\n\nEjemplo:" +
    "\n• Para representar 5/4, dividimos cada unidad de la recta en 4 partes iguales." +
    "\n• Desde el cero avanzamos 5 partes." +
    "\n• Las primeras 4 partes forman una unidad completa y avanzamos 1/4 adicional." +
    "\n• Por lo tanto, 5/4 se encuentra entre 1 y 2." +
    "\n\nOtro ejemplo:" +
    "\n• 7/3 = 2 + 1/3." +
    "\n• Por esta razón, 7/3 se encuentra entre 2 y 3." +
    "\n\nTambién podemos representar fracciones negativas. Estas se encuentran a la izquierda del cero." +
    "\n\nEjemplo:" +
    "\n• Para representar -3/4, dividimos la unidad en 4 partes iguales y avanzamos 3 partes hacia la izquierda desde el cero." +
    "\n\nDe manera similar:" +
    "\n• -5/2 se encuentra entre -3 y -2." +
    "\n\nRecuerda que en la recta numérica los valores aumentan hacia la derecha y disminuyen hacia la izquierda." +
    "\n\nPor esta razón:" +
    "\n• 5/4 > 3/4" +
    "\n• -1/2 > -3/4" +
    "\n\nLa recta numérica nos permite representar, ordenar y comparar tanto fracciones positivas como negativas.",

  quiz: [
    {
      id: "frn2-1",
      question: "¿Entre qué números enteros se encuentra la fracción 5/4?",
      options: [
        { id: "a", text: "Entre 0 y 1" },
        { id: "b", text: "Entre 1 y 2" },
        { id: "c", text: "Entre 2 y 3" },
      ],
      correctOptionId: "b",
      feedback:
        "5/4 equivale a 1 + 1/4. Por lo tanto, su posición en la recta numérica se encuentra entre 1 y 2.",
    },

    {
      id: "frn2-2",
      question: "¿Entre qué números enteros se encuentra 7/3?",
      options: [
        { id: "a", text: "Entre 1 y 2" },
        { id: "b", text: "Entre 2 y 3" },
        { id: "c", text: "Entre 3 y 4" },
      ],
      correctOptionId: "b",
      feedback:
        "7/3 equivale a 2 + 1/3. Por eso, se encuentra después del 2 y antes del 3.",
    },

    {
      id: "frn2-3",
      question: "¿Dónde se encuentra la fracción -3/4 en la recta numérica?",
      options: [
        {
          id: "a",
          text: "Entre -1 y 0",
        },
        {
          id: "b",
          text: "Entre 0 y 1",
        },
        {
          id: "c",
          text: "Entre -2 y -1",
        },
      ],
      correctOptionId: "a",
      feedback:
        "-3/4 es un número negativo cuyo valor absoluto es menor que 1. Por eso se encuentra entre -1 y 0.",
    },

    {
      id: "frn2-4",
      question: "¿Cuál de estas fracciones está más a la derecha en la recta numérica?",
      options: [
        { id: "a", text: "-3/4" },
        { id: "b", text: "-1/2" },
        { id: "c", text: "-5/4" },
      ],
      correctOptionId: "b",
      feedback:
        "-1/2 es mayor que -3/4 y -5/4. Entre números negativos, el valor más cercano al cero se encuentra más a la derecha.",
    },

    {
      id: "frn2-5",
      question: "¿Cuál afirmación es correcta sobre la fracción -5/2?",
      options: [
        {
          id: "a",
          text: "Se encuentra entre -3 y -2",
        },
        {
          id: "b",
          text: "Se encuentra entre 2 y 3",
        },
        {
          id: "c",
          text: "Se encuentra entre -1 y 0",
        },
      ],
      correctOptionId: "a",
      feedback:
        "-5/2 equivale a -2.5. Por lo tanto, se encuentra exactamente entre -3 y -2 en la recta numérica.",
    },
  ],
},
{
  id: "suma-fracciones",
  titulo: "Suma de fracciones",
  youtubeId: "RTfq1xKV3Jg",

  texto:
    "Para sumar fracciones debemos observar primero sus denominadores." +
    "\n\nCuando las fracciones tienen el mismo denominador, sumamos los numeradores y conservamos el denominador." +
    "\n\nEjemplo:" +
    "\n• 2/7 + 3/7 = 5/7" +
    "\n\nEl denominador permanece igual porque las partes tienen el mismo tamaño." +
    "\n\nOtro ejemplo:" +
    "\n• 1/5 + 2/5 = 3/5" +
    "\n\nCuando las fracciones tienen denominadores diferentes, primero debemos convertirlas en fracciones equivalentes que tengan un denominador común." +
    "\n\nEjemplo:" +
    "\n• 1/2 + 1/4" +
    "\n• Convertimos 1/2 en 2/4." +
    "\n• Entonces: 2/4 + 1/4 = 3/4." +
    "\n\nOtro ejemplo:" +
    "\n• 1/3 + 1/6" +
    "\n• 1/3 equivale a 2/6." +
    "\n• Entonces: 2/6 + 1/6 = 3/6." +
    "\n• Podemos simplificar 3/6 y obtener 1/2." +
    "\n\nPasos para sumar fracciones con diferente denominador:" +
    "\n• Buscar un denominador común." +
    "\n• Transformar las fracciones en fracciones equivalentes." +
    "\n• Sumar los numeradores." +
    "\n• Conservar el denominador común." +
    "\n• Simplificar el resultado cuando sea posible." +
    "\n\nMás adelante aprenderemos a utilizar el mínimo común múltiplo (MCM) para encontrar de manera organizada un denominador común.",

  quiz: [
    {
      id: "sf-1",
      question: "¿Cuál es el resultado de 2/5 + 1/5?",
      options: [
        { id: "a", text: "3/5" },
        { id: "b", text: "3/10" },
        { id: "c", text: "2/10" },
      ],
      correctOptionId: "a",
      feedback:
        "Como los denominadores son iguales, sumamos los numeradores y conservamos el denominador: 2/5 + 1/5 = 3/5.",
    },

    {
      id: "sf-2",
      question: "¿Cuál es el resultado de 3/8 + 2/8?",
      options: [
        { id: "a", text: "5/16" },
        { id: "b", text: "5/8" },
        { id: "c", text: "1/8" },
      ],
      correctOptionId: "b",
      feedback:
        "Los denominadores son iguales. Sumamos 3 + 2 = 5 y conservamos el denominador 8. El resultado es 5/8.",
    },

    {
      id: "sf-3",
      question: "¿Cuál es el resultado de 1/2 + 1/4?",
      options: [
        { id: "a", text: "2/6" },
        { id: "b", text: "2/4" },
        { id: "c", text: "3/4" },
      ],
      correctOptionId: "c",
      feedback:
        "Convertimos 1/2 en 2/4. Luego sumamos: 2/4 + 1/4 = 3/4.",
    },

    {
      id: "sf-4",
      question: "¿Cuál es el resultado de 1/3 + 1/6 simplificado?",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "2/9" },
        { id: "c", text: "2/6" },
      ],
      correctOptionId: "a",
      feedback:
        "Convertimos 1/3 en 2/6. Entonces 2/6 + 1/6 = 3/6. Al simplificar 3/6 obtenemos 1/2.",
    },

    {
      id: "sf-5",
      question: "¿Qué debemos hacer primero al sumar fracciones con denominadores diferentes?",
      options: [
        {
          id: "a",
          text: "Sumar directamente los denominadores",
        },
        {
          id: "b",
          text: "Buscar un denominador común",
        },
        {
          id: "c",
          text: "Multiplicar únicamente los numeradores",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Cuando los denominadores son diferentes debemos buscar primero un denominador común y convertir las fracciones en fracciones equivalentes.",
    },
  ],
},
{
  id: "resta-fracciones",
  titulo: "Resta de fracciones",
  youtubeId: "aNGmwdcvfAs",

  texto:
    "Para restar fracciones debemos observar primero si sus denominadores son iguales o diferentes." +
    "\n\nCuando las fracciones tienen el mismo denominador, restamos los numeradores y conservamos el denominador." +
    "\n\nEjemplo:" +
    "\n• 5/7 - 2/7 = 3/7" +
    "\n\nEl denominador permanece igual porque las partes que estamos restando tienen el mismo tamaño." +
    "\n\nOtro ejemplo:" +
    "\n• 7/9 - 3/9 = 4/9" +
    "\n\nCuando las fracciones tienen denominadores diferentes, primero debemos convertirlas en fracciones equivalentes con un denominador común." +
    "\n\nEjemplo:" +
    "\n• 3/4 - 1/2" +
    "\n• Convertimos 1/2 en 2/4." +
    "\n• Entonces: 3/4 - 2/4 = 1/4." +
    "\n\nOtro ejemplo:" +
    "\n• 5/6 - 1/3" +
    "\n• 1/3 equivale a 2/6." +
    "\n• Entonces: 5/6 - 2/6 = 3/6." +
    "\n• Simplificamos 3/6 y obtenemos 1/2." +
    "\n\nPasos para restar fracciones con diferente denominador:" +
    "\n• Buscar un denominador común." +
    "\n• Convertir las fracciones en fracciones equivalentes." +
    "\n• Restar los numeradores." +
    "\n• Conservar el denominador común." +
    "\n• Simplificar el resultado cuando sea posible." +
    "\n\nRecuerda que no debemos restar directamente los denominadores. Primero necesitamos que las fracciones representen partes del mismo tamaño.",

  quiz: [
    {
      id: "rf-1",
      question: "¿Cuál es el resultado de 4/7 - 2/7?",
      options: [
        { id: "a", text: "2/7" },
        { id: "b", text: "2/14" },
        { id: "c", text: "6/7" },
      ],
      correctOptionId: "a",
      feedback:
        "Como los denominadores son iguales, restamos los numeradores: 4 - 2 = 2 y conservamos el denominador 7. El resultado es 2/7.",
    },

    {
      id: "rf-2",
      question: "¿Cuál es el resultado de 7/9 - 3/9?",
      options: [
        { id: "a", text: "4/18" },
        { id: "b", text: "10/9" },
        { id: "c", text: "4/9" },
      ],
      correctOptionId: "c",
      feedback:
        "Los denominadores son iguales. Restamos 7 - 3 = 4 y conservamos el denominador 9. El resultado es 4/9.",
    },

    {
      id: "rf-3",
      question: "¿Cuál es el resultado de 3/4 - 1/2?",
      options: [
        { id: "a", text: "2/2" },
        { id: "b", text: "1/4" },
        { id: "c", text: "2/4" },
      ],
      correctOptionId: "b",
      feedback:
        "Convertimos 1/2 en su fracción equivalente 2/4. Luego: 3/4 - 2/4 = 1/4.",
    },

    {
      id: "rf-4",
      question: "¿Cuál es el resultado simplificado de 5/6 - 1/3?",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "4/3" },
        { id: "c", text: "4/6" },
      ],
      correctOptionId: "a",
      feedback:
        "Convertimos 1/3 en 2/6. Entonces: 5/6 - 2/6 = 3/6. Al simplificar 3/6 obtenemos 1/2.",
    },

    {
      id: "rf-5",
      question: "Al restar fracciones con denominadores diferentes, ¿qué debemos hacer primero?",
      options: [
        {
          id: "a",
          text: "Restar directamente los numeradores y denominadores",
        },
        {
          id: "b",
          text: "Buscar un denominador común",
        },
        {
          id: "c",
          text: "Multiplicar únicamente los numeradores",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Antes de restar fracciones con denominadores diferentes debemos encontrar un denominador común y obtener fracciones equivalentes.",
    },
  ],
},
{
  id: "multiplicacion-fracciones",
  titulo: "Multiplicación de fracciones",
  youtubeId: "G0KnFUGkzOE",

  texto:
    "La multiplicación de fracciones es una operación que permite encontrar el producto entre dos o más fracciones." +
    "\n\nA diferencia de la suma y la resta, para multiplicar fracciones no es necesario que tengan el mismo denominador." +
    "\n\nEl procedimiento es sencillo:" +
    "\n• Multiplicamos los numeradores entre sí." +
    "\n• Multiplicamos los denominadores entre sí." +
    "\n• Simplificamos el resultado cuando sea posible." +
    "\n\nRegla general:" +
    "\n• a/b × c/d = (a × c)/(b × d)" +
    "\n\nEjemplo:" +
    "\n• 2/3 × 4/5" +
    "\n• Numeradores: 2 × 4 = 8" +
    "\n• Denominadores: 3 × 5 = 15" +
    "\n• Resultado: 8/15" +
    "\n\nOtro ejemplo:" +
    "\n• 3/4 × 2/5 = 6/20" +
    "\n• Simplificamos 6/20 dividiendo numerador y denominador entre 2." +
    "\n• Resultado: 3/10" +
    "\n\nTambién podemos multiplicar una fracción por un número entero. Para hacerlo, escribimos el número entero como una fracción con denominador 1." +
    "\n\nEjemplo:" +
    "\n• 3 × 2/5" +
    "\n• 3 = 3/1" +
    "\n• 3/1 × 2/5 = 6/5" +
    "\n\nEn algunos casos podemos simplificar antes de realizar la multiplicación. Esto facilita los cálculos y permite trabajar con números más pequeños." +
    "\n\nRecuerda: en la multiplicación de fracciones multiplicamos numerador por numerador y denominador por denominador.",

  quiz: [
    {
      id: "mf-1",
      question: "¿Cuál es el resultado de 2/3 × 4/5?",
      options: [
        { id: "a", text: "6/8" },
        { id: "b", text: "8/15" },
        { id: "c", text: "8/8" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos los numeradores: 2 × 4 = 8. Luego los denominadores: 3 × 5 = 15. El resultado es 8/15.",
    },

    {
      id: "mf-2",
      question: "¿Cuál es el resultado de 1/2 × 3/4?",
      options: [
        { id: "a", text: "3/8" },
        { id: "b", text: "4/6" },
        { id: "c", text: "3/6" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos numerador por numerador y denominador por denominador: (1 × 3)/(2 × 4) = 3/8.",
    },

    {
      id: "mf-3",
      question: "¿Cuál es el resultado simplificado de 3/4 × 2/5?",
      options: [
        { id: "a", text: "6/9" },
        { id: "b", text: "3/10" },
        { id: "c", text: "5/9" },
      ],
      correctOptionId: "b",
      feedback:
        "Primero obtenemos 6/20. Dividimos numerador y denominador entre 2 y obtenemos la fracción simplificada 3/10.",
    },

    {
      id: "mf-4",
      question: "¿Cuál es el resultado de 3 × 2/5?",
      options: [
        { id: "a", text: "6/5" },
        { id: "b", text: "5/6" },
        { id: "c", text: "6/15" },
      ],
      correctOptionId: "a",
      feedback:
        "Escribimos 3 como 3/1. Luego multiplicamos: 3/1 × 2/5 = 6/5.",
    },

    {
      id: "mf-5",
      question: "¿Cuál es el procedimiento correcto para multiplicar dos fracciones?",
      options: [
        {
          id: "a",
          text: "Sumar los numeradores y multiplicar los denominadores",
        },
        {
          id: "b",
          text: "Buscar primero un denominador común",
        },
        {
          id: "c",
          text: "Multiplicar numerador por numerador y denominador por denominador",
        },
      ],
      correctOptionId: "c",
      feedback:
        "Para multiplicar fracciones multiplicamos directamente los numeradores entre sí y los denominadores entre sí. Después simplificamos el resultado cuando sea posible.",
    },
  ],
},
{
  id: "division-fracciones",
  titulo: "División de fracciones",
  youtubeId: "Sqi2H6-UXpI",

  texto:
    "La división de fracciones permite repartir o determinar cuántas veces una fracción está contenida en otra." +
    "\n\nPara dividir dos fracciones utilizamos el inverso multiplicativo de la segunda fracción." +
    "\n\nEl inverso de una fracción se obtiene intercambiando su numerador y su denominador." +
    "\n\nEjemplos de inversos:" +
    "\n• El inverso de 2/3 es 3/2." +
    "\n• El inverso de 5/7 es 7/5." +
    "\n• El inverso de 4/9 es 9/4." +
    "\n\nPara dividir fracciones seguimos estos pasos:" +
    "\n• Conservamos la primera fracción." +
    "\n• Cambiamos la división por una multiplicación." +
    "\n• Invertimos la segunda fracción." +
    "\n• Multiplicamos numeradores entre sí y denominadores entre sí." +
    "\n• Simplificamos el resultado cuando sea posible." +
    "\n\nRegla general:" +
    "\n• a/b ÷ c/d = a/b × d/c" +
    "\n\nEjemplo:" +
    "\n• 2/3 ÷ 4/5" +
    "\n• Conservamos 2/3." +
    "\n• Cambiamos ÷ por ×." +
    "\n• Invertimos 4/5 y obtenemos 5/4." +
    "\n• 2/3 × 5/4 = 10/12." +
    "\n• Simplificamos: 10/12 = 5/6." +
    "\n\nOtro ejemplo:" +
    "\n• 3/4 ÷ 1/2" +
    "\n• 3/4 × 2/1 = 6/4" +
    "\n• Simplificamos: 6/4 = 3/2." +
    "\n\nTambién podemos dividir una fracción entre un número entero. Para hacerlo, escribimos el número entero como una fracción con denominador 1." +
    "\n\nEjemplo:" +
    "\n• 3/5 ÷ 2" +
    "\n• 2 = 2/1" +
    "\n• 3/5 × 1/2 = 3/10" +
    "\n\nRecuerda: en una división de fracciones solamente invertimos la segunda fracción, nunca la primera.",

  quiz: [
    {
      id: "df-1",
      question: "¿Cuál es el inverso de la fracción 3/5?",
      options: [
        { id: "a", text: "5/3" },
        { id: "b", text: "3/5" },
        { id: "c", text: "-3/5" },
      ],
      correctOptionId: "a",
      feedback:
        "Para obtener el inverso intercambiamos el numerador y el denominador. El inverso de 3/5 es 5/3.",
    },

    {
      id: "df-2",
      question: "¿Cuál es el resultado de 2/3 ÷ 4/5?",
      options: [
        { id: "a", text: "8/15" },
        { id: "b", text: "5/6" },
        { id: "c", text: "6/5" },
      ],
      correctOptionId: "b",
      feedback:
        "Invertimos la segunda fracción: 2/3 × 5/4 = 10/12. Al simplificar obtenemos 5/6.",
    },

    {
      id: "df-3",
      question: "¿Cuál es el resultado de 3/4 ÷ 1/2?",
      options: [
        { id: "a", text: "3/8" },
        { id: "b", text: "3/2" },
        { id: "c", text: "2/3" },
      ],
      correctOptionId: "b",
      feedback:
        "Invertimos 1/2 y obtenemos 2/1. Entonces 3/4 × 2/1 = 6/4, que simplificado es 3/2.",
    },

    {
      id: "df-4",
      question: "¿Cuál es el resultado de 3/5 ÷ 2?",
      options: [
        { id: "a", text: "6/5" },
        { id: "b", text: "3/10" },
        { id: "c", text: "5/6" },
      ],
      correctOptionId: "b",
      feedback:
        "Escribimos 2 como 2/1 e invertimos la segunda fracción: 3/5 × 1/2 = 3/10.",
    },

    {
      id: "df-5",
      question: "¿Cuál es el procedimiento correcto para dividir dos fracciones?",
      options: [
        {
          id: "a",
          text: "Invertir las dos fracciones y sumarlas",
        },
        {
          id: "b",
          text: "Conservar la primera, invertir la segunda y multiplicar",
        },
        {
          id: "c",
          text: "Dividir los numeradores y sumar los denominadores",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Para dividir fracciones conservamos la primera, cambiamos la división por multiplicación e invertimos únicamente la segunda fracción.",
    },
  ],
},
{
  id: "potenciacion-fracciones",
  titulo: "Potenciación de fracciones",
  youtubeId: "S2yhvw-2R0Y",

  texto:
    "La potenciación de fracciones es una operación que consiste en multiplicar una fracción por sí misma varias veces." +
    "\n\nUna potencia está formada por una base y un exponente." +
    "\n\n• La base es la fracción que vamos a multiplicar." +
    "\n• El exponente indica cuántas veces se utiliza la fracción como factor." +
    "\n\nPor ejemplo:" +
    "\n• (2/3)² = 2/3 × 2/3" +
    "\n\nPara calcular la potencia de una fracción, elevamos tanto el numerador como el denominador al exponente indicado." +
    "\n\nRegla general:" +
    "\n• (a/b)ⁿ = aⁿ/bⁿ" +
    "\n\nEjemplo:" +
    "\n• (2/3)² = 2²/3² = 4/9" +
    "\n\nOtro ejemplo:" +
    "\n• (3/5)³ = 3³/5³ = 27/125" +
    "\n\nCuando el exponente es 1, la fracción conserva su valor:" +
    "\n• (4/7)¹ = 4/7" +
    "\n\nCuando el exponente es 0 y la fracción es diferente de cero, el resultado es 1:" +
    "\n• (3/5)⁰ = 1" +
    "\n\nTambién podemos encontrar fracciones negativas. En estos casos debemos observar si el exponente es par o impar." +
    "\n\n• Si el exponente es par, el resultado es positivo." +
    "\n• Si el exponente es impar, el resultado es negativo." +
    "\n\nEjemplos:" +
    "\n• (-2/3)² = 4/9" +
    "\n• (-2/3)³ = -8/27" +
    "\n\nRecuerda: para elevar una fracción a una potencia, aplicamos el exponente tanto al numerador como al denominador.",

  quiz: [
    {
      id: "pf-1",
      question: "¿Cuál es el resultado de (2/3)²?",
      options: [
        { id: "a", text: "4/9" },
        { id: "b", text: "4/6" },
        { id: "c", text: "2/9" },
      ],
      correctOptionId: "a",
      feedback:
        "Elevamos numerador y denominador al cuadrado: 2² = 4 y 3² = 9. Por lo tanto, (2/3)² = 4/9.",
    },

    {
      id: "pf-2",
      question: "¿Cuál es el resultado de (3/4)³?",
      options: [
        { id: "a", text: "9/16" },
        { id: "b", text: "27/64" },
        { id: "c", text: "6/12" },
      ],
      correctOptionId: "b",
      feedback:
        "Elevamos el numerador y el denominador al cubo: 3³ = 27 y 4³ = 64. El resultado es 27/64.",
    },

    {
      id: "pf-3",
      question: "¿Cuál es el resultado de (5/8)⁰?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "5/8" },
        { id: "c", text: "1" },
      ],
      correctOptionId: "c",
      feedback:
        "Toda cantidad diferente de cero elevada al exponente 0 es igual a 1. Por eso, (5/8)⁰ = 1.",
    },

    {
      id: "pf-4",
      question: "¿Cuál es el resultado de (-2/5)²?",
      options: [
        { id: "a", text: "-4/25" },
        { id: "b", text: "4/25" },
        { id: "c", text: "4/10" },
      ],
      correctOptionId: "b",
      feedback:
        "Elevamos numerador y denominador al cuadrado. Como el exponente es par, el resultado es positivo: (-2/5)² = 4/25.",
    },

    {
      id: "pf-5",
      question: "¿Cuál es el resultado de (-2/3)³?",
      options: [
        { id: "a", text: "-8/27" },
        { id: "b", text: "8/27" },
        { id: "c", text: "-6/9" },
      ],
      correctOptionId: "a",
      feedback:
        "Elevamos numerador y denominador al cubo. Como la base es negativa y el exponente es impar, el resultado es negativo: (-2/3)³ = -8/27.",
    },
  ],
},
{
  id: "numeros-mixtos",
  titulo: "Números mixtos",
  youtubeId: "HbtaSAVg_4I",

  texto:
    "Un número mixto es una expresión formada por un número entero y una fracción propia." +
    "\n\nLos números mixtos se utilizan para representar cantidades mayores que una unidad de una forma sencilla." +
    "\n\nPor ejemplo:" +
    "\n• 2 1/3 significa dos unidades completas y una tercera parte de otra unidad." +
    "\n• 1 3/4 significa una unidad completa y tres cuartas partes de otra." +
    "\n\nUn número mixto tiene dos componentes principales:" +
    "\n• Parte entera: indica la cantidad de unidades completas." +
    "\n• Parte fraccionaria: representa una parte adicional de la unidad." +
    "\n\nLos números mixtos están relacionados con las fracciones impropias." +
    "\n\nUna fracción impropia tiene un numerador mayor que su denominador y puede convertirse en un número mixto." +
    "\n\nPara convertir una fracción impropia en número mixto:" +
    "\n• Dividimos el numerador entre el denominador." +
    "\n• El cociente será la parte entera." +
    "\n• El residuo será el numerador de la parte fraccionaria." +
    "\n• Conservamos el mismo denominador." +
    "\n\nEjemplo:" +
    "\n• Convertir 7/3 en número mixto." +
    "\n• 7 ÷ 3 = 2 y sobra 1." +
    "\n• El 2 será la parte entera." +
    "\n• El residuo 1 será el nuevo numerador." +
    "\n• Conservamos el denominador 3." +
    "\n• Por lo tanto: 7/3 = 2 1/3." +
    "\n\nOtro ejemplo:" +
    "\n• 11/4" +
    "\n• 11 ÷ 4 = 2 y sobra 3." +
    "\n• Por lo tanto: 11/4 = 2 3/4." +
    "\n\nSi la división es exacta, obtenemos solamente un número entero." +
    "\n\nEjemplo:" +
    "\n• 8/4 = 2." +
    "\n\nRecuerda: un número mixto representa unidades completas acompañadas de una fracción propia.",

  quiz: [
    {
      id: "nm1-1",
      question: "¿Qué es un número mixto?",
      options: [
        {
          id: "a",
          text: "Un número formado por una parte entera y una fracción propia",
        },
        {
          id: "b",
          text: "Una fracción que siempre es menor que uno",
        },
        {
          id: "c",
          text: "La suma de dos números negativos",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Un número mixto está compuesto por una cantidad entera de unidades y una fracción propia adicional.",
    },

    {
      id: "nm1-2",
      question: "¿Qué número mixto representa la fracción 7/3?",
      options: [
        { id: "a", text: "2 1/3" },
        { id: "b", text: "3 1/2" },
        { id: "c", text: "1 2/3" },
      ],
      correctOptionId: "a",
      feedback:
        "Dividimos 7 entre 3. Obtenemos 2 y sobra 1. Por lo tanto, 7/3 = 2 1/3.",
    },

    {
      id: "nm1-3",
      question: "¿Qué número mixto representa la fracción 11/4?",
      options: [
        { id: "a", text: "3 1/4" },
        { id: "b", text: "2 3/4" },
        { id: "c", text: "2 1/4" },
      ],
      correctOptionId: "b",
      feedback:
        "11 ÷ 4 = 2 y sobra 3. El cociente es la parte entera y el residuo es el nuevo numerador: 2 3/4.",
    },

    {
      id: "nm1-4",
      question: "En el número mixto 3 2/5, ¿cuál es la parte entera?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "5" },
        { id: "c", text: "3" },
      ],
      correctOptionId: "c",
      feedback:
        "En 3 2/5, el número 3 representa las unidades completas y, por lo tanto, es la parte entera.",
    },

    {
      id: "nm1-5",
      question: "¿Qué ocurre al convertir 12/4 en un número mixto?",
      options: [
        {
          id: "a",
          text: "Obtenemos 3",
        },
        {
          id: "b",
          text: "Obtenemos 2 1/4",
        },
        {
          id: "c",
          text: "Obtenemos 4 1/2",
        },
      ],
      correctOptionId: "a",
      feedback:
        "12 es divisible exactamente entre 4. Como 12 ÷ 4 = 3 y no queda residuo, el resultado es simplemente el número entero 3.",
    },
  ],
},
{
  id: "numeros-mixtos-parte-2",
  titulo: "Números mixtos - Parte 2",
  youtubeId: "hX-wYLcNgo4",

  texto:
    "En esta segunda parte aprenderemos a convertir un número mixto en una fracción impropia." +
    "\n\nRecordemos que un número mixto está formado por una parte entera y una fracción propia." +
    "\n\nPor ejemplo:" +
    "\n• 2 1/3 tiene una parte entera igual a 2 y una parte fraccionaria igual a 1/3." +
    "\n\nPara convertir un número mixto en una fracción impropia seguimos estos pasos:" +
    "\n• Multiplicamos la parte entera por el denominador." +
    "\n• Sumamos el numerador al resultado obtenido." +
    "\n• El resultado será el nuevo numerador." +
    "\n• Conservamos el mismo denominador." +
    "\n\nEjemplo:" +
    "\n• Convertir 2 1/3 en una fracción impropia." +
    "\n• Multiplicamos: 2 × 3 = 6." +
    "\n• Sumamos el numerador: 6 + 1 = 7." +
    "\n• Conservamos el denominador 3." +
    "\n• Por lo tanto: 2 1/3 = 7/3." +
    "\n\nOtro ejemplo:" +
    "\n• Convertir 3 2/5." +
    "\n• 3 × 5 = 15." +
    "\n• 15 + 2 = 17." +
    "\n• Conservamos el denominador 5." +
    "\n• Entonces: 3 2/5 = 17/5." +
    "\n\nOtro ejemplo:" +
    "\n• 4 3/4" +
    "\n• 4 × 4 = 16." +
    "\n• 16 + 3 = 19." +
    "\n• Por lo tanto: 4 3/4 = 19/4." +
    "\n\nPodemos comprobar el resultado realizando el proceso contrario. Por ejemplo, 19 ÷ 4 = 4 y sobra 3, por lo tanto 19/4 = 4 3/4." +
    "\n\nRecuerda la regla: multiplica el entero por el denominador, suma el numerador y conserva el denominador.",

  quiz: [
    {
      id: "nm2-1",
      question: "¿Qué fracción impropia representa el número mixto 2 1/3?",
      options: [
        { id: "a", text: "7/3" },
        { id: "b", text: "6/3" },
        { id: "c", text: "3/7" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos 2 × 3 = 6 y sumamos 1: 6 + 1 = 7. Conservamos el denominador 3. Por lo tanto, 2 1/3 = 7/3.",
    },

    {
      id: "nm2-2",
      question: "¿Qué fracción impropia representa 3 2/5?",
      options: [
        { id: "a", text: "15/5" },
        { id: "b", text: "17/5" },
        { id: "c", text: "13/5" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos 3 × 5 = 15 y sumamos el numerador 2. Entonces 15 + 2 = 17. El resultado es 17/5.",
    },

    {
      id: "nm2-3",
      question: "¿Qué fracción impropia equivale a 4 3/4?",
      options: [
        { id: "a", text: "19/4" },
        { id: "b", text: "16/4" },
        { id: "c", text: "15/4" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos 4 × 4 = 16 y sumamos 3: 16 + 3 = 19. Conservamos el denominador 4, obteniendo 19/4.",
    },

    {
      id: "nm2-4",
      question: "¿Qué fracción impropia representa el número mixto 5 2/3?",
      options: [
        { id: "a", text: "17/3" },
        { id: "b", text: "15/3" },
        { id: "c", text: "13/3" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos 5 × 3 = 15 y sumamos 2: 15 + 2 = 17. Por lo tanto, 5 2/3 = 17/3.",
    },

    {
      id: "nm2-5",
      question: "¿Cuál es el procedimiento correcto para convertir un número mixto en una fracción impropia?",
      options: [
        {
          id: "a",
          text: "Sumar el entero y el denominador y conservar el numerador",
        },
        {
          id: "b",
          text: "Multiplicar el entero por el denominador, sumar el numerador y conservar el denominador",
        },
        {
          id: "c",
          text: "Multiplicar el numerador por el denominador y sumar el entero",
        },
      ],
      correctOptionId: "b",
      feedback:
        "La regla es: multiplicar la parte entera por el denominador, sumar el numerador y conservar el mismo denominador.",
    },
  ],
},
{
  id: "tecnicas-simplificar-fracciones",
  titulo: "Técnicas para simplificar fracciones",
  youtubeId: "_ijhXKBgnCA",

  texto:
    "Simplificar una fracción significa encontrar una fracción equivalente cuyos números sean más pequeños, sin cambiar su valor." +
    "\n\nPara simplificar una fracción debemos dividir el numerador y el denominador entre un mismo número diferente de cero." +
    "\n\nEjemplo:" +
    "\n• 6/8" +
    "\n• Dividimos numerador y denominador entre 2." +
    "\n• 6 ÷ 2 = 3" +
    "\n• 8 ÷ 2 = 4" +
    "\n• Por lo tanto: 6/8 = 3/4." +
    "\n\nExisten algunas técnicas que nos ayudan a identificar rápidamente si una fracción puede simplificarse:" +
    "\n\n• Divisibilidad por 2: si el numerador y el denominador son números pares, podemos dividir ambos entre 2." +
    "\nEjemplo: 8/12 = 4/6 = 2/3." +
    "\n\n• Divisibilidad por 3: si la suma de las cifras de ambos números es múltiplo de 3, podemos intentar dividir entre 3." +
    "\nEjemplo: 9/15 = 3/5." +
    "\n\n• Divisibilidad por 5: si el numerador y el denominador terminan en 0 o 5, podemos dividir ambos entre 5." +
    "\nEjemplo: 15/25 = 3/5." +
    "\n\n• Divisibilidad por 10: si ambos números terminan en 0, podemos dividirlos entre 10." +
    "\nEjemplo: 20/50 = 2/5." +
    "\n\nOtra técnica consiste en buscar el máximo común divisor (MCD). El MCD es el mayor número que divide exactamente tanto al numerador como al denominador." +
    "\n\nEjemplo:" +
    "\n• Simplificar 18/24." +
    "\n• El MCD de 18 y 24 es 6." +
    "\n• 18 ÷ 6 = 3." +
    "\n• 24 ÷ 6 = 4." +
    "\n• Entonces: 18/24 = 3/4." +
    "\n\nUna fracción está completamente simplificada cuando el numerador y el denominador no tienen divisores comunes mayores que 1." +
    "\n\nRecuerda: simplificar una fracción no cambia su valor, solamente permite expresarla utilizando números más pequeños.",

  quiz: [
    {
      id: "tsf-1",
      question: "¿Qué significa simplificar una fracción?",
      options: [
        {
          id: "a",
          text: "Encontrar una fracción equivalente con números más pequeños",
        },
        {
          id: "b",
          text: "Sumar el numerador y el denominador",
        },
        {
          id: "c",
          text: "Cambiar el valor de la fracción",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Simplificar consiste en obtener una fracción equivalente utilizando números más pequeños, pero conservando exactamente el mismo valor.",
    },

    {
      id: "tsf-2",
      question: "¿Cuál es la simplificación de 8/12?",
      options: [
        { id: "a", text: "4/6" },
        { id: "b", text: "2/3" },
        { id: "c", text: "6/10" },
      ],
      correctOptionId: "b",
      feedback:
        "Podemos dividir 8 y 12 entre su máximo común divisor, que es 4. Entonces: 8 ÷ 4 = 2 y 12 ÷ 4 = 3. El resultado es 2/3.",
    },

    {
      id: "tsf-3",
      question: "¿Cuál es la forma simplificada de 15/25?",
      options: [
        { id: "a", text: "5/10" },
        { id: "b", text: "3/5" },
        { id: "c", text: "10/20" },
      ],
      correctOptionId: "b",
      feedback:
        "15 y 25 son divisibles entre 5. Al dividir ambos entre 5 obtenemos 3/5.",
    },

    {
      id: "tsf-4",
      question: "¿Cuál es el máximo común divisor de 18 y 24?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "6" },
        { id: "c", text: "12" },
      ],
      correctOptionId: "b",
      feedback:
        "El mayor número que divide exactamente tanto a 18 como a 24 es 6. Por eso, el MCD de 18 y 24 es 6.",
    },

    {
      id: "tsf-5",
      question: "¿Cuándo podemos afirmar que una fracción está completamente simplificada?",
      options: [
        {
          id: "a",
          text: "Cuando el numerador es menor que el denominador",
        },
        {
          id: "b",
          text: "Cuando numerador y denominador son números impares",
        },
        {
          id: "c",
          text: "Cuando numerador y denominador no tienen divisores comunes mayores que 1",
        },
      ],
      correctOptionId: "c",
      feedback:
        "Una fracción está completamente simplificada cuando el único divisor común entre el numerador y el denominador es 1.",
    },
  ],
},
{
  id: "simplificacion-fracciones",
  titulo: "Simplificación de fracciones",
  youtubeId: "IeE6_h3kGf4",

  texto:
    "Simplificar una fracción consiste en expresarla de una forma más sencilla sin cambiar su valor." +
    "\n\nPara simplificar una fracción dividimos el numerador y el denominador entre un mismo número que sea divisor de ambos." +
    "\n\nEjemplo:" +
    "\n• Simplificar 12/18." +
    "\n• Tanto 12 como 18 son divisibles entre 2." +
    "\n• 12 ÷ 2 = 6." +
    "\n• 18 ÷ 2 = 9." +
    "\n• Obtenemos 6/9." +
    "\n• Podemos continuar simplificando entre 3." +
    "\n• 6 ÷ 3 = 2." +
    "\n• 9 ÷ 3 = 3." +
    "\n• Resultado final: 12/18 = 2/3." +
    "\n\nPodemos simplificar una fracción de dos maneras:" +
    "\n\n• Simplificación sucesiva: dividimos varias veces entre divisores comunes hasta obtener una fracción irreducible." +
    "\n\n• Simplificación directa: buscamos el máximo común divisor (MCD) del numerador y del denominador y dividimos ambos entre ese número." +
    "\n\nEjemplo utilizando el MCD:" +
    "\n• Simplificar 24/36." +
    "\n• El MCD de 24 y 36 es 12." +
    "\n• 24 ÷ 12 = 2." +
    "\n• 36 ÷ 12 = 3." +
    "\n• Entonces: 24/36 = 2/3." +
    "\n\nOtro ejemplo:" +
    "\n• Simplificar 15/35." +
    "\n• El MCD de 15 y 35 es 5." +
    "\n• 15 ÷ 5 = 3." +
    "\n• 35 ÷ 5 = 7." +
    "\n• Resultado: 15/35 = 3/7." +
    "\n\nUna fracción que ya no puede simplificarse se denomina fracción irreducible." +
    "\n\nPor ejemplo, 3/7 es irreducible porque 3 y 7 no tienen divisores comunes mayores que 1." +
    "\n\nRecuerda: siempre debemos dividir el numerador y el denominador entre el mismo número para conservar el valor de la fracción.",

  quiz: [
    {
      id: "sf29-1",
      question: "¿Cuál es la forma simplificada de 12/18?",
      options: [
        { id: "a", text: "2/3" },
        { id: "b", text: "6/18" },
        { id: "c", text: "3/2" },
      ],
      correctOptionId: "a",
      feedback:
        "El MCD de 12 y 18 es 6. Dividimos ambos entre 6: 12 ÷ 6 = 2 y 18 ÷ 6 = 3. Por lo tanto, 12/18 = 2/3.",
    },

    {
      id: "sf29-2",
      question: "¿Cuál es la forma simplificada de 20/30?",
      options: [
        { id: "a", text: "10/20" },
        { id: "b", text: "2/3" },
        { id: "c", text: "3/2" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCD de 20 y 30 es 10. Dividimos: 20 ÷ 10 = 2 y 30 ÷ 10 = 3. El resultado es 2/3.",
    },

    {
      id: "sf29-3",
      question: "¿Cuál es la forma simplificada de 18/24?",
      options: [
        { id: "a", text: "9/12" },
        { id: "b", text: "6/8" },
        { id: "c", text: "3/4" },
      ],
      correctOptionId: "c",
      feedback:
        "El MCD de 18 y 24 es 6. Al dividir ambos entre 6 obtenemos 3/4, que ya es una fracción irreducible.",
    },

    {
      id: "sf29-4",
      question: "¿Cuál de las siguientes fracciones ya está completamente simplificada?",
      options: [
        { id: "a", text: "8/12" },
        { id: "b", text: "5/7" },
        { id: "c", text: "10/15" },
      ],
      correctOptionId: "b",
      feedback:
        "5 y 7 no tienen divisores comunes mayores que 1. Por eso, 5/7 ya es una fracción irreducible.",
    },

    {
      id: "sf29-5",
      question: "Para simplificar 30/45 directamente, ¿entre qué número podemos dividir el numerador y el denominador?",
      options: [
        { id: "a", text: "15" },
        { id: "b", text: "10" },
        { id: "c", text: "30" },
      ],
      correctOptionId: "a",
      feedback:
        "El MCD de 30 y 45 es 15. Entonces: 30 ÷ 15 = 2 y 45 ÷ 15 = 3. Por lo tanto, 30/45 = 2/3.",
    },
  ],
},
{
  id: "simplificacion-fracciones-parte-2",
  titulo: "Simplificación de fracciones - Parte 2",
  youtubeId: "On13RW2DT2o",

  texto:
    "En esta segunda parte continuaremos simplificando fracciones utilizando números mayores y diferentes estrategias." +
    "\n\nRecordemos que simplificar una fracción significa encontrar una fracción equivalente con números más pequeños, sin modificar su valor." +
    "\n\nPara hacerlo debemos dividir el numerador y el denominador entre un mismo divisor común." +
    "\n\nEjemplo:" +
    "\n• Simplificar 36/48." +
    "\n• Podemos dividir inicialmente entre 2." +
    "\n• 36 ÷ 2 = 18 y 48 ÷ 2 = 24." +
    "\n• Obtenemos 18/24." +
    "\n• Volvemos a dividir entre 2: 18/24 = 9/12." +
    "\n• Finalmente dividimos entre 3: 9/12 = 3/4." +
    "\n• Resultado: 36/48 = 3/4." +
    "\n\nTambién podemos realizar la simplificación directamente utilizando el máximo común divisor (MCD)." +
    "\n\nEjemplo:" +
    "\n• El MCD de 36 y 48 es 12." +
    "\n• 36 ÷ 12 = 3." +
    "\n• 48 ÷ 12 = 4." +
    "\n• Entonces: 36/48 = 3/4." +
    "\n\nOtro ejemplo:" +
    "\n• Simplificar 45/60." +
    "\n• El MCD de 45 y 60 es 15." +
    "\n• 45 ÷ 15 = 3." +
    "\n• 60 ÷ 15 = 4." +
    "\n• Resultado: 45/60 = 3/4." +
    "\n\nTambién podemos simplificar fracciones impropias." +
    "\n\nEjemplo:" +
    "\n• 42/30." +
    "\n• El MCD de 42 y 30 es 6." +
    "\n• 42 ÷ 6 = 7." +
    "\n• 30 ÷ 6 = 5." +
    "\n• Por lo tanto: 42/30 = 7/5." +
    "\n\nSi queremos, podemos convertir el resultado impropio en un número mixto:" +
    "\n• 7/5 = 1 2/5." +
    "\n\nEs importante revisar siempre el resultado final para comprobar si todavía existe algún número que pueda dividir exactamente al numerador y al denominador." +
    "\n\nRecuerda: una fracción está completamente simplificada cuando el único divisor común entre su numerador y denominador es 1.",

  quiz: [
    {
      id: "sf30-1",
      question: "¿Cuál es la forma simplificada de 36/48?",
      options: [
        { id: "a", text: "3/4" },
        { id: "b", text: "6/8" },
        { id: "c", text: "18/24" },
      ],
      correctOptionId: "a",
      feedback:
        "El MCD de 36 y 48 es 12. Dividimos ambos entre 12: 36 ÷ 12 = 3 y 48 ÷ 12 = 4. La forma irreducible es 3/4.",
    },

    {
      id: "sf30-2",
      question: "¿Cuál es la forma simplificada de 45/60?",
      options: [
        { id: "a", text: "9/12" },
        { id: "b", text: "3/4" },
        { id: "c", text: "15/20" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCD de 45 y 60 es 15. Entonces: 45 ÷ 15 = 3 y 60 ÷ 15 = 4. El resultado es 3/4.",
    },

    {
      id: "sf30-3",
      question: "¿Cuál es la forma simplificada de 42/30?",
      options: [
        { id: "a", text: "21/15" },
        { id: "b", text: "7/5" },
        { id: "c", text: "6/5" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCD de 42 y 30 es 6. Dividimos ambos números entre 6 y obtenemos 7/5.",
    },

    {
      id: "sf30-4",
      question: "¿Cuál es la forma simplificada de 72/96?",
      options: [
        { id: "a", text: "6/8" },
        { id: "b", text: "3/4" },
        { id: "c", text: "9/12" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCD de 72 y 96 es 24. Dividimos: 72 ÷ 24 = 3 y 96 ÷ 24 = 4. El resultado final es 3/4.",
    },

    {
      id: "sf30-5",
      question: "Después de simplificar una fracción, ¿qué debemos comprobar?",
      options: [
        {
          id: "a",
          text: "Que el numerador sea siempre mayor que el denominador",
        },
        {
          id: "b",
          text: "Que el denominador sea un número par",
        },
        {
          id: "c",
          text: "Que numerador y denominador no tengan divisores comunes mayores que 1",
        },
      ],
      correctOptionId: "c",
      feedback:
        "Una fracción está completamente simplificada cuando su numerador y denominador no tienen divisores comunes mayores que 1.",
    },
  ],
},
{
  id: "amplificacion-fracciones",
  titulo: "Amplificación de fracciones",
  youtubeId: "wV5eAOBzD24",

  texto:
    "Amplificar una fracción consiste en multiplicar su numerador y su denominador por el mismo número diferente de cero." +
    "\n\nAl amplificar una fracción obtenemos una fracción equivalente, es decir, una fracción que representa exactamente la misma cantidad." +
    "\n\nEjemplo:" +
    "\n• Amplificar 2/3 por 2." +
    "\n• Multiplicamos el numerador: 2 × 2 = 4." +
    "\n• Multiplicamos el denominador: 3 × 2 = 6." +
    "\n• Por lo tanto: 2/3 = 4/6." +
    "\n\nAunque 2/3 y 4/6 tienen números diferentes, ambas fracciones representan la misma cantidad." +
    "\n\nOtro ejemplo:" +
    "\n• Amplificar 3/5 por 3." +
    "\n• 3 × 3 = 9." +
    "\n• 5 × 3 = 15." +
    "\n• Entonces: 3/5 = 9/15." +
    "\n\nUna misma fracción puede amplificarse utilizando diferentes números." +
    "\n\nEjemplo con 1/2:" +
    "\n• Multiplicando por 2: 1/2 = 2/4." +
    "\n• Multiplicando por 3: 1/2 = 3/6." +
    "\n• Multiplicando por 4: 1/2 = 4/8." +
    "\n\nTodas estas fracciones son equivalentes porque representan la misma cantidad." +
    "\n\nLa amplificación es especialmente útil cuando necesitamos obtener fracciones con el mismo denominador para compararlas, sumarlas o restarlas." +
    "\n\nEjemplo:" +
    "\n• Tenemos 1/2 y 1/4." +
    "\n• Podemos amplificar 1/2 por 2." +
    "\n• 1/2 = 2/4." +
    "\n• Ahora podemos comparar fácilmente 2/4 y 1/4." +
    "\n\nRecuerda: para amplificar correctamente una fracción debemos multiplicar tanto el numerador como el denominador por el mismo número.",

  quiz: [
    {
      id: "af-1",
      question: "¿Qué significa amplificar una fracción?",
      options: [
        {
          id: "a",
          text: "Multiplicar el numerador y el denominador por el mismo número",
        },
        {
          id: "b",
          text: "Sumar el mismo número al numerador y al denominador",
        },
        {
          id: "c",
          text: "Dividir solamente el denominador",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Amplificar consiste en multiplicar el numerador y el denominador por el mismo número para obtener una fracción equivalente.",
    },

    {
      id: "af-2",
      question: "Si amplificamos 2/3 por 2, ¿qué fracción obtenemos?",
      options: [
        { id: "a", text: "4/6" },
        { id: "b", text: "4/3" },
        { id: "c", text: "2/6" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos ambos términos por 2: (2 × 2)/(3 × 2) = 4/6. Por lo tanto, 2/3 y 4/6 son equivalentes.",
    },

    {
      id: "af-3",
      question: "¿Cuál es el resultado de amplificar 3/5 por 4?",
      options: [
        { id: "a", text: "7/9" },
        { id: "b", text: "12/20" },
        { id: "c", text: "12/5" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos numerador y denominador por 4: 3 × 4 = 12 y 5 × 4 = 20. El resultado es 12/20.",
    },

    {
      id: "af-4",
      question: "¿Cuál de las siguientes fracciones es equivalente a 1/2?",
      options: [
        { id: "a", text: "2/3" },
        { id: "b", text: "3/6" },
        { id: "c", text: "2/5" },
      ],
      correctOptionId: "b",
      feedback:
        "Si amplificamos 1/2 por 3 obtenemos 3/6. Ambas fracciones representan exactamente la misma cantidad.",
    },

    {
      id: "af-5",
      question: "¿Por qué la amplificación no cambia el valor de una fracción?",
      options: [
        {
          id: "a",
          text: "Porque solamente cambia el denominador",
        },
        {
          id: "b",
          text: "Porque multiplicamos numerador y denominador por el mismo número",
        },
        {
          id: "c",
          text: "Porque siempre obtenemos números más pequeños",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Al multiplicar el numerador y el denominador por el mismo número mantenemos la misma relación entre ambos, por lo que el valor de la fracción no cambia.",
    },
  ],
},
{
  id: "orden-comparacion-fracciones",
  titulo: "Orden o comparación de fracciones",
  youtubeId: "bzsp2igL2dE",

  texto:
    "Comparar fracciones significa determinar cuál de ellas representa una cantidad mayor, menor o si ambas representan la misma cantidad." +
    "\n\nPara comparar fracciones utilizamos los símbolos:" +
    "\n• > significa mayor que." +
    "\n• < significa menor que." +
    "\n• = significa igual a." +
    "\n\nExisten diferentes formas de comparar fracciones." +
    "\n\n1. Fracciones con el mismo denominador:" +
    "\nCuando dos fracciones tienen el mismo denominador, es mayor la que tenga el numerador más grande." +
    "\n\nEjemplo:" +
    "\n• 5/8 > 3/8" +
    "\n\nEsto ocurre porque estamos comparando partes del mismo tamaño y 5 partes son más que 3." +
    "\n\n2. Fracciones con el mismo numerador:" +
    "\nCuando dos fracciones tienen el mismo numerador, es mayor la que tenga el denominador más pequeño." +
    "\n\nEjemplo:" +
    "\n• 3/4 > 3/7" +
    "\n\nEsto sucede porque al dividir una unidad en menos partes, cada parte es más grande." +
    "\n\n3. Fracciones con diferente numerador y denominador:" +
    "\nPodemos buscar fracciones equivalentes con el mismo denominador o utilizar la multiplicación cruzada." +
    "\n\nEjemplo:" +
    "\n• Comparar 2/3 y 3/5." +
    "\n• Multiplicamos en cruz: 2 × 5 = 10." +
    "\n• Luego: 3 × 3 = 9." +
    "\n• Como 10 > 9, entonces 2/3 > 3/5." +
    "\n\nOtro ejemplo:" +
    "\n• Comparar 3/4 y 5/6." +
    "\n• 3 × 6 = 18." +
    "\n• 5 × 4 = 20." +
    "\n• Como 18 < 20, entonces 3/4 < 5/6." +
    "\n\nTambién podemos ordenar varias fracciones de menor a mayor o de mayor a menor buscando un denominador común." +
    "\n\nRecuerda: no podemos determinar cuál fracción es mayor observando únicamente sus numeradores o denominadores cuando ambos son diferentes.",

  quiz: [
    {
      id: "ocf-1",
      question: "¿Cuál fracción es mayor: 5/8 o 3/8?",
      options: [
        { id: "a", text: "5/8" },
        { id: "b", text: "3/8" },
        { id: "c", text: "Son iguales" },
      ],
      correctOptionId: "a",
      feedback:
        "Las fracciones tienen el mismo denominador. Por eso comparamos los numeradores. Como 5 > 3, entonces 5/8 > 3/8.",
    },

    {
      id: "ocf-2",
      question: "¿Cuál fracción es mayor: 2/3 o 2/5?",
      options: [
        { id: "a", text: "2/5" },
        { id: "b", text: "2/3" },
        { id: "c", text: "Son iguales" },
      ],
      correctOptionId: "b",
      feedback:
        "Las fracciones tienen el mismo numerador. En este caso, la fracción con menor denominador es mayor. Por eso 2/3 > 2/5.",
    },

    {
      id: "ocf-3",
      question: "¿Qué relación existe entre 2/3 y 3/5?",
      options: [
        { id: "a", text: "2/3 > 3/5" },
        { id: "b", text: "2/3 < 3/5" },
        { id: "c", text: "2/3 = 3/5" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos en cruz: 2 × 5 = 10 y 3 × 3 = 9. Como 10 > 9, entonces 2/3 > 3/5.",
    },

    {
      id: "ocf-4",
      question: "¿Cuál es el orden correcto de menor a mayor?",
      options: [
        { id: "a", text: "1/4, 2/4, 3/4" },
        { id: "b", text: "3/4, 2/4, 1/4" },
        { id: "c", text: "2/4, 1/4, 3/4" },
      ],
      correctOptionId: "a",
      feedback:
        "Como todas tienen el mismo denominador, comparamos sus numeradores. De menor a mayor: 1/4 < 2/4 < 3/4.",
    },

    {
      id: "ocf-5",
      question: "¿Qué relación existe entre 3/4 y 6/8?",
      options: [
        { id: "a", text: "3/4 > 6/8" },
        { id: "b", text: "3/4 < 6/8" },
        { id: "c", text: "3/4 = 6/8" },
      ],
      correctOptionId: "c",
      feedback:
        "Las dos fracciones son equivalentes. Si simplificamos 6/8 dividiendo entre 2 obtenemos 3/4. Por lo tanto, 3/4 = 6/8.",
    },
  ],
},
{
  id: "minimo-comun-multiplo",
  titulo: "Mínimo común múltiplo",
  youtubeId: "u941GlBsvEQ",

  texto:
    "El mínimo común múltiplo, también conocido como MCM, es el menor número positivo que es múltiplo común de dos o más números." +
    "\n\nPara comprender el MCM debemos recordar qué es un múltiplo." +
    "\n\nLos múltiplos de un número se obtienen al multiplicarlo por 1, 2, 3, 4, 5 y así sucesivamente." +
    "\n\nEjemplo:" +
    "\n• Múltiplos de 3: 3, 6, 9, 12, 15, 18..." +
    "\n• Múltiplos de 4: 4, 8, 12, 16, 20, 24..." +
    "\n\nPodemos observar que 12 aparece en ambas listas." +
    "\n• Por lo tanto, MCM(3, 4) = 12." +
    "\n\nExisten diferentes métodos para encontrar el MCM." +
    "\n\nMétodo 1: lista de múltiplos." +
    "\n• Escribimos varios múltiplos de cada número." +
    "\n• Identificamos cuáles aparecen en ambas listas." +
    "\n• Elegimos el menor múltiplo común." +
    "\n\nEjemplo:" +
    "\n• Encontrar el MCM de 4 y 6." +
    "\n• Múltiplos de 4: 4, 8, 12, 16, 20, 24..." +
    "\n• Múltiplos de 6: 6, 12, 18, 24, 30..." +
    "\n• El menor múltiplo que aparece en ambas listas es 12." +
    "\n• Entonces: MCM(4, 6) = 12." +
    "\n\nMétodo 2: descomposición en factores primos." +
    "\n\nEjemplo con 8 y 12:" +
    "\n• 8 = 2 × 2 × 2 = 2³." +
    "\n• 12 = 2 × 2 × 3 = 2² × 3." +
    "\n• Tomamos los factores primos con su mayor exponente." +
    "\n• MCM = 2³ × 3 = 8 × 3 = 24." +
    "\n\nPor lo tanto: MCM(8, 12) = 24." +
    "\n\nEl MCM es especialmente útil para encontrar un denominador común cuando necesitamos sumar o restar fracciones con denominadores diferentes." +
    "\n\nEjemplo:" +
    "\n• Para trabajar con 1/3 y 1/4 podemos calcular el MCM de 3 y 4." +
    "\n• MCM(3, 4) = 12." +
    "\n• Por eso podemos transformar ambas fracciones para que tengan denominador 12." +
    "\n\nRecuerda: el MCM es el menor múltiplo positivo que tienen en común dos o más números.",

  quiz: [
    {
      id: "mcm-1",
      question: "¿Qué significa MCM?",
      options: [
        {
          id: "a",
          text: "Máximo común múltiplo",
        },
        {
          id: "b",
          text: "Mínimo común múltiplo",
        },
        {
          id: "c",
          text: "Mínimo común mayor",
        },
      ],
      correctOptionId: "b",
      feedback:
        "MCM significa mínimo común múltiplo: el menor número positivo que es múltiplo común de dos o más números.",
    },

    {
      id: "mcm-2",
      question: "¿Cuál es el MCM de 3 y 4?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "12" },
        { id: "c", text: "24" },
      ],
      correctOptionId: "b",
      feedback:
        "Los múltiplos de 3 incluyen 3, 6, 9, 12... y los de 4 incluyen 4, 8, 12... El menor múltiplo común es 12.",
    },

    {
      id: "mcm-3",
      question: "¿Cuál es el MCM de 4 y 6?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "24" },
        { id: "c", text: "12" },
      ],
      correctOptionId: "c",
      feedback:
        "12 es el menor número que aparece tanto en los múltiplos de 4 como en los múltiplos de 6. Por eso, MCM(4, 6) = 12.",
    },

    {
      id: "mcm-4",
      question: "¿Cuál es el MCM de 8 y 12?",
      options: [
        { id: "a", text: "24" },
        { id: "b", text: "48" },
        { id: "c", text: "20" },
      ],
      correctOptionId: "a",
      feedback:
        "8 = 2³ y 12 = 2² × 3. Tomamos 2³ y 3: 8 × 3 = 24. Por lo tanto, MCM(8, 12) = 24.",
    },

    {
      id: "mcm-5",
      question: "¿Para qué nos será útil el MCM al trabajar con fracciones?",
      options: [
        {
          id: "a",
          text: "Para encontrar un denominador común",
        },
        {
          id: "b",
          text: "Para convertir todas las fracciones en números enteros",
        },
        {
          id: "c",
          text: "Para eliminar el numerador de una fracción",
        },
      ],
      correctOptionId: "a",
      feedback:
        "El MCM de los denominadores nos permite encontrar un denominador común, algo muy útil para sumar o restar fracciones con denominadores diferentes.",
    },
  ],
},
{
  id: "suma-fracciones-mcm",
  titulo: "Suma de fracciones con el MCM",
  youtubeId: "sv2Psh2J9O0",

  texto:
    "Cuando queremos sumar fracciones con denominadores diferentes, podemos utilizar el mínimo común múltiplo (MCM) para encontrar un denominador común." +
    "\n\nEl procedimiento consiste en encontrar el MCM de los denominadores y transformar las fracciones en fracciones equivalentes que tengan ese mismo denominador." +
    "\n\nPasos para sumar fracciones utilizando el MCM:" +
    "\n• Identificamos los denominadores." +
    "\n• Calculamos el MCM de los denominadores." +
    "\n• Convertimos cada fracción en una fracción equivalente con el denominador común." +
    "\n• Sumamos los numeradores." +
    "\n• Conservamos el denominador común." +
    "\n• Simplificamos el resultado cuando sea posible." +
    "\n\nEjemplo:" +
    "\n• 1/3 + 1/4" +
    "\n• Calculamos MCM(3, 4) = 12." +
    "\n• Convertimos 1/3 a doceavos: 1/3 = 4/12." +
    "\n• Convertimos 1/4 a doceavos: 1/4 = 3/12." +
    "\n• Sumamos: 4/12 + 3/12 = 7/12." +
    "\n\nOtro ejemplo:" +
    "\n• 2/3 + 1/6" +
    "\n• MCM(3, 6) = 6." +
    "\n• Convertimos 2/3 = 4/6." +
    "\n• Conservamos 1/6." +
    "\n• Sumamos: 4/6 + 1/6 = 5/6." +
    "\n\nVeamos un ejemplo donde debemos simplificar el resultado:" +
    "\n• 1/4 + 1/6" +
    "\n• MCM(4, 6) = 12." +
    "\n• 1/4 = 3/12." +
    "\n• 1/6 = 2/12." +
    "\n• 3/12 + 2/12 = 5/12." +
    "\n\nTambién podemos sumar más de dos fracciones:" +
    "\n• 1/2 + 1/3 + 1/6" +
    "\n• MCM(2, 3, 6) = 6." +
    "\n• 1/2 = 3/6." +
    "\n• 1/3 = 2/6." +
    "\n• Conservamos 1/6." +
    "\n• 3/6 + 2/6 + 1/6 = 6/6 = 1." +
    "\n\nRecuerda: el MCM nos permite convertir fracciones con denominadores diferentes en fracciones equivalentes con un mismo denominador. Después de esto, solamente debemos sumar los numeradores.",

  quiz: [
    {
      id: "sfmcm-1",
      question: "¿Cuál es el MCM de los denominadores en 1/3 + 1/4?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "12" },
        { id: "c", text: "24" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCM de 3 y 4 es 12. Este será el denominador común que utilizaremos para realizar la suma.",
    },

    {
      id: "sfmcm-2",
      question: "¿Cuál es el resultado de 1/3 + 1/4?",
      options: [
        { id: "a", text: "2/7" },
        { id: "b", text: "7/12" },
        { id: "c", text: "5/12" },
      ],
      correctOptionId: "b",
      feedback:
        "MCM(3, 4) = 12. Entonces 1/3 = 4/12 y 1/4 = 3/12. Sumamos: 4/12 + 3/12 = 7/12.",
    },

    {
      id: "sfmcm-3",
      question: "¿Cuál es el resultado de 2/3 + 1/6?",
      options: [
        { id: "a", text: "3/9" },
        { id: "b", text: "5/6" },
        { id: "c", text: "3/6" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCM de 3 y 6 es 6. Convertimos 2/3 en 4/6 y sumamos: 4/6 + 1/6 = 5/6.",
    },

    {
      id: "sfmcm-4",
      question: "¿Cuál es el resultado de 1/4 + 1/6?",
      options: [
        { id: "a", text: "2/10" },
        { id: "b", text: "5/12" },
        { id: "c", text: "2/12" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCM de 4 y 6 es 12. Convertimos: 1/4 = 3/12 y 1/6 = 2/12. Entonces 3/12 + 2/12 = 5/12.",
    },

    {
      id: "sfmcm-5",
      question: "¿Cuál es el resultado de 1/2 + 1/3 + 1/6?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "3/11" },
        { id: "c", text: "5/6" },
      ],
      correctOptionId: "a",
      feedback:
        "El MCM de 2, 3 y 6 es 6. Tenemos 3/6 + 2/6 + 1/6 = 6/6, que equivale a 1.",
    },
  ],
},
{
  id: "resta-fracciones-mcm",
  titulo: "Resta de fracciones con el MCM",
  youtubeId: "5l4dUMOWCMw",

  texto:
    "Cuando queremos restar fracciones con denominadores diferentes, podemos utilizar el mínimo común múltiplo (MCM) para encontrar un denominador común." +
    "\n\nEl MCM nos permite transformar las fracciones en fracciones equivalentes con el mismo denominador." +
    "\n\nPasos para restar fracciones utilizando el MCM:" +
    "\n• Identificamos los denominadores." +
    "\n• Calculamos el MCM de los denominadores." +
    "\n• Convertimos las fracciones en fracciones equivalentes con ese denominador común." +
    "\n• Restamos los numeradores." +
    "\n• Conservamos el denominador común." +
    "\n• Simplificamos el resultado cuando sea posible." +
    "\n\nEjemplo:" +
    "\n• 3/4 - 1/6" +
    "\n• Calculamos MCM(4, 6) = 12." +
    "\n• Convertimos 3/4 = 9/12." +
    "\n• Convertimos 1/6 = 2/12." +
    "\n• Restamos: 9/12 - 2/12 = 7/12." +
    "\n\nOtro ejemplo:" +
    "\n• 5/6 - 1/4" +
    "\n• MCM(6, 4) = 12." +
    "\n• Convertimos 5/6 = 10/12." +
    "\n• Convertimos 1/4 = 3/12." +
    "\n• Restamos: 10/12 - 3/12 = 7/12." +
    "\n\nVeamos un ejemplo donde el resultado debe simplificarse:" +
    "\n• 5/6 - 1/3" +
    "\n• MCM(6, 3) = 6." +
    "\n• Conservamos 5/6." +
    "\n• Convertimos 1/3 = 2/6." +
    "\n• Restamos: 5/6 - 2/6 = 3/6." +
    "\n• Simplificamos: 3/6 = 1/2." +
    "\n\nTambién podemos restar fracciones cuyo resultado sea mayor que una unidad." +
    "\n\nEjemplo:" +
    "\n• 7/4 - 1/2" +
    "\n• MCM(4, 2) = 4." +
    "\n• Convertimos 1/2 = 2/4." +
    "\n• Restamos: 7/4 - 2/4 = 5/4." +
    "\n• Como número mixto: 5/4 = 1 1/4." +
    "\n\nEs importante recordar que no debemos restar directamente los denominadores." +
    "\n\nPor ejemplo, 3/4 - 1/6 no es igual a 2/-2. Primero debemos obtener un denominador común." +
    "\n\nRecuerda: utiliza el MCM para encontrar el denominador común, convierte las fracciones, resta los numeradores y simplifica el resultado.",

  quiz: [
    {
      id: "rfmcm-1",
      question: "¿Cuál es el MCM de los denominadores en 3/4 - 1/6?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "12" },
        { id: "c", text: "24" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCM de 4 y 6 es 12. Este será el denominador común para realizar la resta.",
    },

    {
      id: "rfmcm-2",
      question: "¿Cuál es el resultado de 3/4 - 1/6?",
      options: [
        { id: "a", text: "7/12" },
        { id: "b", text: "2/10" },
        { id: "c", text: "8/12" },
      ],
      correctOptionId: "a",
      feedback:
        "MCM(4, 6) = 12. Convertimos 3/4 en 9/12 y 1/6 en 2/12. Entonces: 9/12 - 2/12 = 7/12.",
    },

    {
      id: "rfmcm-3",
      question: "¿Cuál es el resultado de 5/6 - 1/4?",
      options: [
        { id: "a", text: "4/2" },
        { id: "b", text: "7/12" },
        { id: "c", text: "4/10" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCM de 6 y 4 es 12. Convertimos 5/6 = 10/12 y 1/4 = 3/12. Luego: 10/12 - 3/12 = 7/12.",
    },

    {
      id: "rfmcm-4",
      question: "¿Cuál es el resultado simplificado de 5/6 - 1/3?",
      options: [
        { id: "a", text: "4/3" },
        { id: "b", text: "1/2" },
        { id: "c", text: "2/3" },
      ],
      correctOptionId: "b",
      feedback:
        "El MCM de 6 y 3 es 6. Convertimos 1/3 en 2/6. Luego: 5/6 - 2/6 = 3/6. Simplificando obtenemos 1/2.",
    },

    {
      id: "rfmcm-5",
      question: "¿Cuál es el resultado de 7/4 - 1/2?",
      options: [
        { id: "a", text: "5/4" },
        { id: "b", text: "6/2" },
        { id: "c", text: "3/4" },
      ],
      correctOptionId: "a",
      feedback:
        "El MCM de 4 y 2 es 4. Convertimos 1/2 en 2/4. Luego: 7/4 - 2/4 = 5/4, que también puede expresarse como 1 1/4.",
    },
  ],
},
{
  id: "radicacion-fracciones",
  titulo: "Radicación de fracciones",
  youtubeId: "APzTZIeNA6o",

  texto:
    "La radicación de fracciones es una operación que permite encontrar un número que, al elevarse a determinada potencia, produce la fracción original." +
    "\n\nLa radicación es la operación inversa de la potenciación." +
    "\n\nPor ejemplo:" +
    "\n• √(4/9) = 2/3" +
    "\n• Esto se debe a que (2/3)² = 4/9." +
    "\n\nPara calcular la raíz cuadrada de una fracción, podemos calcular por separado la raíz cuadrada del numerador y la raíz cuadrada del denominador." +
    "\n\nRegla general:" +
    "\n• √(a/b) = √a / √b" +
    "\n\nEjemplo:" +
    "\n• √(9/16)" +
    "\n• Calculamos √9 = 3." +
    "\n• Calculamos √16 = 4." +
    "\n• Por lo tanto: √(9/16) = 3/4." +
    "\n\nOtro ejemplo:" +
    "\n• √(25/36)" +
    "\n• √25 = 5." +
    "\n• √36 = 6." +
    "\n• Entonces: √(25/36) = 5/6." +
    "\n\nPara resolver fácilmente estas operaciones es importante reconocer algunos cuadrados perfectos:" +
    "\n• 1² = 1" +
    "\n• 2² = 4" +
    "\n• 3² = 9" +
    "\n• 4² = 16" +
    "\n• 5² = 25" +
    "\n• 6² = 36" +
    "\n• 7² = 49" +
    "\n• 8² = 64" +
    "\n• 9² = 81" +
    "\n• 10² = 100" +
    "\n\nTambién podemos comprobar una raíz utilizando la potenciación." +
    "\n\nEjemplo:" +
    "\n• √(49/64) = 7/8." +
    "\n• Comprobamos: (7/8)² = 49/64." +
    "\n\nNo todas las fracciones tienen una raíz cuadrada exacta. Por ejemplo, √(2/5) no puede expresarse como una fracción de números enteros mediante raíces exactas." +
    "\n\nRecuerda: cuando el numerador y el denominador son cuadrados perfectos, podemos calcular sus raíces por separado para obtener la raíz de la fracción.",

  quiz: [
    {
      id: "rdf-1",
      question: "¿Cuál es el resultado de √(4/9)?",
      options: [
        { id: "a", text: "2/3" },
        { id: "b", text: "4/3" },
        { id: "c", text: "2/9" },
      ],
      correctOptionId: "a",
      feedback:
        "Calculamos las raíces por separado: √4 = 2 y √9 = 3. Por lo tanto, √(4/9) = 2/3.",
    },

    {
      id: "rdf-2",
      question: "¿Cuál es el resultado de √(9/16)?",
      options: [
        { id: "a", text: "9/4" },
        { id: "b", text: "3/4" },
        { id: "c", text: "3/8" },
      ],
      correctOptionId: "b",
      feedback:
        "La raíz cuadrada de 9 es 3 y la raíz cuadrada de 16 es 4. Por lo tanto, √(9/16) = 3/4.",
    },

    {
      id: "rdf-3",
      question: "¿Cuál es el resultado de √(25/36)?",
      options: [
        { id: "a", text: "5/6" },
        { id: "b", text: "25/6" },
        { id: "c", text: "5/18" },
      ],
      correctOptionId: "a",
      feedback:
        "Calculamos √25 = 5 y √36 = 6. Entonces, √(25/36) = 5/6.",
    },

    {
      id: "rdf-4",
      question: "¿Cuál es el resultado de √(49/64)?",
      options: [
        { id: "a", text: "7/8" },
        { id: "b", text: "49/8" },
        { id: "c", text: "7/32" },
      ],
      correctOptionId: "a",
      feedback:
        "Como √49 = 7 y √64 = 8, obtenemos √(49/64) = 7/8.",
    },

    {
      id: "rdf-5",
      question: "¿Qué operación podemos utilizar para comprobar el resultado de una raíz cuadrada?",
      options: [
        {
          id: "a",
          text: "La suma",
        },
        {
          id: "b",
          text: "La potenciación",
        },
        {
          id: "c",
          text: "La resta",
        },
      ],
      correctOptionId: "b",
      feedback:
        "La radicación y la potenciación son operaciones inversas. Por ejemplo, si √(9/16) = 3/4, podemos comprobarlo calculando (3/4)² = 9/16.",
    },
  ],
},
{
  id: "radicacion-fracciones-parte-2",
  titulo: "Radicación de fracciones - Parte 2",
  youtubeId: "UAM3IIOYD_s",

  texto:
    "En esta segunda parte aprenderemos a calcular diferentes tipos de raíces de números fraccionarios." +
    "\n\nEn una radicación encontramos varios elementos:" +
    "\n• Índice: indica qué tipo de raíz debemos calcular." +
    "\n• Radical: es el símbolo utilizado para representar la raíz." +
    "\n• Radicando: es el número o fracción al que se le calcula la raíz." +
    "\n• Raíz: es el resultado de la operación." +
    "\n\nCuando el índice es 2 tenemos una raíz cuadrada. Normalmente, el número 2 no se escribe." +
    "\n\nEjemplo:" +
    "\n• √(16/25) = 4/5" +
    "\n• Porque 4² = 16 y 5² = 25." +
    "\n\nCuando el índice es 3 tenemos una raíz cúbica." +
    "\n\nPara calcular la raíz cúbica de una fracción, calculamos la raíz cúbica del numerador y del denominador." +
    "\n\nRegla general:" +
    "\n• ∛(a/b) = ∛a / ∛b" +
    "\n\nEjemplo:" +
    "\n• ∛(8/27)" +
    "\n• ∛8 = 2." +
    "\n• ∛27 = 3." +
    "\n• Por lo tanto: ∛(8/27) = 2/3." +
    "\n\nOtro ejemplo:" +
    "\n• ∛(64/125)" +
    "\n• ∛64 = 4." +
    "\n• ∛125 = 5." +
    "\n• Entonces: ∛(64/125) = 4/5." +
    "\n\nEs útil recordar algunos cubos perfectos:" +
    "\n• 1³ = 1" +
    "\n• 2³ = 8" +
    "\n• 3³ = 27" +
    "\n• 4³ = 64" +
    "\n• 5³ = 125" +
    "\n• 6³ = 216" +
    "\n\nPodemos comprobar una raíz cúbica utilizando la potenciación." +
    "\n\nEjemplo:" +
    "\n• ∛(27/64) = 3/4." +
    "\n• Comprobamos: (3/4)³ = 27/64." +
    "\n\nAntes de calcular una raíz también puede ser útil simplificar la fracción." +
    "\n\nEjemplo:" +
    "\n• √(36/64)" +
    "\n• Simplificamos 36/64 = 9/16." +
    "\n• Luego: √(9/16) = 3/4." +
    "\n\nRecuerda: el índice nos indica qué raíz debemos calcular y podemos aplicar la raíz tanto al numerador como al denominador.",

  quiz: [
    {
      id: "rdf2-1",
      question: "¿Qué indica el índice de una raíz?",
      options: [
        {
          id: "a",
          text: "El tipo de raíz que debemos calcular",
        },
        {
          id: "b",
          text: "El numerador de la fracción",
        },
        {
          id: "c",
          text: "El resultado de la operación",
        },
      ],
      correctOptionId: "a",
      feedback:
        "El índice indica qué tipo de raíz debemos calcular. Por ejemplo, índice 2 corresponde a raíz cuadrada e índice 3 a raíz cúbica.",
    },

    {
      id: "rdf2-2",
      question: "¿Cuál es el resultado de ∛(8/27)?",
      options: [
        { id: "a", text: "8/3" },
        { id: "b", text: "2/3" },
        { id: "c", text: "4/9" },
      ],
      correctOptionId: "b",
      feedback:
        "Calculamos las raíces cúbicas por separado: ∛8 = 2 y ∛27 = 3. Por lo tanto, ∛(8/27) = 2/3.",
    },

    {
      id: "rdf2-3",
      question: "¿Cuál es el resultado de ∛(64/125)?",
      options: [
        { id: "a", text: "4/5" },
        { id: "b", text: "8/25" },
        { id: "c", text: "16/25" },
      ],
      correctOptionId: "a",
      feedback:
        "La raíz cúbica de 64 es 4 y la raíz cúbica de 125 es 5. Entonces ∛(64/125) = 4/5.",
    },

    {
      id: "rdf2-4",
      question: "¿Cuál es el resultado de √(36/64) simplificado?",
      options: [
        { id: "a", text: "6/8" },
        { id: "b", text: "3/4" },
        { id: "c", text: "9/16" },
      ],
      correctOptionId: "b",
      feedback:
        "Podemos calcular √36/√64 = 6/8 y simplificar a 3/4. También podemos simplificar primero 36/64 a 9/16 y obtener √(9/16) = 3/4.",
    },

    {
      id: "rdf2-5",
      question: "Si ∛(27/64) = 3/4, ¿cómo podemos comprobar el resultado?",
      options: [
        {
          id: "a",
          text: "Calculando (3/4)³",
        },
        {
          id: "b",
          text: "Calculando (3/4)²",
        },
        {
          id: "c",
          text: "Sumando 3/4 + 3/4",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La raíz cúbica es la operación inversa de elevar al cubo. Al calcular (3/4)³ obtenemos 27/64.",
    },
  ],
},
]
  
    