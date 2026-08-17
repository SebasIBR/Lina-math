import type { Topic } from "../topics";

export const NUMEROS_ENTEROS: Topic[] = [
  {
  id: "conjunto-numeros-enteros",
  titulo: "Conjunto de números enteros",
  youtubeId: "YTldJoVSLZM",

  texto:
    "Los números enteros son aquellos que no tienen parte decimal y pueden ser positivos, negativos o cero." +
    "\n\nEl conjunto de los números enteros se representa con el símbolo ℤ." +
    "\n\nEste conjunto está formado por:" +
    "\n• Números enteros positivos: 1, 2, 3, 4, 5, ..." +
    "\n• El número cero: 0" +
    "\n• Números enteros negativos: -1, -2, -3, -4, -5, ..." +
    "\n\nLos números enteros se utilizan para representar diferentes situaciones de la vida cotidiana, como temperaturas bajo cero, pérdidas de dinero, pisos por debajo del nivel del suelo o posiciones respecto a un punto de referencia." +
    "\n\nEjemplos:" +
    "\n• Una temperatura de 8 °C se puede representar con +8." +
    "\n• Una temperatura de 5 °C bajo cero se representa con -5." +
    "\n• El nivel de referencia se puede representar con 0.",

  quiz: [
    {
      id: "ce-1",
      question: "¿Cuál de los siguientes números pertenece al conjunto de los números enteros?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "2.5" },
        { id: "c", text: "1/3" },
      ],
      correctOptionId: "a",
      feedback:
        "El número 4 pertenece a los números enteros porque no tiene parte decimal ni fraccionaria.",
    },
    {
      id: "ce-2",
      question: "El conjunto de los números enteros se representa con el símbolo:",
      options: [
        { id: "a", text: "ℕ" },
        { id: "b", text: "ℤ" },
        { id: "c", text: "ℚ" },
      ],
      correctOptionId: "b",
      feedback:
        "El conjunto de los números enteros se representa mediante el símbolo ℤ.",
    },
    {
      id: "ce-3",
      question: "¿Cuál de las siguientes opciones contiene únicamente números enteros?",
      options: [
        { id: "a", text: "-3, 0, 7" },
        { id: "b", text: "2.5, 4, -1" },
        { id: "c", text: "1/2, 3, 5" },
      ],
      correctOptionId: "a",
      feedback:
        "-3, 0 y 7 son números enteros porque ninguno tiene parte decimal o fraccionaria.",
    },
    {
      id: "ce-4",
      question: "¿Qué número entero representa una temperatura de 6 grados bajo cero?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "-6" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "b",
      feedback:
        "Las temperaturas bajo cero se representan mediante números negativos. Por eso, 6 grados bajo cero se representa con -6.",
    },
    {
      id: "ce-5",
      question: "¿Cuál afirmación sobre los números enteros es correcta?",
      options: [
        {
          id: "a",
          text: "Están formados únicamente por números positivos",
        },
        {
          id: "b",
          text: "Incluyen números positivos, negativos y el cero",
        },
        {
          id: "c",
          text: "Todos tienen parte decimal",
        },
      ],
      correctOptionId: "b",
      feedback:
        "El conjunto de los números enteros está formado por números positivos, números negativos y el cero.",
    },
  ],
},
{
  id: "representacion-recta-numerica",
  titulo: "Representación en la recta numérica",
  youtubeId: "6snlvSYQsx8",

  texto:
    "La recta numérica es una línea horizontal que permite representar y ordenar los números enteros." +
    "\n\nEn la recta numérica, el cero se ubica como punto de referencia." +
    "\n\nLos números positivos se encuentran a la derecha del cero y los números negativos se ubican a la izquierda." +
    "\n\nMientras más a la derecha se encuentre un número, mayor es su valor. Mientras más a la izquierda se encuentre, menor es su valor." +
    "\n\nEjemplos:" +
    "\n• El número 4 se ubica cuatro unidades a la derecha del cero." +
    "\n• El número -3 se ubica tres unidades a la izquierda del cero." +
    "\n• El número 0 se encuentra entre los números negativos y los positivos." +
    "\n\nLa recta numérica también permite comparar números enteros y visualizar la distancia que existe entre ellos.",

  quiz: [
    {
      id: "rn-1",
      question: "¿Dónde se ubican los números positivos en la recta numérica?",
      options: [
        { id: "a", text: "A la izquierda del cero" },
        { id: "b", text: "A la derecha del cero" },
        { id: "c", text: "Debajo del cero" },
      ],
      correctOptionId: "b",
      feedback:
        "Los números positivos se ubican a la derecha del cero en la recta numérica.",
    },
    {
      id: "rn-2",
      question: "¿Dónde se ubica el número -5 respecto al cero?",
      options: [
        { id: "a", text: "Cinco unidades a la derecha" },
        { id: "b", text: "Cinco unidades a la izquierda" },
        { id: "c", text: "En el mismo lugar que el cero" },
      ],
      correctOptionId: "b",
      feedback:
        "El número -5 es negativo, por eso se ubica cinco unidades a la izquierda del cero.",
    },
    {
      id: "rn-3",
      question: "¿Cuál de estos números está más a la derecha en la recta numérica?",
      options: [
        { id: "a", text: "-4" },
        { id: "b", text: "0" },
        { id: "c", text: "3" },
      ],
      correctOptionId: "c",
      feedback:
        "El número 3 está más a la derecha que 0 y -4, por lo tanto es el mayor de los tres.",
    },
    {
      id: "rn-4",
      question: "¿Qué número se encuentra entre -1 y 1 en la recta numérica?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "2" },
        { id: "c", text: "-2" },
      ],
      correctOptionId: "a",
      feedback:
        "El cero se encuentra exactamente entre -1 y 1 en la recta numérica.",
    },
    {
      id: "rn-5",
      question: "¿Cuál afirmación es correcta?",
      options: [
        {
          id: "a",
          text: "Entre más a la derecha esté un número, mayor es su valor",
        },
        {
          id: "b",
          text: "Entre más a la izquierda esté un número, mayor es su valor",
        },
        {
          id: "c",
          text: "Todos los números tienen el mismo valor en la recta numérica",
        },
      ],
      correctOptionId: "a",
      feedback:
        "En la recta numérica, los números aumentan de valor a medida que avanzamos hacia la derecha.",
    },
  ],
},
{
  id: "orden-numeros-enteros",
  titulo: "Orden de los números enteros",
  youtubeId: "WInH41PzG-I",

  texto:
    "Los números enteros pueden compararse y ordenarse utilizando la recta numérica." +
    "\n\nEn la recta numérica, un número es mayor que otro cuando se encuentra más a la derecha. De la misma manera, un número es menor cuando se encuentra más a la izquierda." +
    "\n\nPara comparar números enteros utilizamos principalmente los siguientes símbolos:" +
    "\n• > significa 'mayor que'." +
    "\n• < significa 'menor que'." +
    "\n• = significa 'igual a'." +
    "\n\nCuando comparamos números negativos debemos recordar que el número que está más cerca del cero es el mayor." +
    "\n\nEjemplos:" +
    "\n• 7 > 3, porque 7 está a la derecha de 3." +
    "\n• -2 > -6, porque -2 está más cerca del cero." +
    "\n• -8 < -3, porque -8 está más a la izquierda." +
    "\n• 0 > -5, porque el cero está a la derecha de -5." +
    "\n\nPara ordenar varios números enteros de menor a mayor, podemos imaginar su posición en la recta numérica y comenzar por el número ubicado más a la izquierda.",

  quiz: [
    {
      id: "on-1",
      question: "¿Cuál de los siguientes números es mayor?",
      options: [
        { id: "a", text: "-8" },
        { id: "b", text: "-3" },
        { id: "c", text: "-10" },
      ],
      correctOptionId: "b",
      feedback:
        "-3 es el mayor porque se encuentra más cerca del cero y más a la derecha en la recta numérica.",
    },

    {
      id: "on-2",
      question: "¿Cuál comparación es correcta?",
      options: [
        { id: "a", text: "-7 > -2" },
        { id: "b", text: "-7 = -2" },
        { id: "c", text: "-7 < -2" },
      ],
      correctOptionId: "c",
      feedback:
        "-7 es menor que -2 porque se encuentra más a la izquierda en la recta numérica.",
    },

    {
      id: "on-3",
      question: "¿Cuál es el orden correcto de menor a mayor?",
      options: [
        { id: "a", text: "-5, -2, 0, 3" },
        { id: "b", text: "3, 0, -2, -5" },
        { id: "c", text: "-2, -5, 0, 3" },
      ],
      correctOptionId: "a",
      feedback:
        "De menor a mayor, los números se organizan desde el que está más a la izquierda hasta el que está más a la derecha: -5, -2, 0, 3.",
    },

    {
      id: "on-4",
      question: "Completa correctamente: 0 ___ -9",
      options: [
        { id: "a", text: "<" },
        { id: "b", text: ">" },
        { id: "c", text: "=" },
      ],
      correctOptionId: "b",
      feedback:
        "El cero es mayor que cualquier número entero negativo. Por lo tanto, 0 > -9.",
    },

    {
      id: "on-5",
      question: "Entre -12 y -4, ¿cuál número es menor?",
      options: [
        { id: "a", text: "-12" },
        { id: "b", text: "-4" },
        { id: "c", text: "Son iguales" },
      ],
      correctOptionId: "a",
      feedback:
        "-12 es menor que -4 porque se encuentra más a la izquierda en la recta numérica.",
    },
  ],
},
{
  id: "opuesto-numero-entero",
  titulo: "Opuesto de un número entero",
  youtubeId: "FJJme7U4HSo",

  texto:
    "El opuesto de un número entero es otro número que se encuentra a la misma distancia del cero en la recta numérica, pero en el lado contrario." +
    "\n\nEsto significa que un número y su opuesto tienen el mismo valor absoluto, pero signos diferentes." +
    "\n\nPara encontrar el opuesto de un número entero, simplemente cambiamos su signo:" +
    "\n• El opuesto de un número positivo es negativo." +
    "\n• El opuesto de un número negativo es positivo." +
    "\n• El opuesto de cero es cero." +
    "\n\nAdemás, cuando sumamos un número con su opuesto, el resultado siempre es cero." +
    "\n\nEjemplos:" +
    "\n• El opuesto de 5 es -5." +
    "\n• El opuesto de -8 es 8." +
    "\n• El opuesto de 12 es -12." +
    "\n• El opuesto de -20 es 20." +
    "\n• El opuesto de 0 es 0." +
    "\n\nEn la recta numérica, por ejemplo, 4 y -4 están ubicados a cuatro unidades del cero, pero en lados diferentes.",

  quiz: [
    {
      id: "op-1",
      question: "¿Cuál es el opuesto de 7?",
      options: [
        { id: "a", text: "-7" },
        { id: "b", text: "7" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "a",
      feedback:
        "El opuesto de 7 es -7 porque tiene el mismo valor absoluto, pero signo contrario.",
    },

    {
      id: "op-2",
      question: "¿Cuál es el opuesto de -12?",
      options: [
        { id: "a", text: "-12" },
        { id: "b", text: "12" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "b",
      feedback:
        "El opuesto de -12 es 12. Para obtener el opuesto cambiamos el signo del número.",
    },

    {
      id: "op-3",
      question: "¿Cuál es el opuesto del número 0?",
      options: [
        { id: "a", text: "-1" },
        { id: "b", text: "1" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "c",
      feedback:
        "El opuesto de cero es el mismo cero, porque 0 no es positivo ni negativo.",
    },

    {
      id: "op-4",
      question: "¿Qué resultado obtenemos al sumar un número entero con su opuesto?",
      options: [
        { id: "a", text: "Siempre cero" },
        { id: "b", text: "Siempre un número positivo" },
        { id: "c", text: "Siempre un número negativo" },
      ],
      correctOptionId: "a",
      feedback:
        "Un número y su opuesto se cancelan entre sí. Por ejemplo, 6 + (-6) = 0.",
    },

    {
      id: "op-5",
      question: "¿Cuál pareja está formada por números opuestos?",
      options: [
        { id: "a", text: "5 y 5" },
        { id: "b", text: "-9 y 9" },
        { id: "c", text: "-4 y -4" },
      ],
      correctOptionId: "b",
      feedback:
        "-9 y 9 son números opuestos porque tienen el mismo valor absoluto y signos diferentes.",
    },
  ],
},
{
  id: "valor-absoluto",
  titulo: "Valor absoluto",
  youtubeId: "9PzT3Imczxc",

  texto:
    "El valor absoluto de un número entero representa la distancia que existe entre ese número y el cero en la recta numérica." +
    "\n\nComo una distancia nunca es negativa, el valor absoluto de un número siempre es positivo o cero." +
    "\n\nEl valor absoluto se representa escribiendo el número entre dos barras verticales: | |." +
    "\n\nPara calcularlo debemos tener en cuenta:" +
    "\n• Si el número es positivo, su valor absoluto es el mismo número." +
    "\n• Si el número es negativo, su valor absoluto es el número sin el signo negativo." +
    "\n• El valor absoluto de cero es cero." +
    "\n\nEjemplos:" +
    "\n• |5| = 5" +
    "\n• |-5| = 5" +
    "\n• |-12| = 12" +
    "\n• |9| = 9" +
    "\n• |0| = 0" +
    "\n\nObserva que 5 y -5 tienen el mismo valor absoluto porque ambos se encuentran a cinco unidades de distancia del cero." +
    "\n\nEs importante no confundir el valor absoluto con el opuesto de un número. Por ejemplo, el opuesto de 7 es -7, mientras que el valor absoluto de 7 es 7.",

  quiz: [
    {
      id: "va-1",
      question: "¿Cuál es el valor absoluto de -8?",
      options: [
        { id: "a", text: "-8" },
        { id: "b", text: "8" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "b",
      feedback:
        "El valor absoluto representa la distancia hasta el cero. -8 se encuentra a 8 unidades del cero, por eso |-8| = 8.",
    },

    {
      id: "va-2",
      question: "¿Cuál es el valor absoluto de 15?",
      options: [
        { id: "a", text: "15" },
        { id: "b", text: "-15" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "a",
      feedback:
        "El valor absoluto de un número positivo es el mismo número. Por lo tanto, |15| = 15.",
    },

    {
      id: "va-3",
      question: "¿Cuál es el valor absoluto de 0?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "-1" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "c",
      feedback:
        "El cero está a una distancia de cero unidades de sí mismo. Por eso, |0| = 0.",
    },

    {
      id: "va-4",
      question: "¿Cuál de las siguientes expresiones es correcta?",
      options: [
        { id: "a", text: "|-10| = -10" },
        { id: "b", text: "|-10| = 10" },
        { id: "c", text: "|-10| = 0" },
      ],
      correctOptionId: "b",
      feedback:
        "El valor absoluto nunca expresa una distancia negativa. Como -10 está a 10 unidades del cero, |-10| = 10.",
    },

    {
      id: "va-5",
      question: "Si dos números son -6 y 6, ¿qué podemos afirmar sobre sus valores absolutos?",
      options: [
        {
          id: "a",
          text: "Tienen el mismo valor absoluto",
        },
        {
          id: "b",
          text: "-6 tiene mayor valor absoluto",
        },
        {
          id: "c",
          text: "6 tiene mayor valor absoluto",
        },
      ],
      correctOptionId: "a",
      feedback:
        "-6 y 6 se encuentran a la misma distancia del cero. Por eso, |-6| = |6| = 6.",
    },
  ],
},
{
  id: "suma-numeros-enteros",
  titulo: "Suma de números enteros",
  youtubeId: "0wyAFzS9gjM",

  texto:
    "Para sumar números enteros debemos observar los signos de los números que participan en la operación." +
    "\n\nCuando los números tienen el mismo signo:" +
    "\n• Se suman sus valores absolutos." +
    "\n• Se conserva el signo que tienen los números." +
    "\n\nEjemplos:" +
    "\n• 5 + 3 = 8" +
    "\n• (-5) + (-3) = -8" +
    "\n\nCuando los números tienen signos diferentes:" +
    "\n• Se restan sus valores absolutos." +
    "\n• El resultado conserva el signo del número que tenga mayor valor absoluto." +
    "\n\nEjemplos:" +
    "\n• 8 + (-3) = 5" +
    "\n• (-9) + 4 = -5" +
    "\n\nTambién debemos recordar que sumar cero no modifica un número:" +
    "\n• 7 + 0 = 7" +
    "\n• (-4) + 0 = -4" +
    "\n\nEn resumen: si los signos son iguales, sumamos y conservamos el signo. Si los signos son diferentes, restamos y conservamos el signo del número con mayor valor absoluto.",

  quiz: [
    {
      id: "su-1",
      question: "¿Cuál es el resultado de 7 + 5?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "2" },
        { id: "c", text: "-12" },
      ],
      correctOptionId: "a",
      feedback:
        "Los dos números son positivos. Se suman sus valores: 7 + 5 = 12.",
    },

    {
      id: "su-2",
      question: "¿Cuál es el resultado de (-6) + (-4)?",
      options: [
        { id: "a", text: "-2" },
        { id: "b", text: "10" },
        { id: "c", text: "-10" },
      ],
      correctOptionId: "c",
      feedback:
        "Los números tienen el mismo signo. Sumamos 6 + 4 = 10 y conservamos el signo negativo. El resultado es -10.",
    },

    {
      id: "su-3",
      question: "¿Cuál es el resultado de 9 + (-5)?",
      options: [
        { id: "a", text: "14" },
        { id: "b", text: "4" },
        { id: "c", text: "-4" },
      ],
      correctOptionId: "b",
      feedback:
        "Los signos son diferentes. Restamos los valores absolutos: 9 - 5 = 4. Como 9 tiene mayor valor absoluto y es positivo, el resultado es 4.",
    },

    {
      id: "su-4",
      question: "¿Cuál es el resultado de (-12) + 7?",
      options: [
        { id: "a", text: "-5" },
        { id: "b", text: "5" },
        { id: "c", text: "-19" },
      ],
      correctOptionId: "a",
      feedback:
        "Los signos son diferentes. Restamos 12 - 7 = 5 y conservamos el signo de -12 porque tiene mayor valor absoluto. El resultado es -5.",
    },

    {
      id: "su-5",
      question: "¿Qué debemos hacer cuando sumamos dos números enteros con signos diferentes?",
      options: [
        {
          id: "a",
          text: "Sumar sus valores absolutos y usar siempre signo positivo",
        },
        {
          id: "b",
          text: "Restar sus valores absolutos y conservar el signo del número con mayor valor absoluto",
        },
        {
          id: "c",
          text: "Multiplicar los dos números",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Cuando los signos son diferentes, restamos los valores absolutos y conservamos el signo del número que tenga mayor valor absoluto.",
    },
  ],
},
{
  id: "resta-numeros-enteros",
  titulo: "Resta de números enteros",
  youtubeId: "OQz9G70w_bo",

  texto:
    "La resta de números enteros puede resolverse transformándola en una suma. Para hacerlo, conservamos el primer número y sumamos el opuesto del segundo número." +
    "\n\nRegla general:" +
    "\n• a - b = a + (-b)" +
    "\n\nPasos para restar números enteros:" +
    "\n• Conservamos el primer número." +
    "\n• Cambiamos el signo de resta (-) por el signo de suma (+)." +
    "\n• Cambiamos el segundo número por su opuesto." +
    "\n• Resolvemos la suma de números enteros." +
    "\n\nEjemplos:" +
    "\n• 8 - 3 = 8 + (-3) = 5" +
    "\n• 6 - (-4) = 6 + 4 = 10" +
    "\n• (-5) - 3 = (-5) + (-3) = -8" +
    "\n• (-9) - (-4) = (-9) + 4 = -5" +
    "\n\nEs importante prestar atención a los signos. Cuando restamos un número negativo, este se transforma en una suma de un número positivo." +
    "\n\nPor ejemplo, 7 - (-2) se convierte en 7 + 2, por lo tanto el resultado es 9.",

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
        "Transformamos la resta en suma del opuesto: 9 - 4 = 9 + (-4) = 5.",
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
      question: "¿Cuál es el resultado de (-6) - 5?",
      options: [
        { id: "a", text: "-1" },
        { id: "b", text: "11" },
        { id: "c", text: "-11" },
      ],
      correctOptionId: "c",
      feedback:
        "Transformamos la resta en suma del opuesto: (-6) - 5 = (-6) + (-5) = -11.",
    },

    {
      id: "re-4",
      question: "¿Cuál es el resultado de (-10) - (-4)?",
      options: [
        { id: "a", text: "-6" },
        { id: "b", text: "-14" },
        { id: "c", text: "6" },
      ],
      correctOptionId: "a",
      feedback:
        "El opuesto de -4 es 4. Entonces: (-10) - (-4) = (-10) + 4 = -6.",
    },

    {
      id: "re-5",
      question: "¿Qué debemos hacer para restar dos números enteros?",
      options: [
        {
          id: "a",
          text: "Sumar directamente los valores absolutos",
        },
        {
          id: "b",
          text: "Conservar el primer número, cambiar la resta por suma y tomar el opuesto del segundo número",
        },
        {
          id: "c",
          text: "Cambiar únicamente el signo del primer número",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Para restar enteros, conservamos el primer número, transformamos la resta en suma y reemplazamos el segundo número por su opuesto.",
    },
  ],
},
{
  id: "multiplicacion-numeros-enteros",
  titulo: "Multiplicación de números enteros",
  youtubeId: "rr2qEAD4b14",

  texto:
    "Para multiplicar números enteros, primero multiplicamos sus valores absolutos y después determinamos el signo del resultado utilizando la ley de los signos." +
    "\n\nLey de los signos:" +
    "\n• (+) × (+) = (+)" +
    "\n• (-) × (-) = (+)" +
    "\n• (+) × (-) = (-)" +
    "\n• (-) × (+) = (-)" +
    "\n\nEsto significa que:" +
    "\n• Si los números tienen signos iguales, el resultado es positivo." +
    "\n• Si los números tienen signos diferentes, el resultado es negativo." +
    "\n\nEjemplos:" +
    "\n• 5 × 4 = 20" +
    "\n• (-5) × (-4) = 20" +
    "\n• 6 × (-3) = -18" +
    "\n• (-7) × 2 = -14" +
    "\n\nTambién debemos recordar que cualquier número entero multiplicado por cero da como resultado cero." +
    "\n\nEjemplos:" +
    "\n• 8 × 0 = 0" +
    "\n• (-12) × 0 = 0" +
    "\n\nCuando multiplicamos más de dos números enteros, podemos determinar el signo observando la cantidad de factores negativos. Si hay una cantidad par de factores negativos, el resultado es positivo; si hay una cantidad impar, el resultado es negativo.",

  quiz: [
    {
      id: "mu-1",
      question: "¿Cuál es el resultado de (-4) × 6?",
      options: [
        { id: "a", text: "-24" },
        { id: "b", text: "24" },
        { id: "c", text: "-10" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos 4 × 6 = 24. Como los factores tienen signos diferentes, el resultado es negativo: -24.",
    },

    {
      id: "mu-2",
      question: "¿Cuál es el resultado de (-8) × (-5)?",
      options: [
        { id: "a", text: "-40" },
        { id: "b", text: "40" },
        { id: "c", text: "13" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos 8 × 5 = 40. Como los dos factores tienen el mismo signo, el resultado es positivo: 40.",
    },

    {
      id: "mu-3",
      question: "¿Cuál es el resultado de 9 × (-3)?",
      options: [
        { id: "a", text: "27" },
        { id: "b", text: "-27" },
        { id: "c", text: "-12" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos 9 × 3 = 27. Como los factores tienen signos diferentes, el resultado es negativo: -27.",
    },

    {
      id: "mu-4",
      question: "¿Cuál es el resultado de (-15) × 0?",
      options: [
        { id: "a", text: "-15" },
        { id: "b", text: "15" },
        { id: "c", text: "0" },
      ],
      correctOptionId: "c",
      feedback:
        "Todo número multiplicado por cero es igual a cero. Por lo tanto, (-15) × 0 = 0.",
    },

    {
      id: "mu-5",
      question: "¿Cuál es el resultado de (-2) × (-3) × (-4)?",
      options: [
        { id: "a", text: "-24" },
        { id: "b", text: "24" },
        { id: "c", text: "-9" },
      ],
      correctOptionId: "a",
      feedback:
        "Primero multiplicamos los valores absolutos: 2 × 3 × 4 = 24. Hay tres factores negativos, es decir, una cantidad impar; por eso el resultado es negativo: -24.",
    },
  ],
},
{
  id: "division-numeros-enteros",
  titulo: "División de números enteros",
  youtubeId: "mBsHX5mnSrQ",

  texto:
    "Para dividir números enteros, primero dividimos sus valores absolutos y después determinamos el signo del resultado utilizando la ley de los signos." +
    "\n\nLey de los signos:" +
    "\n• (+) ÷ (+) = (+)" +
    "\n• (-) ÷ (-) = (+)" +
    "\n• (+) ÷ (-) = (-)" +
    "\n• (-) ÷ (+) = (-)" +
    "\n\nEsto significa que:" +
    "\n• Si el dividendo y el divisor tienen signos iguales, el resultado es positivo." +
    "\n• Si el dividendo y el divisor tienen signos diferentes, el resultado es negativo." +
    "\n\nEjemplos:" +
    "\n• 20 ÷ 5 = 4" +
    "\n• (-20) ÷ (-5) = 4" +
    "\n• 24 ÷ (-6) = -4" +
    "\n• (-35) ÷ 7 = -5" +
    "\n\nTambién debemos recordar que cero dividido entre cualquier número entero diferente de cero es igual a cero." +
    "\n\nEjemplo:" +
    "\n• 0 ÷ 8 = 0" +
    "\n\nSin embargo, no es posible dividir un número entre cero. La división entre cero no está definida." +
    "\n\nPor ejemplo, 8 ÷ 0 no tiene un resultado definido.",

  quiz: [
    {
      id: "di-1",
      question: "¿Cuál es el resultado de (-24) ÷ 6?",
      options: [
        { id: "a", text: "-4" },
        { id: "b", text: "4" },
        { id: "c", text: "-18" },
      ],
      correctOptionId: "a",
      feedback:
        "Dividimos los valores absolutos: 24 ÷ 6 = 4. Como los números tienen signos diferentes, el resultado es negativo: -4.",
    },

    {
      id: "di-2",
      question: "¿Cuál es el resultado de (-36) ÷ (-9)?",
      options: [
        { id: "a", text: "-4" },
        { id: "b", text: "4" },
        { id: "c", text: "45" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos 36 ÷ 9 = 4. Como ambos números tienen el mismo signo, el resultado es positivo: 4.",
    },

    {
      id: "di-3",
      question: "¿Cuál es el resultado de 42 ÷ (-6)?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "-7" },
        { id: "c", text: "-36" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos 42 ÷ 6 = 7. Como los números tienen signos diferentes, el resultado es negativo: -7.",
    },

    {
      id: "di-4",
      question: "¿Cuál es el resultado de 0 ÷ (-5)?",
      options: [
        { id: "a", text: "-5" },
        { id: "b", text: "0" },
        { id: "c", text: "5" },
      ],
      correctOptionId: "b",
      feedback:
        "Cero dividido entre cualquier número diferente de cero es igual a cero. Por lo tanto, 0 ÷ (-5) = 0.",
    },

    {
      id: "di-5",
      question: "¿Cuál de las siguientes afirmaciones es correcta?",
      options: [
        {
          id: "a",
          text: "Un número dividido entre cero siempre es cero",
        },
        {
          id: "b",
          text: "La división entre cero no está definida",
        },
        {
          id: "c",
          text: "La división de dos números negativos siempre es negativa",
        },
      ],
      correctOptionId: "b",
      feedback:
        "No es posible dividir un número entre cero. Además, al dividir dos números negativos, el resultado es positivo.",
    },
  ],
},
  
];