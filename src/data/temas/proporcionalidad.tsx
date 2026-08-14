import type { Topic } from "../topics";

export const PROPORCIONALIDAD : Topic[] = [
    
{
  id: "razones",
  titulo: "Razones",
  youtubeId: "nCBUIiCMw9o",

  texto:
    "Una razón es una comparación entre dos cantidades mediante una división." +
    "\n\nLas razones nos permiten expresar la relación que existe entre dos cantidades." +
    "\n\nPor ejemplo, si en un grupo hay 6 estudiantes con camiseta azul y 3 con camiseta roja, podemos comparar ambas cantidades mediante una razón." +
    "\n\nLa razón entre camisetas azules y rojas es:" +
    "\n• 6 a 3." +
    "\n• También podemos escribirla como 6:3." +
    "\n• O como una fracción: 6/3." +
    "\n\nUna razón está formada por dos términos:" +
    "\n• Antecedente: es el primer término de la razón." +
    "\n• Consecuente: es el segundo término de la razón." +
    "\n\nEn la razón 4:7:" +
    "\n• 4 es el antecedente." +
    "\n• 7 es el consecuente." +
    "\n\nEl orden de los términos es muy importante." +
    "\n\nPor ejemplo, si en una caja tenemos 8 manzanas y 4 peras:" +
    "\n• La razón de manzanas a peras es 8:4." +
    "\n• La razón de peras a manzanas es 4:8." +
    "\n\nEstas razones expresan comparaciones diferentes." +
    "\n\nLas razones también pueden simplificarse de manera similar a las fracciones." +
    "\n\nEjemplo:" +
    "\n• Razón 8:4." +
    "\n• Dividimos ambos términos entre 4." +
    "\n• 8 ÷ 4 = 2." +
    "\n• 4 ÷ 4 = 1." +
    "\n• Entonces: 8:4 = 2:1." +
    "\n\nEsto significa que por cada 2 elementos de la primera cantidad existe 1 elemento de la segunda." +
    "\n\nOtro ejemplo:" +
    "\n• En una clase hay 12 niñas y 8 niños." +
    "\n• La razón niñas:niños es 12:8." +
    "\n• Simplificamos dividiendo entre 4." +
    "\n• 12:8 = 3:2." +
    "\n• Esto significa que por cada 3 niñas hay 2 niños." +
    "\n\nLas razones aparecen frecuentemente en situaciones como recetas, escalas, velocidades, mapas, mezclas y comparaciones de cantidades." +
    "\n\nRecuerda: una razón compara dos cantidades y el orden en que se escriben sus términos es fundamental para interpretarla correctamente.",

  quiz: [
    {
      id: "raz-1",
      question: "¿Qué es una razón?",
      options: [
        {
          id: "a",
          text: "Una comparación entre dos cantidades mediante una división",
        },
        {
          id: "b",
          text: "La suma de dos cantidades",
        },
        {
          id: "c",
          text: "Una multiplicación de números enteros",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Una razón permite comparar dos cantidades mediante una división y puede expresarse como a:b o a/b.",
    },

    {
      id: "raz-2",
      question: "En la razón 5:8, ¿cuál es el antecedente?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "8" },
        { id: "c", text: "13" },
      ],
      correctOptionId: "a",
      feedback:
        "El antecedente es el primer término de una razón. En 5:8, el antecedente es 5 y el consecuente es 8.",
    },

    {
      id: "raz-3",
      question: "En una caja hay 10 lápices rojos y 5 lápices azules. ¿Cuál es la razón de lápices rojos a azules?",
      options: [
        { id: "a", text: "5:10" },
        { id: "b", text: "10:5" },
        { id: "c", text: "15:5" },
      ],
      correctOptionId: "b",
      feedback:
        "Como estamos comparando primero los lápices rojos con los azules, escribimos 10:5.",
    },

    {
      id: "raz-4",
      question: "¿Cuál es la forma simplificada de la razón 12:8?",
      options: [
        { id: "a", text: "6:4" },
        { id: "b", text: "3:2" },
        { id: "c", text: "4:3" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos ambos términos entre 4: 12 ÷ 4 = 3 y 8 ÷ 4 = 2. Por lo tanto, 12:8 = 3:2.",
    },

    {
      id: "raz-5",
      question: "Si la razón entre bicicletas y carros es 2:5, ¿qué significa?",
      options: [
        {
          id: "a",
          text: "Por cada 2 bicicletas hay 5 carros",
        },
        {
          id: "b",
          text: "Por cada 5 bicicletas hay 2 carros",
        },
        {
          id: "c",
          text: "Siempre hay exactamente 7 vehículos",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La razón 2:5 indica que por cada 2 elementos de la primera cantidad, bicicletas, existen 5 de la segunda cantidad, carros.",
    },
  ],
},
{
  id: "proporciones",
  titulo: "Proporciones",
  youtubeId: "cmrDE8tmLWc",

  texto:
    "Una proporción es una igualdad entre dos razones." +
    "\n\nEsto significa que dos razones forman una proporción cuando representan la misma relación entre cantidades." +
    "\n\nEjemplo:" +
    "\n• 2/3 = 4/6" +
    "\n\nEstas dos razones forman una proporción porque representan el mismo valor." +
    "\n\nTambién podemos escribir una proporción utilizando dos puntos:" +
    "\n• 2:3 = 4:6" +
    "\n\nUna proporción tiene cuatro términos." +
    "\n\nEn la proporción a/b = c/d:" +
    "\n• a y d se llaman extremos." +
    "\n• b y c se llaman medios." +
    "\n\nEjemplo:" +
    "\n• 2/5 = 6/15" +
    "\n• Los extremos son 2 y 15." +
    "\n• Los medios son 5 y 6." +
    "\n\nPara comprobar si dos razones forman una proporción podemos utilizar los productos cruzados." +
    "\n\nMultiplicamos el numerador de la primera razón por el denominador de la segunda y comparamos el resultado con el producto de los otros dos términos." +
    "\n\nRegla:" +
    "\n• Si a/b = c/d, entonces a × d = b × c." +
    "\n\nEjemplo:" +
    "\n• ¿2/3 y 4/6 forman una proporción?" +
    "\n• 2 × 6 = 12." +
    "\n• 3 × 4 = 12." +
    "\n• Como los productos son iguales, sí forman una proporción." +
    "\n\nVeamos otro ejemplo:" +
    "\n• ¿3/4 y 5/8 forman una proporción?" +
    "\n• 3 × 8 = 24." +
    "\n• 4 × 5 = 20." +
    "\n• Como 24 no es igual a 20, las razones no forman una proporción." +
    "\n\nLas proporciones aparecen frecuentemente en situaciones de la vida cotidiana." +
    "\n\nEjemplo:" +
    "\n• Si 2 cuadernos cuestan $6.000, entonces 4 cuadernos, manteniendo el mismo precio por unidad, cuestan $12.000." +
    "\n• Podemos representarlo como 2/6000 = 4/12000." +
    "\n• Los productos cruzados son iguales, por lo tanto existe una proporción." +
    "\n\nLas proporciones serán fundamentales para estudiar posteriormente las proporciones directas, inversas y la regla de tres." +
    "\n\nRecuerda: dos razones forman una proporción cuando son equivalentes y sus productos cruzados son iguales.",

  quiz: [
    {
      id: "prop-1",
      question: "¿Qué es una proporción?",
      options: [
        {
          id: "a",
          text: "Una igualdad entre dos razones",
        },
        {
          id: "b",
          text: "La suma de dos fracciones",
        },
        {
          id: "c",
          text: "Una multiplicación de números enteros",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Una proporción es una igualdad entre dos razones que representan la misma relación entre cantidades.",
    },

    {
      id: "prop-2",
      question: "¿Las razones 2/3 y 4/6 forman una proporción?",
      options: [
        { id: "a", text: "Sí" },
        { id: "b", text: "No" },
        { id: "c", text: "No se puede determinar" },
      ],
      correctOptionId: "a",
      feedback:
        "Sí. Al multiplicar en cruz obtenemos 2 × 6 = 12 y 3 × 4 = 12. Como los productos son iguales, forman una proporción.",
    },

    {
      id: "prop-3",
      question: "En la proporción 2/5 = 6/15, ¿cuáles son los extremos?",
      options: [
        { id: "a", text: "2 y 15" },
        { id: "b", text: "5 y 6" },
        { id: "c", text: "2 y 6" },
      ],
      correctOptionId: "a",
      feedback:
        "En una proporción, los extremos corresponden al primer y al cuarto término. En 2/5 = 6/15, los extremos son 2 y 15.",
    },

    {
      id: "prop-4",
      question: "¿Las razones 3/4 y 5/8 forman una proporción?",
      options: [
        { id: "a", text: "Sí, porque 3 + 5 = 4 + 4" },
        { id: "b", text: "No, porque sus productos cruzados son diferentes" },
        { id: "c", text: "Sí, porque ambas son fracciones propias" },
      ],
      correctOptionId: "b",
      feedback:
        "Calculamos 3 × 8 = 24 y 4 × 5 = 20. Como los productos cruzados son diferentes, las razones no forman una proporción.",
    },

    {
      id: "prop-5",
      question: "Si 3/5 = 9/15, ¿qué obtenemos al realizar los productos cruzados?",
      options: [
        { id: "a", text: "45 y 45" },
        { id: "b", text: "27 y 75" },
        { id: "c", text: "18 y 20" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos 3 × 15 = 45 y 5 × 9 = 45. Como ambos productos son iguales, las razones forman una proporción.",
    },
  ],
},
{
  id: "proporciones-parte-2",
  titulo: "Proporciones - Parte 2",
  youtubeId: "Wy4zTjSwWZs",

  texto:
    "En una proporción podemos encontrar un término desconocido utilizando la propiedad fundamental de las proporciones." +
    "\n\nRecordemos que una proporción es una igualdad entre dos razones." +
    "\n\nEjemplo:" +
    "\n• 2/3 = 4/6" +
    "\n\nEn toda proporción, el producto de los extremos es igual al producto de los medios." +
    "\n\nRegla general:" +
    "\n• Si a/b = c/d, entonces a × d = b × c." +
    "\n\nEsta propiedad nos permite encontrar un valor desconocido, que normalmente representamos con la letra x." +
    "\n\nEjemplo:" +
    "\n• 2/3 = x/12" +
    "\n• Multiplicamos en cruz: 2 × 12 = 3 × x." +
    "\n• 24 = 3x." +
    "\n• Dividimos ambos lados entre 3." +
    "\n• x = 24 ÷ 3." +
    "\n• x = 8." +
    "\n\nPor lo tanto:" +
    "\n• 2/3 = 8/12." +
    "\n\nOtro ejemplo:" +
    "\n• 5/8 = 15/x" +
    "\n• Multiplicamos en cruz: 5 × x = 8 × 15." +
    "\n• 5x = 120." +
    "\n• x = 120 ÷ 5." +
    "\n• x = 24." +
    "\n\nTambién podemos encontrar el valor desconocido cuando está en otra posición." +
    "\n\nEjemplo:" +
    "\n• x/4 = 6/8" +
    "\n• Multiplicamos en cruz: x × 8 = 4 × 6." +
    "\n• 8x = 24." +
    "\n• x = 24 ÷ 8." +
    "\n• x = 3." +
    "\n\nPodemos comprobar el resultado reemplazando la x por el valor obtenido." +
    "\n\nEn el ejemplo anterior:" +
    "\n• 3/4 = 6/8." +
    "\n• 3 × 8 = 24." +
    "\n• 4 × 6 = 24." +
    "\n• Como los productos cruzados son iguales, el resultado es correcto." +
    "\n\nPasos para encontrar un término desconocido:" +
    "\n• Identificar el valor desconocido." +
    "\n• Realizar los productos cruzados." +
    "\n• Formar la ecuación correspondiente." +
    "\n• Despejar la incógnita." +
    "\n• Comprobar el resultado." +
    "\n\nRecuerda: en una proporción, el producto de los extremos siempre debe ser igual al producto de los medios.",

  quiz: [
    {
      id: "prop2-1",
      question: "¿Cuál es el valor de x en la proporción 2/3 = x/12?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "8" },
        { id: "c", text: "18" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos en cruz: 2 × 12 = 3x. Entonces 24 = 3x y, al dividir entre 3, obtenemos x = 8.",
    },

    {
      id: "prop2-2",
      question: "¿Cuál es el valor de x en la proporción 3/5 = x/20?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "15" },
        { id: "c", text: "18" },
      ],
      correctOptionId: "a",
      feedback:
        "Multiplicamos en cruz: 3 × 20 = 5x. Entonces 60 = 5x y x = 60 ÷ 5 = 12.",
    },

    {
      id: "prop2-3",
      question: "¿Cuál es el valor de x en la proporción 5/8 = 15/x?",
      options: [
        { id: "a", text: "20" },
        { id: "b", text: "24" },
        { id: "c", text: "30" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos en cruz: 5x = 8 × 15 = 120. Dividimos entre 5 y obtenemos x = 24.",
    },

    {
      id: "prop2-4",
      question: "¿Cuál es el valor de x en la proporción x/4 = 6/8?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos en cruz: 8x = 4 × 6 = 24. Entonces x = 24 ÷ 8 = 3.",
    },

    {
      id: "prop2-5",
      question: "Después de encontrar el valor desconocido en una proporción, ¿cómo podemos comprobar la respuesta?",
      options: [
        {
          id: "a",
          text: "Sumando todos los términos",
        },
        {
          id: "b",
          text: "Verificando que los productos cruzados sean iguales",
        },
        {
          id: "c",
          text: "Restando los denominadores",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Podemos sustituir el valor encontrado y comprobar que el producto de los extremos sea igual al producto de los medios.",
    },
  ],
},
{
  id: "proporciones-directas",
  titulo: "Proporciones directas",
  youtubeId: "qLr4h8rd_Ck",

  texto:
    "Dos cantidades son directamente proporcionales cuando al aumentar una de ellas, la otra también aumenta en la misma proporción." +
    "\n\nDe la misma manera, si una cantidad disminuye, la otra también disminuye proporcionalmente." +
    "\n\nEjemplo:" +
    "\n• Si 1 cuaderno cuesta $3.000, entonces 2 cuadernos cuestan $6.000." +
    "\n• 3 cuadernos cuestan $9.000." +
    "\n• 4 cuadernos cuestan $12.000." +
    "\n\nPodemos observar que cuando aumenta la cantidad de cuadernos, también aumenta el precio total." +
    "\n\nSi duplicamos la cantidad de cuadernos, también se duplica el precio." +
    "\n\nOtro ejemplo:" +
    "\n• Una máquina produce 5 piezas en 1 minuto." +
    "\n• En 2 minutos produce 10 piezas." +
    "\n• En 3 minutos produce 15 piezas." +
    "\n\nSi la máquina mantiene el mismo ritmo de producción, al aumentar el tiempo también aumenta proporcionalmente la cantidad de piezas producidas." +
    "\n\nPodemos representar una proporción directa mediante razones equivalentes." +
    "\n\nEjemplo:" +
    "\n• 2 kg de fruta cuestan $8.000." +
    "\n• 4 kg cuestan $16.000." +
    "\n• Podemos escribir: 2/4 = 8000/16000." +
    "\n\nComprobamos mediante productos cruzados:" +
    "\n• 2 × 16000 = 32000." +
    "\n• 4 × 8000 = 32000." +
    "\n• Como los productos son iguales, existe una proporción." +
    "\n\nUna forma sencilla de reconocer una proporción directa es preguntarnos:" +
    "\n• Si una cantidad aumenta, ¿la otra también aumenta?" +
    "\n• Si una cantidad se duplica, ¿la otra también se duplica?" +
    "\n• Si una cantidad se triplica, ¿la otra también se triplica?" +
    "\n\nEjemplo de una situación cotidiana:" +
    "\n• Si cada entrada al cine cuesta $10.000, una entrada cuesta $10.000, dos cuestan $20.000 y tres cuestan $30.000." +
    "\n\nLa cantidad de entradas y el precio total son directamente proporcionales." +
    "\n\nSin embargo, que dos cantidades aumenten al mismo tiempo no siempre significa que sean directamente proporcionales. Deben mantener la misma relación entre ellas." +
    "\n\nRecuerda: en una proporción directa, las dos cantidades cambian manteniendo una relación constante.",

  quiz: [
    {
      id: "pd-1",
      question: "¿Cuándo dos cantidades son directamente proporcionales?",
      options: [
        {
          id: "a",
          text: "Cuando una aumenta y la otra disminuye",
        },
        {
          id: "b",
          text: "Cuando cambian manteniendo la misma proporción",
        },
        {
          id: "c",
          text: "Cuando siempre tienen el mismo valor",
        },
      ],
      correctOptionId: "b",
      feedback:
        "En una proporción directa las cantidades cambian manteniendo una relación constante. Si una se multiplica por un número, la otra también lo hace.",
    },

    {
      id: "pd-2",
      question: "Si 1 cuaderno cuesta $3.000, ¿cuánto cuestan 4 cuadernos?",
      options: [
        { id: "a", text: "$7.000" },
        { id: "b", text: "$9.000" },
        { id: "c", text: "$12.000" },
      ],
      correctOptionId: "c",
      feedback:
        "Si cada cuaderno cuesta $3.000, multiplicamos 4 × $3.000 = $12.000. La cantidad de cuadernos y el precio son directamente proporcionales.",
    },

    {
      id: "pd-3",
      question: "Una máquina produce 5 piezas por minuto. ¿Cuántas producirá en 4 minutos si mantiene el mismo ritmo?",
      options: [
        { id: "a", text: "9 piezas" },
        { id: "b", text: "20 piezas" },
        { id: "c", text: "25 piezas" },
      ],
      correctOptionId: "b",
      feedback:
        "Multiplicamos 5 piezas por 4 minutos: 5 × 4 = 20. Al aumentar el tiempo, aumenta proporcionalmente la producción.",
    },

    {
      id: "pd-4",
      question: "Si 2 kg de fruta cuestan $8.000, ¿cuánto costarán 6 kg manteniendo el mismo precio por kilogramo?",
      options: [
        { id: "a", text: "$16.000" },
        { id: "b", text: "$24.000" },
        { id: "c", text: "$48.000" },
      ],
      correctOptionId: "b",
      feedback:
        "De 2 kg a 6 kg la cantidad se triplica. Por lo tanto, el precio también debe triplicarse: $8.000 × 3 = $24.000.",
    },

    {
      id: "pd-5",
      question: "¿Cuál situación representa una proporción directa?",
      options: [
        {
          id: "a",
          text: "Más productos comprados al mismo precio por unidad generan un mayor costo total",
        },
        {
          id: "b",
          text: "Más trabajadores realizan una tarea en menos tiempo",
        },
        {
          id: "c",
          text: "A mayor velocidad, se necesita menos tiempo para recorrer una distancia fija",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Si el precio por unidad permanece constante, al aumentar la cantidad de productos también aumenta proporcionalmente el costo total. Las otras situaciones corresponden a relaciones inversas.",
    },
  ],
},
{
  id: "proporciones-inversas",
  titulo: "Proporciones inversas",
  youtubeId: "AEAht1yIilU",

  texto:
    "Dos cantidades son inversamente proporcionales cuando al aumentar una de ellas, la otra disminuye en la misma proporción." +
    "\n\nDe manera similar, cuando una cantidad disminuye, la otra aumenta proporcionalmente." +
    "\n\nPor ejemplo:" +
    "\n• Si 2 trabajadores realizan una tarea en 12 horas, al aumentar el número de trabajadores puede disminuir el tiempo necesario para terminarla." +
    "\n\nSi todos trabajan al mismo ritmo:" +
    "\n• 2 trabajadores → 12 horas." +
    "\n• 4 trabajadores → 6 horas." +
    "\n• 8 trabajadores → 3 horas." +
    "\n\nPodemos observar que al duplicar el número de trabajadores, el tiempo se reduce a la mitad." +
    "\n\nEn una proporción inversa, el producto de las dos cantidades relacionadas permanece constante." +
    "\n\nEn el ejemplo anterior:" +
    "\n• 2 × 12 = 24." +
    "\n• 4 × 6 = 24." +
    "\n• 8 × 3 = 24." +
    "\n\nComo el producto se mantiene constante, existe una relación de proporcionalidad inversa." +
    "\n\nOtro ejemplo aparece al relacionar velocidad y tiempo para recorrer una distancia fija." +
    "\n\nSupongamos que un vehículo debe recorrer la misma distancia:" +
    "\n• A 40 km/h tarda 6 horas." +
    "\n• A 80 km/h tarda 3 horas." +
    "\n\nAl duplicar la velocidad, el tiempo necesario se reduce a la mitad." +
    "\n\nTambién podemos encontrar relaciones inversas al repartir una cantidad fija entre varias personas." +
    "\n\nEjemplo:" +
    "\n• Tenemos 24 dulces para repartir equitativamente." +
    "\n• Entre 2 personas → 12 dulces para cada una." +
    "\n• Entre 4 personas → 6 dulces para cada una." +
    "\n• Entre 8 personas → 3 dulces para cada una." +
    "\n\nAl aumentar el número de personas, disminuye la cantidad que recibe cada una." +
    "\n\nPara reconocer una proporción inversa podemos preguntarnos:" +
    "\n• Si una cantidad aumenta, ¿la otra disminuye?" +
    "\n• Si una cantidad se duplica, ¿la otra se reduce a la mitad?" +
    "\n• ¿El producto entre las dos cantidades permanece constante?" +
    "\n\nEs importante no confundir la proporcionalidad directa con la inversa." +
    "\n\n• Proporción directa: si una cantidad aumenta, la otra también aumenta proporcionalmente." +
    "\n• Proporción inversa: si una cantidad aumenta, la otra disminuye proporcionalmente." +
    "\n\nRecuerda: en una proporción inversa las cantidades cambian en sentidos contrarios y su producto permanece constante.",

  quiz: [
    {
      id: "pi-1",
      question: "¿Cuándo dos cantidades son inversamente proporcionales?",
      options: [
        {
          id: "a",
          text: "Cuando una aumenta y la otra disminuye proporcionalmente",
        },
        {
          id: "b",
          text: "Cuando las dos siempre aumentan",
        },
        {
          id: "c",
          text: "Cuando las dos cantidades son iguales",
        },
      ],
      correctOptionId: "a",
      feedback:
        "En una proporción inversa, cuando una cantidad aumenta, la otra disminuye proporcionalmente, y viceversa.",
    },

    {
      id: "pi-2",
      question: "Si 2 trabajadores realizan una tarea en 12 horas, ¿cuánto tardarán 4 trabajadores al mismo ritmo?",
      options: [
        { id: "a", text: "24 horas" },
        { id: "b", text: "6 horas" },
        { id: "c", text: "12 horas" },
      ],
      correctOptionId: "b",
      feedback:
        "Al duplicar el número de trabajadores de 2 a 4, el tiempo se reduce a la mitad: 12 ÷ 2 = 6 horas.",
    },

    {
      id: "pi-3",
      question: "Si 24 dulces se reparten entre 4 personas, ¿cuántos recibe cada persona?",
      options: [
        { id: "a", text: "4 dulces" },
        { id: "b", text: "6 dulces" },
        { id: "c", text: "8 dulces" },
      ],
      correctOptionId: "b",
      feedback:
        "Dividimos 24 entre 4 y obtenemos 6. Si aumenta el número de personas, disminuye la cantidad que recibe cada una.",
    },

    {
      id: "pi-4",
      question: "En una proporción inversa, ¿qué ocurre con el producto de las dos cantidades?",
      options: [
        {
          id: "a",
          text: "Permanece constante",
        },
        {
          id: "b",
          text: "Siempre aumenta",
        },
        {
          id: "c",
          text: "Siempre es igual a cero",
        },
      ],
      correctOptionId: "a",
      feedback:
        "En una relación inversamente proporcional, el producto de las cantidades correspondientes permanece constante.",
    },

    {
      id: "pi-5",
      question: "¿Cuál de las siguientes situaciones representa una proporción inversa?",
      options: [
        {
          id: "a",
          text: "Más cuadernos comprados generan un mayor costo total",
        },
        {
          id: "b",
          text: "Más horas trabajadas generan un mayor pago si la tarifa es constante",
        },
        {
          id: "c",
          text: "Más trabajadores pueden necesitar menos tiempo para realizar la misma tarea",
        },
      ],
      correctOptionId: "c",
      feedback:
        "Si el trabajo total permanece igual, al aumentar el número de trabajadores puede disminuir proporcionalmente el tiempo necesario para terminarlo.",
    },
  ],
},
{
  id: "regla-tres-simple",
  titulo: "Regla de tres simple",
  youtubeId: "32hkDv17mTo",

  texto:
    "La regla de tres simple es un procedimiento que permite encontrar un valor desconocido cuando conocemos otros tres valores relacionados proporcionalmente." +
    "\n\nSe utiliza frecuentemente para resolver situaciones relacionadas con precios, cantidades, distancias, tiempo, producción y muchas otras situaciones de la vida cotidiana." +
    "\n\nAntes de aplicar la regla de tres debemos identificar si las cantidades tienen una relación directamente proporcional o inversamente proporcional." +
    "\n\nEn este tema comenzaremos con la regla de tres simple directa." +
    "\n\nEn una relación directa, cuando una cantidad aumenta, la otra también aumenta proporcionalmente." +
    "\n\nEjemplo:" +
    "\n• Si 3 cuadernos cuestan $12.000, ¿cuánto cuestan 5 cuadernos?" +
    "\n\nPrimero organizamos los datos:" +
    "\n• 3 cuadernos → $12.000" +
    "\n• 5 cuadernos → x" +
    "\n\nPlanteamos la proporción:" +
    "\n• 3/5 = 12000/x" +
    "\n\nMultiplicamos en cruz:" +
    "\n• 3 × x = 5 × 12000" +
    "\n• 3x = 60000" +
    "\n• x = 60000 ÷ 3" +
    "\n• x = 20000" +
    "\n\nPor lo tanto, 5 cuadernos cuestan $20.000." +
    "\n\nTambién podemos utilizar una fórmula práctica:" +
    "\n• x = (5 × 12000) ÷ 3" +
    "\n• x = 20000." +
    "\n\nOtro ejemplo:" +
    "\n• Si 4 kg de fruta cuestan $16.000, ¿cuánto cuestan 7 kg?" +
    "\n\nOrganizamos:" +
    "\n• 4 kg → $16.000" +
    "\n• 7 kg → x" +
    "\n\nCalculamos:" +
    "\n• x = (7 × 16000) ÷ 4" +
    "\n• x = 112000 ÷ 4" +
    "\n• x = 28000" +
    "\n\nPor lo tanto, 7 kg cuestan $28.000." +
    "\n\nPasos para resolver una regla de tres simple directa:" +
    "\n• Identificar las dos magnitudes relacionadas." +
    "\n• Organizar los datos correspondientes." +
    "\n• Identificar el valor desconocido con la letra x." +
    "\n• Comprobar que la relación sea directamente proporcional." +
    "\n• Plantear la proporción." +
    "\n• Multiplicar en cruz." +
    "\n• Despejar la incógnita." +
    "\n• Interpretar el resultado de acuerdo con el problema." +
    "\n\nRecuerda: antes de realizar las operaciones es importante analizar la situación y comprobar qué tipo de proporcionalidad existe.",

  quiz: [
    {
      id: "rts-1",
      question: "¿Para qué se utiliza la regla de tres simple?",
      options: [
        {
          id: "a",
          text: "Para encontrar un valor desconocido cuando conocemos otros tres valores relacionados proporcionalmente",
        },
        {
          id: "b",
          text: "Únicamente para sumar fracciones",
        },
        {
          id: "c",
          text: "Para calcular solamente números negativos",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La regla de tres permite encontrar un valor desconocido utilizando tres valores conocidos que mantienen una relación proporcional.",
    },

    {
      id: "rts-2",
      question: "Si 2 cuadernos cuestan $8.000, ¿cuánto cuestan 5 cuadernos al mismo precio por unidad?",
      options: [
        { id: "a", text: "$16.000" },
        { id: "b", text: "$20.000" },
        { id: "c", text: "$40.000" },
      ],
      correctOptionId: "b",
      feedback:
        "Aplicamos la regla de tres: x = (5 × 8000) ÷ 2 = 40000 ÷ 2 = $20.000.",
    },

    {
      id: "rts-3",
      question: "Si 3 kg de arroz cuestan $15.000, ¿cuánto cuestan 6 kg?",
      options: [
        { id: "a", text: "$18.000" },
        { id: "b", text: "$30.000" },
        { id: "c", text: "$45.000" },
      ],
      correctOptionId: "b",
      feedback:
        "La cantidad de arroz se duplica de 3 kg a 6 kg, por lo tanto el precio también se duplica: $15.000 × 2 = $30.000.",
    },

    {
      id: "rts-4",
      question: "Una máquina produce 20 piezas en 4 horas. Si mantiene el mismo ritmo, ¿cuántas producirá en 10 horas?",
      options: [
        { id: "a", text: "40 piezas" },
        { id: "b", text: "50 piezas" },
        { id: "c", text: "80 piezas" },
      ],
      correctOptionId: "b",
      feedback:
        "Aplicamos la regla de tres: x = (10 × 20) ÷ 4 = 200 ÷ 4 = 50 piezas.",
    },

    {
      id: "rts-5",
      question: "Antes de aplicar una regla de tres, ¿qué debemos analizar?",
      options: [
        {
          id: "a",
          text: "Si las cantidades tienen una relación proporcional",
        },
        {
          id: "b",
          text: "Si todos los números son pares",
        },
        {
          id: "c",
          text: "Si podemos sumar todos los datos",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Primero debemos analizar cómo se relacionan las magnitudes y determinar si existe proporcionalidad antes de aplicar la regla de tres.",
    },
  ],
},
{
  id: "regla-tres-simple-parte-2",
  titulo: "Regla de tres simple - Parte 2",
  youtubeId: "J4SnMLCoJTM",

  texto:
    "En esta segunda parte estudiaremos la regla de tres simple inversa." +
    "\n\nLa regla de tres simple inversa se utiliza cuando tenemos dos magnitudes inversamente proporcionales." +
    "\n\nEsto significa que cuando una cantidad aumenta, la otra disminuye proporcionalmente." +
    "\n\nPor ejemplo:" +
    "\n• Si 4 trabajadores realizan una tarea en 12 días, al aumentar el número de trabajadores necesitaremos menos días para realizar el mismo trabajo." +
    "\n\nSupongamos que queremos saber cuántos días necesitarán 6 trabajadores." +
    "\n\nOrganizamos los datos:" +
    "\n• 4 trabajadores → 12 días." +
    "\n• 6 trabajadores → x días." +
    "\n\nAnalizamos la relación:" +
    "\n• Aumentan los trabajadores." +
    "\n• Disminuyen los días." +
    "\n• Por lo tanto, es una relación inversamente proporcional." +
    "\n\nEn una proporción inversa, el producto de las cantidades correspondientes permanece constante." +
    "\n\nEntonces:" +
    "\n• 4 × 12 = 6 × x." +
    "\n• 48 = 6x." +
    "\n• x = 48 ÷ 6." +
    "\n• x = 8." +
    "\n\nPor lo tanto, 6 trabajadores necesitarán 8 días para realizar el mismo trabajo." +
    "\n\nOtro ejemplo:" +
    "\n• Un vehículo tarda 6 horas en realizar un recorrido viajando a 60 km/h." +
    "\n• ¿Cuánto tardaría si realiza el mismo recorrido a 90 km/h?" +
    "\n\nAnalizamos:" +
    "\n• Aumenta la velocidad." +
    "\n• Disminuye el tiempo." +
    "\n• Es una proporcionalidad inversa." +
    "\n\nCalculamos:" +
    "\n• 60 × 6 = 90 × x." +
    "\n• 360 = 90x." +
    "\n• x = 360 ÷ 90." +
    "\n• x = 4 horas." +
    "\n\nEs importante diferenciar la regla de tres directa de la inversa." +
    "\n\nRegla de tres directa:" +
    "\n• Si una magnitud aumenta, la otra también aumenta proporcionalmente." +
    "\n• Si una disminuye, la otra también disminuye." +
    "\n\nEjemplo:" +
    "\n• Más productos → mayor precio total, si el precio por unidad permanece constante." +
    "\n\nRegla de tres inversa:" +
    "\n• Si una magnitud aumenta, la otra disminuye proporcionalmente." +
    "\n\nEjemplo:" +
    "\n• Más trabajadores → menos tiempo para realizar el mismo trabajo." +
    "\n\nPasos para resolver una regla de tres simple inversa:" +
    "\n• Identificar las dos magnitudes." +
    "\n• Organizar correctamente los datos." +
    "\n• Determinar si la relación es inversamente proporcional." +
    "\n• Plantear la igualdad de productos." +
    "\n• Despejar el valor desconocido." +
    "\n• Comprobar si el resultado tiene sentido en el contexto del problema." +
    "\n\nRecuerda: no debemos aplicar automáticamente una fórmula. Primero debemos identificar si la relación es directa o inversa.",

  quiz: [
    {
      id: "rts2-1",
      question: "¿Cuándo utilizamos una regla de tres simple inversa?",
      options: [
        {
          id: "a",
          text: "Cuando una magnitud aumenta y la otra disminuye proporcionalmente",
        },
        {
          id: "b",
          text: "Cuando las dos magnitudes siempre aumentan",
        },
        {
          id: "c",
          text: "Cuando las dos cantidades tienen exactamente el mismo valor",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La regla de tres inversa se utiliza cuando las magnitudes son inversamente proporcionales: al aumentar una, la otra disminuye proporcionalmente.",
    },

    {
      id: "rts2-2",
      question: "Si 4 trabajadores realizan una tarea en 12 días, ¿cuántos días necesitarán 6 trabajadores al mismo ritmo?",
      options: [
        { id: "a", text: "18 días" },
        { id: "b", text: "8 días" },
        { id: "c", text: "10 días" },
      ],
      correctOptionId: "b",
      feedback:
        "Es una relación inversa. Calculamos 4 × 12 = 6 × x. Entonces 48 = 6x y x = 8 días.",
    },

    {
      id: "rts2-3",
      question: "Si 3 máquinas realizan un trabajo en 8 horas, ¿cuánto tardarían 6 máquinas iguales realizando el mismo trabajo?",
      options: [
        { id: "a", text: "16 horas" },
        { id: "b", text: "4 horas" },
        { id: "c", text: "8 horas" },
      ],
      correctOptionId: "b",
      feedback:
        "Al duplicar el número de máquinas, el tiempo se reduce a la mitad. También podemos calcular 3 × 8 = 6 × x, por lo que x = 4 horas.",
    },

    {
      id: "rts2-4",
      question: "Un vehículo tarda 6 horas en realizar un recorrido a 60 km/h. ¿Cuánto tardaría en realizar la misma distancia a 90 km/h?",
      options: [
        { id: "a", text: "4 horas" },
        { id: "b", text: "9 horas" },
        { id: "c", text: "6 horas" },
      ],
      correctOptionId: "a",
      feedback:
        "Para una distancia fija, velocidad y tiempo son inversamente proporcionales. Calculamos 60 × 6 = 90 × x. Entonces x = 4 horas.",
    },

    {
      id: "rts2-5",
      question: "¿Cuál de estas situaciones corresponde a una regla de tres simple inversa?",
      options: [
        {
          id: "a",
          text: "Más kilogramos comprados producen un mayor precio total",
        },
        {
          id: "b",
          text: "Más horas trabajadas producen un mayor pago",
        },
        {
          id: "c",
          text: "Más trabajadores necesitan menos tiempo para realizar el mismo trabajo",
        },
      ],
      correctOptionId: "c",
      feedback:
        "Si el trabajo total permanece constante, al aumentar el número de trabajadores disminuye el tiempo necesario. Por eso es una relación inversamente proporcional.",
    },
  ],
},
{
  id: "regla-tres-compuesta",
  titulo: "Regla de tres compuesta",
  youtubeId: "Q8TClSb9svI",

  texto:
    "La regla de tres compuesta es un procedimiento que utilizamos para resolver problemas en los que intervienen tres o más magnitudes relacionadas entre sí." +
    "\n\nA diferencia de la regla de tres simple, donde trabajamos con dos magnitudes, en la regla de tres compuesta debemos analizar varias cantidades al mismo tiempo." +
    "\n\nPor ejemplo, podemos relacionar:" +
    "\n• Número de trabajadores." +
    "\n• Número de días." +
    "\n• Horas de trabajo diario." +
    "\n• Cantidad de productos fabricados." +
    "\n\nPara resolver una regla de tres compuesta debemos analizar cómo se relaciona cada magnitud con la cantidad que queremos encontrar." +
    "\n\nLas relaciones pueden ser directas o inversas." +
    "\n\n• Relación directa: si una cantidad aumenta, la incógnita también aumenta proporcionalmente." +
    "\n• Relación inversa: si una cantidad aumenta, la incógnita disminuye proporcionalmente." +
    "\n\nEjemplo:" +
    "\n• 4 trabajadores fabrican 120 piezas en 3 días." +
    "\n• ¿Cuántas piezas fabricarán 6 trabajadores en 5 días, trabajando al mismo ritmo?" +
    "\n\nOrganizamos los datos:" +
    "\n• 4 trabajadores → 3 días → 120 piezas." +
    "\n• 6 trabajadores → 5 días → x piezas." +
    "\n\nAhora analizamos cada magnitud con respecto a las piezas producidas." +
    "\n\nTrabajadores y piezas:" +
    "\n• Si aumentan los trabajadores, aumenta la cantidad de piezas." +
    "\n• Es una relación directa." +
    "\n\nDías y piezas:" +
    "\n• Si aumentan los días de trabajo, aumenta la cantidad de piezas." +
    "\n• También es una relación directa." +
    "\n\nPodemos calcular:" +
    "\n• x = 120 × (6/4) × (5/3)." +
    "\n• x = 120 × 1,5 × 5/3." +
    "\n• x = 300." +
    "\n\nPor lo tanto, 6 trabajadores fabricarán 300 piezas en 5 días." +
    "\n\nVeamos un ejemplo con una relación inversa." +
    "\n\n• 4 trabajadores, trabajando 6 horas diarias, terminan una tarea en 10 días." +
    "\n• ¿Cuántos días necesitarán 5 trabajadores trabajando 8 horas diarias?" +
    "\n\nLa incógnita es el número de días." +
    "\n\nTrabajadores y días:" +
    "\n• Si aumentan los trabajadores, disminuyen los días." +
    "\n• La relación es inversa." +
    "\n\nHoras diarias y días:" +
    "\n• Si aumentan las horas trabajadas cada día, disminuyen los días necesarios." +
    "\n• También es una relación inversa." +
    "\n\nCalculamos:" +
    "\n• x = 10 × (4/5) × (6/8)." +
    "\n• x = 10 × 24/40." +
    "\n• x = 6." +
    "\n\nPor lo tanto, 5 trabajadores trabajando 8 horas diarias necesitarán 6 días." +
    "\n\nPasos para resolver una regla de tres compuesta:" +
    "\n• Identificar todas las magnitudes." +
    "\n• Organizar los datos en una tabla o esquema." +
    "\n• Identificar cuál es la incógnita." +
    "\n• Comparar cada magnitud con la incógnita." +
    "\n• Determinar si cada relación es directa o inversa." +
    "\n• Plantear las operaciones correspondientes." +
    "\n• Calcular el valor desconocido." +
    "\n• Comprobar que la respuesta tenga sentido." +
    "\n\nRecuerda: lo más importante en una regla de tres compuesta no es memorizar una fórmula, sino analizar correctamente cómo se relaciona cada magnitud con la incógnita.",

  quiz: [
    {
      id: "rtc-1",
      question: "¿Cuándo utilizamos una regla de tres compuesta?",
      options: [
        {
          id: "a",
          text: "Cuando intervienen tres o más magnitudes relacionadas",
        },
        {
          id: "b",
          text: "Solamente cuando tenemos una fracción",
        },
        {
          id: "c",
          text: "Cuando únicamente intervienen dos números",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La regla de tres compuesta se utiliza cuando en un problema intervienen tres o más magnitudes relacionadas entre sí.",
    },

    {
      id: "rtc-2",
      question: "Si aumentan los trabajadores y, por ello, aumenta la cantidad de productos fabricados, ¿qué tipo de relación existe?",
      options: [
        { id: "a", text: "Directa" },
        { id: "b", text: "Inversa" },
        { id: "c", text: "No existe relación" },
      ],
      correctOptionId: "a",
      feedback:
        "Si al aumentar el número de trabajadores también aumenta la producción, las magnitudes tienen una relación directamente proporcional.",
    },

    {
      id: "rtc-3",
      question: "4 trabajadores producen 120 piezas en 3 días. ¿Cuántas piezas producirán 6 trabajadores en 5 días al mismo ritmo?",
      options: [
        { id: "a", text: "200 piezas" },
        { id: "b", text: "300 piezas" },
        { id: "c", text: "450 piezas" },
      ],
      correctOptionId: "b",
      feedback:
        "Trabajadores y días tienen relación directa con la producción. Calculamos x = 120 × (6/4) × (5/3) = 300 piezas.",
    },

    {
      id: "rtc-4",
      question: "Si aumenta el número de trabajadores para realizar exactamente el mismo trabajo, ¿qué ocurre normalmente con el tiempo necesario?",
      options: [
        {
          id: "a",
          text: "Aumenta proporcionalmente",
        },
        {
          id: "b",
          text: "Disminuye proporcionalmente",
        },
        {
          id: "c",
          text: "Siempre permanece igual",
        },
      ],
      correctOptionId: "b",
      feedback:
        "Si todos trabajan al mismo ritmo y el trabajo total es el mismo, al aumentar los trabajadores disminuye el tiempo necesario. La relación es inversa.",
    },

    {
      id: "rtc-5",
      question: "4 trabajadores trabajando 6 horas diarias terminan una tarea en 10 días. ¿Cuántos días necesitarán 5 trabajadores trabajando 8 horas diarias?",
      options: [
        { id: "a", text: "6 días" },
        { id: "b", text: "8 días" },
        { id: "c", text: "12 días" },
      ],
      correctOptionId: "a",
      feedback:
        "Tanto el número de trabajadores como las horas diarias tienen una relación inversa con los días. Calculamos x = 10 × (4/5) × (6/8) = 6 días.",
    },
  ],
},


    
]
  
    