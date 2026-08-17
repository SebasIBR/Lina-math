import type { Topic } from "../topics";

export const MAGNITUDES : Topic[] = [
{
  id: "magnitudes-basicas-longitud",
  titulo: "Magnitudes básicas - Longitud",
  youtubeId: "kbNmwT4Sjwk",

  texto:
    "La longitud es una magnitud que utilizamos para medir la distancia entre dos puntos o el tamaño de un objeto." +
    "\n\nPor ejemplo, podemos utilizar la longitud para medir:" +
    "\n• La altura de una persona." +
    "\n• El largo de una mesa." +
    "\n• La distancia entre dos ciudades." +
    "\n• El ancho de una puerta." +
    "\n• La longitud de un lápiz." +
    "\n\nLa unidad principal de longitud en el Sistema Internacional de Unidades es el metro, representado con la letra m." +
    "\n\nSin embargo, dependiendo de lo que necesitemos medir, podemos utilizar unidades mayores o menores que el metro." +
    "\n\nLas unidades más utilizadas son:" +
    "\n• Kilómetro (km)." +
    "\n• Hectómetro (hm)." +
    "\n• Decámetro (dam)." +
    "\n• Metro (m)." +
    "\n• Decímetro (dm)." +
    "\n• Centímetro (cm)." +
    "\n• Milímetro (mm)." +
    "\n\nPodemos organizarlas de mayor a menor así:" +
    "\n• km → hm → dam → m → dm → cm → mm" +
    "\n\nCada paso entre estas unidades representa una multiplicación o división por 10." +
    "\n\nPara convertir de una unidad mayor a una menor multiplicamos por 10 por cada posición que avanzamos hacia la derecha." +
    "\n\nEjemplo:" +
    "\n• Convertir 3 metros a centímetros." +
    "\n• De metros a centímetros avanzamos dos posiciones: m → dm → cm." +
    "\n• Por lo tanto multiplicamos por 100." +
    "\n• 3 × 100 = 300." +
    "\n• Entonces: 3 m = 300 cm." +
    "\n\nOtro ejemplo:" +
    "\n• Convertir 5 kilómetros a metros." +
    "\n• De kilómetros a metros avanzamos tres posiciones: km → hm → dam → m." +
    "\n• Multiplicamos por 1000." +
    "\n• 5 × 1000 = 5000." +
    "\n• Entonces: 5 km = 5000 m." +
    "\n\nCuando convertimos de una unidad menor a una mayor realizamos el proceso contrario: dividimos entre 10 por cada posición que avanzamos hacia la izquierda." +
    "\n\nEjemplo:" +
    "\n• Convertir 800 centímetros a metros." +
    "\n• De centímetros a metros avanzamos dos posiciones hacia la izquierda." +
    "\n• Dividimos entre 100." +
    "\n• 800 ÷ 100 = 8." +
    "\n• Entonces: 800 cm = 8 m." +
    "\n\nEquivalencias importantes:" +
    "\n• 1 km = 1000 m." +
    "\n• 1 m = 10 dm." +
    "\n• 1 m = 100 cm." +
    "\n• 1 m = 1000 mm." +
    "\n• 1 cm = 10 mm." +
    "\n\nTambién debemos seleccionar la unidad adecuada dependiendo de lo que queremos medir." +
    "\n\nPor ejemplo:" +
    "\n• La distancia entre dos ciudades puede medirse en kilómetros." +
    "\n• La altura de una puerta puede medirse en metros." +
    "\n• El largo de un cuaderno puede medirse en centímetros." +
    "\n• El grosor de una moneda puede medirse en milímetros." +
    "\n\nRecuerda: para convertir una unidad mayor en una menor multiplicamos, y para convertir una unidad menor en una mayor dividimos.",

  quiz: [
    {
      id: "long-1",
      question: "¿Cuál es la unidad principal de longitud en el Sistema Internacional?",
      options: [
        { id: "a", text: "Metro" },
        { id: "b", text: "Kilogramo" },
        { id: "c", text: "Segundo" },
      ],
      correctOptionId: "a",
      feedback:
        "El metro (m) es la unidad principal utilizada para medir longitud en el Sistema Internacional de Unidades.",
    },

    {
      id: "long-2",
      question: "¿Cuántos centímetros hay en 3 metros?",
      options: [
        { id: "a", text: "30 cm" },
        { id: "b", text: "300 cm" },
        { id: "c", text: "3000 cm" },
      ],
      correctOptionId: "b",
      feedback:
        "Un metro equivale a 100 centímetros. Entonces: 3 × 100 = 300 cm.",
    },

    {
      id: "long-3",
      question: "¿Cuántos metros hay en 5 kilómetros?",
      options: [
        { id: "a", text: "500 m" },
        { id: "b", text: "5000 m" },
        { id: "c", text: "50 000 m" },
      ],
      correctOptionId: "b",
      feedback:
        "Un kilómetro equivale a 1000 metros. Por lo tanto: 5 × 1000 = 5000 metros.",
    },

    {
      id: "long-4",
      question: "¿A cuántos metros equivalen 800 centímetros?",
      options: [
        { id: "a", text: "8 m" },
        { id: "b", text: "80 m" },
        { id: "c", text: "0,8 m" },
      ],
      correctOptionId: "a",
      feedback:
        "Como 100 centímetros equivalen a 1 metro, dividimos 800 entre 100. Entonces: 800 cm = 8 m.",
    },

    {
      id: "long-5",
      question: "¿Cuál es la unidad más adecuada para medir la distancia entre Medellín y otra ciudad?",
      options: [
        { id: "a", text: "Milímetros" },
        { id: "b", text: "Centímetros" },
        { id: "c", text: "Kilómetros" },
      ],
      correctOptionId: "c",
      feedback:
        "Para medir distancias grandes, como la distancia entre ciudades, normalmente utilizamos kilómetros (km).",
    },
  ],
},
{
  id: "magnitudes-basicas-masa",
  titulo: "Magnitudes básicas - Masa",
  youtubeId: "aLhaKorGBwc",

  texto:
    "La masa es una magnitud que indica la cantidad de materia que tiene un cuerpo u objeto." +
    "\n\nEn la vida cotidiana utilizamos diferentes unidades de masa para medir, por ejemplo:" +
    "\n• La masa de una persona." +
    "\n• Una bolsa de arroz." +
    "\n• Una fruta." +
    "\n• Una tableta de chocolate." +
    "\n• Una pequeña cantidad de una sustancia." +
    "\n\nLa unidad principal de masa en el Sistema Internacional de Unidades es el kilogramo, representado con el símbolo kg." +
    "\n\nSin embargo, para realizar conversiones en el sistema métrico también utilizamos otras unidades." +
    "\n\nPodemos organizarlas de mayor a menor así:" +
    "\n• Kilogramo (kg)." +
    "\n• Hectogramo (hg)." +
    "\n• Decagramo (dag)." +
    "\n• Gramo (g)." +
    "\n• Decigramo (dg)." +
    "\n• Centigramo (cg)." +
    "\n• Miligramo (mg)." +
    "\n\nLa escala queda organizada así:" +
    "\n• kg → hg → dag → g → dg → cg → mg" +
    "\n\nCada paso entre estas unidades representa una multiplicación o división por 10." +
    "\n\nCuando convertimos de una unidad mayor a una menor, multiplicamos por 10 por cada posición que avanzamos hacia la derecha." +
    "\n\nEjemplo:" +
    "\n• Convertir 3 kilogramos a gramos." +
    "\n• De kg a g avanzamos tres posiciones: kg → hg → dag → g." +
    "\n• Multiplicamos por 1000." +
    "\n• 3 × 1000 = 3000." +
    "\n• Entonces: 3 kg = 3000 g." +
    "\n\nOtro ejemplo:" +
    "\n• Convertir 5 gramos a miligramos." +
    "\n• De gramos a miligramos avanzamos tres posiciones: g → dg → cg → mg." +
    "\n• Multiplicamos por 1000." +
    "\n• 5 × 1000 = 5000." +
    "\n• Entonces: 5 g = 5000 mg." +
    "\n\nCuando convertimos de una unidad menor a una mayor hacemos el proceso contrario: dividimos entre 10 por cada posición que avanzamos hacia la izquierda." +
    "\n\nEjemplo:" +
    "\n• Convertir 4000 gramos a kilogramos." +
    "\n• De gramos a kilogramos avanzamos tres posiciones hacia la izquierda." +
    "\n• Dividimos entre 1000." +
    "\n• 4000 ÷ 1000 = 4." +
    "\n• Entonces: 4000 g = 4 kg." +
    "\n\nEquivalencias importantes:" +
    "\n• 1 kg = 1000 g." +
    "\n• 1 hg = 100 g." +
    "\n• 1 dag = 10 g." +
    "\n• 1 g = 10 dg." +
    "\n• 1 g = 100 cg." +
    "\n• 1 g = 1000 mg." +
    "\n\nDebemos escoger la unidad adecuada dependiendo de la masa del objeto." +
    "\n\nPor ejemplo:" +
    "\n• La masa de una persona se expresa normalmente en kilogramos." +
    "\n• Una bolsa de arroz puede expresarse en kilogramos." +
    "\n• Una fruta puede expresarse en gramos." +
    "\n• Cantidades muy pequeñas pueden expresarse en miligramos." +
    "\n\nEs importante diferenciar masa y peso. Aunque en la vida cotidiana utilizamos estas palabras como si fueran iguales, científicamente son conceptos diferentes." +
    "\n\nLa masa indica la cantidad de materia de un cuerpo, mientras que el peso corresponde a la fuerza con la que la gravedad atrae ese cuerpo." +
    "\n\nRecuerda: para convertir una unidad mayor de masa en una menor multiplicamos, y para convertir una unidad menor en una mayor dividimos.",

  quiz: [
    {
      id: "masa-1",
      question: "¿Cuál es la unidad principal de masa en el Sistema Internacional?",
      options: [
        { id: "a", text: "Kilogramo" },
        { id: "b", text: "Metro" },
        { id: "c", text: "Segundo" },
      ],
      correctOptionId: "a",
      feedback:
        "El kilogramo (kg) es la unidad base de masa en el Sistema Internacional de Unidades.",
    },

    {
      id: "masa-2",
      question: "¿Cuántos gramos hay en 3 kilogramos?",
      options: [
        { id: "a", text: "300 g" },
        { id: "b", text: "3000 g" },
        { id: "c", text: "30 000 g" },
      ],
      correctOptionId: "b",
      feedback:
        "Un kilogramo equivale a 1000 gramos. Entonces: 3 × 1000 = 3000 g.",
    },

    {
      id: "masa-3",
      question: "¿A cuántos kilogramos equivalen 5000 gramos?",
      options: [
        { id: "a", text: "5 kg" },
        { id: "b", text: "50 kg" },
        { id: "c", text: "500 kg" },
      ],
      correctOptionId: "a",
      feedback:
        "Como 1000 gramos equivalen a 1 kilogramo, dividimos 5000 entre 1000. Entonces: 5000 g = 5 kg.",
    },

    {
      id: "masa-4",
      question: "¿Cuántos miligramos hay en 4 gramos?",
      options: [
        { id: "a", text: "40 mg" },
        { id: "b", text: "400 mg" },
        { id: "c", text: "4000 mg" },
      ],
      correctOptionId: "c",
      feedback:
        "Un gramo equivale a 1000 miligramos. Por lo tanto: 4 × 1000 = 4000 mg.",
    },

    {
      id: "masa-5",
      question: "¿Cuál es la unidad más adecuada para expresar la masa de una persona?",
      options: [
        { id: "a", text: "Miligramos" },
        { id: "b", text: "Kilogramos" },
        { id: "c", text: "Centigramos" },
      ],
      correctOptionId: "b",
      feedback:
        "La masa de una persona normalmente se expresa en kilogramos porque es una unidad apropiada para cantidades de masa relativamente grandes.",
    },
  ],
},
{
  id: "magnitudes-basicas-tiempo",
  titulo: "Magnitudes básicas - Tiempo",
  youtubeId: "MX-Bzwn37kU",

  texto:
    "El tiempo es una magnitud que nos permite medir la duración de los acontecimientos y organizar las actividades que realizamos diariamente." +
    "\n\nUtilizamos el tiempo para saber, por ejemplo:" +
    "\n• Cuánto dura una clase." +
    "\n• Cuánto tarda un viaje." +
    "\n• Cuánto dura una película." +
    "\n• Cuántos días faltan para una fecha." +
    "\n• Cuántos años han transcurrido entre dos acontecimientos." +
    "\n\nLas unidades de tiempo más utilizadas son:" +
    "\n• Segundo (s)." +
    "\n• Minuto (min)." +
    "\n• Hora (h)." +
    "\n• Día." +
    "\n• Semana." +
    "\n• Mes." +
    "\n• Año." +
    "\n\nA diferencia de las unidades de longitud y masa, las unidades de tiempo no se convierten simplemente multiplicando o dividiendo siempre entre 10." +
    "\n\nPor eso debemos conocer algunas equivalencias importantes." +
    "\n\nEquivalencias básicas:" +
    "\n• 1 minuto = 60 segundos." +
    "\n• 1 hora = 60 minutos." +
    "\n• 1 hora = 3600 segundos." +
    "\n• 1 día = 24 horas." +
    "\n• 1 semana = 7 días." +
    "\n• 1 año = 12 meses." +
    "\n• 1 año común = 365 días." +
    "\n• 1 año bisiesto = 366 días." +
    "\n\nPara convertir una unidad mayor en una menor debemos multiplicar utilizando la equivalencia correspondiente." +
    "\n\nEjemplo:" +
    "\n• Convertir 3 horas a minutos." +
    "\n• Sabemos que 1 hora = 60 minutos." +
    "\n• Entonces multiplicamos 3 × 60." +
    "\n• 3 × 60 = 180." +
    "\n• Por lo tanto: 3 horas = 180 minutos." +
    "\n\nOtro ejemplo:" +
    "\n• Convertir 5 minutos a segundos." +
    "\n• 1 minuto = 60 segundos." +
    "\n• 5 × 60 = 300." +
    "\n• Entonces: 5 minutos = 300 segundos." +
    "\n\nPara convertir una unidad menor en una mayor debemos dividir utilizando la equivalencia correspondiente." +
    "\n\nEjemplo:" +
    "\n• Convertir 240 minutos a horas." +
    "\n• Como 60 minutos = 1 hora, dividimos 240 entre 60." +
    "\n• 240 ÷ 60 = 4." +
    "\n• Entonces: 240 minutos = 4 horas." +
    "\n\nTambién podemos trabajar con días y semanas." +
    "\n\nEjemplo:" +
    "\n• ¿Cuántos días hay en 4 semanas?" +
    "\n• Una semana tiene 7 días." +
    "\n• 4 × 7 = 28." +
    "\n• Por lo tanto: 4 semanas = 28 días." +
    "\n\nPodemos encontrar duraciones utilizando horas de inicio y finalización." +
    "\n\nEjemplo:" +
    "\n• Una película comienza a las 2:00 p. m. y termina a las 4:30 p. m." +
    "\n• De 2:00 p. m. a 4:00 p. m. transcurren 2 horas." +
    "\n• De 4:00 p. m. a 4:30 p. m. transcurren 30 minutos." +
    "\n• La película dura 2 horas y 30 minutos." +
    "\n\nTambién podemos expresar una duración utilizando diferentes unidades." +
    "\n\nEjemplo:" +
    "\n• 90 minutos equivalen a 1 hora y 30 minutos." +
    "\n• Esto se debe a que 60 minutos forman una hora y quedan 30 minutos." +
    "\n\nRecuerda: para realizar correctamente conversiones de tiempo debemos identificar las unidades y utilizar la equivalencia correspondiente.",

  quiz: [
    {
      id: "tiempo-1",
      question: "¿Cuántos minutos tiene una hora?",
      options: [
        { id: "a", text: "24 minutos" },
        { id: "b", text: "60 minutos" },
        { id: "c", text: "100 minutos" },
      ],
      correctOptionId: "b",
      feedback:
        "Una hora está formada por 60 minutos. Esta es una de las equivalencias fundamentales para trabajar con unidades de tiempo.",
    },

    {
      id: "tiempo-2",
      question: "¿Cuántos minutos hay en 3 horas?",
      options: [
        { id: "a", text: "120 minutos" },
        { id: "b", text: "180 minutos" },
        { id: "c", text: "300 minutos" },
      ],
      correctOptionId: "b",
      feedback:
        "Cada hora tiene 60 minutos. Entonces: 3 × 60 = 180 minutos.",
    },

    {
      id: "tiempo-3",
      question: "¿A cuántas horas equivalen 240 minutos?",
      options: [
        { id: "a", text: "4 horas" },
        { id: "b", text: "6 horas" },
        { id: "c", text: "24 horas" },
      ],
      correctOptionId: "a",
      feedback:
        "Dividimos 240 entre 60 porque cada hora tiene 60 minutos. Entonces: 240 ÷ 60 = 4 horas.",
    },

    {
      id: "tiempo-4",
      question: "¿Cuántos días hay en 4 semanas?",
      options: [
        { id: "a", text: "21 días" },
        { id: "b", text: "28 días" },
        { id: "c", text: "30 días" },
      ],
      correctOptionId: "b",
      feedback:
        "Una semana tiene 7 días. Por lo tanto: 4 × 7 = 28 días.",
    },

    {
      id: "tiempo-5",
      question: "Una película comienza a las 3:00 p. m. y termina a las 5:30 p. m. ¿Cuánto dura?",
      options: [
        {
          id: "a",
          text: "2 horas y 30 minutos",
        },
        {
          id: "b",
          text: "3 horas y 30 minutos",
        },
        {
          id: "c",
          text: "2 horas",
        },
      ],
      correctOptionId: "a",
      feedback:
        "De 3:00 p. m. a 5:00 p. m. transcurren 2 horas y de 5:00 p. m. a 5:30 p. m. transcurren otros 30 minutos. En total son 2 horas y 30 minutos.",
    },
  ],
},
{
  id: "ajedrez-tablero-piezas",
  titulo: "Ajedrez - El tablero y las piezas",
  youtubeId: "qYZFPXkVLfo",

  texto:
    "El ajedrez es un juego de estrategia que se practica entre dos jugadores sobre un tablero." +
    "\n\nAdemás de ser divertido, el ajedrez ayuda a desarrollar habilidades como:" +
    "\n• Concentración." +
    "\n• Memoria." +
    "\n• Pensamiento lógico." +
    "\n• Resolución de problemas." +
    "\n• Planeación y estrategia." +
    "\n\nEl tablero de ajedrez está formado por 64 casillas organizadas en 8 filas y 8 columnas." +
    "\n\nLas casillas alternan entre colores claros y oscuros." +
    "\n\nCada jugador comienza la partida con 16 piezas." +
    "\n\nLas piezas de cada jugador son:" +
    "\n• 1 rey." +
    "\n• 1 dama." +
    "\n• 2 torres." +
    "\n• 2 alfiles." +
    "\n• 2 caballos." +
    "\n• 8 peones." +
    "\n\nEn total, al comenzar una partida hay 32 piezas sobre el tablero." +
    "\n\nCada pieza tiene características y movimientos diferentes." +
    "\n\nEl rey:" +
    "\n• Es la pieza más importante de la partida." +
    "\n• Debemos protegerlo para evitar el jaque mate." +
    "\n\nLa dama:" +
    "\n• Es una de las piezas más poderosas." +
    "\n• Puede desplazarse en líneas rectas y diagonales." +
    "\n\nLa torre:" +
    "\n• Se desplaza horizontal o verticalmente." +
    "\n\nEl alfil:" +
    "\n• Se desplaza por las diagonales del tablero." +
    "\n\nEl caballo:" +
    "\n• Realiza un movimiento especial parecido a la letra L." +
    "\n• Es la única pieza que puede saltar sobre otras piezas." +
    "\n\nEl peón:" +
    "\n• Normalmente avanza una casilla hacia adelante." +
    "\n• Captura las piezas adversarias en diagonal." +
    "\n\nPara colocar correctamente el tablero debemos comprobar que cada jugador tenga una casilla clara en la esquina derecha más cercana." +
    "\n\nLas torres se ubican inicialmente en las esquinas." +
    "\n• Junto a las torres se colocan los caballos." +
    "\n• Luego se colocan los alfiles." +
    "\n• Finalmente se ubican la dama y el rey." +
    "\n• Los ocho peones se colocan delante de las demás piezas." +
    "\n\nUna regla sencilla para recordar la posición de la dama es: la dama comienza sobre una casilla de su mismo color." +
    "\n\nRecuerda: cada jugador comienza con 16 piezas y el objetivo principal será proteger al propio rey mientras intentamos atacar al rey adversario.",

  quiz: [
    {
      id: "ajedrez49-1",
      question: "¿Cuántas casillas tiene un tablero de ajedrez?",
      options: [
        { id: "a", text: "32" },
        { id: "b", text: "64" },
        { id: "c", text: "100" },
      ],
      correctOptionId: "b",
      feedback:
        "El tablero tiene 8 filas y 8 columnas. Por lo tanto, 8 × 8 = 64 casillas.",
    },

    {
      id: "ajedrez49-2",
      question: "¿Cuántas piezas tiene cada jugador al comenzar una partida?",
      options: [
        { id: "a", text: "8 piezas" },
        { id: "b", text: "16 piezas" },
        { id: "c", text: "32 piezas" },
      ],
      correctOptionId: "b",
      feedback:
        "Cada jugador comienza con 16 piezas: 1 rey, 1 dama, 2 torres, 2 alfiles, 2 caballos y 8 peones.",
    },

    {
      id: "ajedrez49-3",
      question: "¿Cuántos peones tiene inicialmente cada jugador?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "8" },
        { id: "c", text: "16" },
      ],
      correctOptionId: "b",
      feedback:
        "Cada jugador comienza con 8 peones, ubicados delante de las demás piezas.",
    },

    {
      id: "ajedrez49-4",
      question: "¿Qué pieza puede saltar sobre otras piezas?",
      options: [
        { id: "a", text: "Caballo" },
        { id: "b", text: "Torre" },
        { id: "c", text: "Alfil" },
      ],
      correctOptionId: "a",
      feedback:
        "El caballo es la única pieza que puede saltar sobre otras piezas durante su movimiento.",
    },

    {
      id: "ajedrez49-5",
      question: "Si cada jugador comienza con 16 piezas, ¿cuántas piezas hay en total al iniciar la partida?",
      options: [
        { id: "a", text: "16" },
        { id: "b", text: "24" },
        { id: "c", text: "32" },
      ],
      correctOptionId: "c",
      feedback:
        "Hay dos jugadores y cada uno comienza con 16 piezas. Entonces: 16 + 16 = 32 piezas.",
    },
  ],
},
{
  id: "ajedrez-movimientos-jaque-mate",
  titulo: "Ajedrez - Movimientos y jaque mate",
  youtubeId: "t0UUZzSexds",

  texto:
    "Para jugar ajedrez debemos conocer cómo se mueve cada una de las piezas." +
    "\n\nCada pieza tiene una forma particular de desplazarse por el tablero." +
    "\n\nEL REY" +
    "\n• Puede desplazarse una casilla en cualquier dirección." +
    "\n• Puede avanzar, retroceder o desplazarse hacia los lados y diagonales." +
    "\n• No puede moverse hacia una casilla donde pueda ser capturado inmediatamente." +
    "\n\nLA DAMA" +
    "\n• Puede desplazarse horizontalmente, verticalmente y diagonalmente." +
    "\n• Puede recorrer varias casillas si el camino está libre." +
    "\n\nLA TORRE" +
    "\n• Se desplaza horizontal o verticalmente." +
    "\n• Puede recorrer varias casillas mientras no encuentre otra pieza bloqueando su camino." +
    "\n\nEL ALFIL" +
    "\n• Se desplaza únicamente en diagonal." +
    "\n• Cada alfil permanece durante toda la partida en casillas del mismo color en que comenzó." +
    "\n\nEL CABALLO" +
    "\n• Se mueve formando una L." +
    "\n• Puede desplazarse dos casillas en una dirección y una hacia un lado." +
    "\n• Es la única pieza que puede saltar sobre otras piezas." +
    "\n\nEL PEÓN" +
    "\n• Normalmente avanza una casilla hacia adelante." +
    "\n• En su primer movimiento puede avanzar una o dos casillas si el camino está libre." +
    "\n• Captura una pieza adversaria avanzando una casilla en diagonal." +
    "\n\nCAPTURAR UNA PIEZA" +
    "\n\nUna captura ocurre cuando una pieza se mueve hasta una casilla ocupada por una pieza adversaria y esta última es retirada del tablero." +
    "\n\nNo todas las piezas capturan de la misma forma. Generalmente capturan siguiendo su movimiento habitual, excepto el peón, que avanza hacia adelante pero captura en diagonal." +
    "\n\n¿QUÉ ES EL JAQUE?" +
    "\n\nEl rey está en jaque cuando una pieza adversaria lo está atacando." +
    "\n\nCuando nuestro rey está en jaque debemos realizar una jugada que elimine inmediatamente esa amenaza." +
    "\n\nPodemos intentar:" +
    "\n• Mover el rey a una casilla segura." +
    "\n• Capturar la pieza atacante." +
    "\n• Bloquear el ataque cuando sea posible." +
    "\n\n¿QUÉ ES EL JAQUE MATE?" +
    "\n\nEl jaque mate ocurre cuando el rey está siendo atacado y no existe ninguna jugada legal que permita eliminar la amenaza." +
    "\n\nCuando se produce el jaque mate, la partida termina y gana el jugador que realizó el ataque." +
    "\n\nEl objetivo del ajedrez no es capturar todas las piezas del adversario. El objetivo fundamental es conseguir el jaque mate contra su rey." +
    "\n\nAntes de realizar una jugada es recomendable preguntarnos:" +
    "\n• ¿Mi rey está seguro?" +
    "\n• ¿Alguna de mis piezas está siendo atacada?" +
    "\n• ¿Puedo capturar una pieza adversaria?" +
    "\n• ¿Qué podría hacer mi oponente después de mi movimiento?" +
    "\n\nPensar antes de mover es una de las habilidades más importantes del ajedrez." +
    "\n\nRecuerda: observar, analizar diferentes posibilidades y anticipar las jugadas del adversario nos ayuda a tomar mejores decisiones.",

  quiz: [
    {
      id: "ajedrez50-1",
      question: "¿Cómo se mueve normalmente la torre?",
      options: [
        {
          id: "a",
          text: "Horizontal y verticalmente",
        },
        {
          id: "b",
          text: "Solamente en diagonal",
        },
        {
          id: "c",
          text: "Formando una L",
        },
      ],
      correctOptionId: "a",
      feedback:
        "La torre puede desplazarse varias casillas horizontal o verticalmente mientras su camino esté libre.",
    },

    {
      id: "ajedrez50-2",
      question: "¿Cómo se mueve el caballo?",
      options: [
        {
          id: "a",
          text: "Solamente en diagonal",
        },
        {
          id: "b",
          text: "Formando una L",
        },
        {
          id: "c",
          text: "Una sola casilla hacia adelante",
        },
      ],
      correctOptionId: "b",
      feedback:
        "El caballo realiza un movimiento parecido a una L y además puede saltar sobre otras piezas.",
    },

    {
      id: "ajedrez50-3",
      question: "¿Cómo captura normalmente un peón?",
      options: [
        {
          id: "a",
          text: "Hacia atrás",
        },
        {
          id: "b",
          text: "Hacia adelante",
        },
        {
          id: "c",
          text: "En diagonal hacia adelante",
        },
      ],
      correctOptionId: "c",
      feedback:
        "El peón avanza hacia adelante, pero para capturar una pieza adversaria debe hacerlo una casilla en diagonal hacia adelante.",
    },

    {
      id: "ajedrez50-4",
      question: "¿Qué significa que un rey está en jaque?",
      options: [
        {
          id: "a",
          text: "Que está siendo atacado por una pieza adversaria",
        },
        {
          id: "b",
          text: "Que ya ganó la partida",
        },
        {
          id: "c",
          text: "Que debe capturar obligatoriamente una dama",
        },
      ],
      correctOptionId: "a",
      feedback:
        "Un rey está en jaque cuando una pieza adversaria lo amenaza. El jugador debe realizar una jugada legal que elimine esa amenaza.",
    },

    {
      id: "ajedrez50-5",
      question: "¿Cuál es el objetivo principal de una partida de ajedrez?",
      options: [
        {
          id: "a",
          text: "Capturar todos los peones",
        },
        {
          id: "b",
          text: "Realizar jaque mate al rey adversario",
        },
        {
          id: "c",
          text: "Llevar primero una torre al otro lado del tablero",
        },
      ],
      correctOptionId: "b",
      feedback:
        "El objetivo fundamental del ajedrez es realizar jaque mate al rey adversario. No es necesario capturar todas sus piezas para ganar.",
    },
  ],
},

]
  
    