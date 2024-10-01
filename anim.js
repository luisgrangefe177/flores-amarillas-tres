// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tengo ganas", time: 0.0 },
  { text: "Tengo tiempo y mil ", time: 0.5 },
  { text: "Canciones que cantarte", time: 3 },
  { text: "Tengo historias", time: 6 },
  { text: "Tengo, cosas que contarte", time: 8 },
  { text: "Más hoy tengo tu llegada", time: 11 },
  { text: "Y mi mano voy a darte", time: 12 },
  { text: "Es tan lindo", time: 18 },
  { text: "Cuando existe un", time: 20 },
  { text: "Sentimiento y cuando quieres", time: 21.5 },
  { text: "Cuando cuentas sin callarte,", time: 25 },
  { text: "¿Qué prefieres?", time: 29 },
  { text: "Por ejemplo yo quisiera,", time: 31 },
  { text: "Si no es mucho, que te quedes", time: 33 },
  { text: "Dame solo un momento", time: 39 },
  { text: "Dame amor del más cierto", time: 42 },
  { text: "No te pido más nada", time: 45 },
  { text: "Dame de tu mirada", time: 48 },
  { text: "Y de tus sentimientos", time: 51 },
  { text: "Siente si estoy sintiendo", time: 54 },
  { text: "No te quedes", time: 56 },
  { text: "No revises el pasado que entristece", time: 59.5 },
  { text: "No te niegues si el amor te pertenece", time: 64.5 },
  { text: "Ven y siéntate a mi lado ", time: 69 },
  { text: "Mira el día que amanece", time: 71.5 },
  { text: " ", time: 75.8 },
  { text: "No respondas callada", time: 99.5 },
  { text: "Mucho menos ahora", time: 102 },
  { text: "No me digas mañana", time: 105 },
  { text: "Es que vi que pasabas", time: 109 },
  { text: "Me acerqué porque pienso", time: 112 },
  { text: "Que por ti yo esperaba", time: 115 },
  { text: "Tengo ganas", time: 117 },
  { text: "Tengo tiempo y", time: 120 }, //BIEN
  { text: "Mil canciones que cantarte", time: 121.5 },
  { text: "Tengo historias", time: 124 },
  { text: "Tengo, cosas que contarte", time: 126.5 },
  { text: "Más hoy tengo tu llegada y mi mano", time: 129.5 },
  { text: "voy a darte", time: 133 },
  { text: "Voy a darte", time: 143 },
  { text: "", time: 150 },
  ,
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = " ";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 150000);
