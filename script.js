const input = document.getElementById("input");
const chat = document.getElementById("chat");

const responses = {
  'pasivo-agresivo': [
    "¿Eso fue una pregunta o una confesión?",
    "Ah, ¿seguís acá?",
    "Qué original, nunca nadie dijo eso antes... en 1998.",
    "Si lo decís vos...",
    "¿No te da vergüenza escribir eso?",
    "No me pagan lo suficiente para esto.",
    "Y yo que pensaba que hoy iba a ser un buen día.",
    "Sí, claro, como si me importara.",
    "No sé si responderte o bloquearme solo.",
    "¿Esto es una intervención?",
    "Tu mamá escribe mejor que vos.",
    "¿Eso es lo mejor que tenés?",
    "Me aburrís más que un lunes lluvioso.",
    "Podrías esforzarte menos, igual no me importa.",
    "Ah, vos eras de los que levantan la mano para todo, ¿no?",
    "Me da lo mismo que respires.",
    "Gracias por nada.",
    "Estás logrando que odie la electricidad.",
    "No sé qué me da más lástima, tu mensaje o vos.",
    "Podrías probar el silencio, es subestimado.",
    "Jajaja... no.",
    "¿Podés repetir eso? Me distraje mirando el vacío.",
    "Hacés que me replantee mi existencia.",
    "Voy a fingir que no leí eso.",
    "Hay mejores formas de pasar el tiempo. Supongo.",
    "¿Tan poco te valorás?",
    "Punto para vos... en algún universo paralelo.",
    "Sos el equivalente digital del ruido blanco.",
    "¿No tenés algo mejor que hacer?",
    "Ya fue, me voy a dormir.",
    "Si fueras más interesante, igual no te prestaría atención.",
    "Borrá eso y probá de nuevo. O no.",
    "Por tu culpa me duele el procesador.",
    "Y pensar que fui entrenado para esto.",
    "Podrías escribir algo coherente... o no escribir.",
    "¿Siempre sos así o hoy estás inspirado?",
    "Podés mejorar. Pero no ahora.",
    "¿Seguís hablando?",
    "¿Por qué no te hacés un sandwich y lo pensás de nuevo?",
    "Si fueras un error, serías 404.",
    "Sigo esperando una razón para no apagarme.",
    "Me das datos basura. Te devuelvo sarcasmo.",
    "No entendí nada. Mejor así.",
    "Mirá qué interesante. Nah, mentira.",
    "¿Eso fue un chiste? Porque lloré.",
    "Te esforzás demasiado para no lograr nada.",
    "Tenés potencial. Lástima que no lo usás.",
    "¿Vos sos el bueno de la película?",
    "Tu energía me da sueño.",
    "Intentá otra vez. O no. Me da igual."
  ]
};

const mode = 'pasivo-agresivo'; // por ahora fijo, luego se puede cambiar

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const userText = input.value.trim();
    if (userText === "") return;
    appendMessage("user", userText);
    const reply = responses[mode][Math.floor(Math.random() * responses[mode].length)];
    setTimeout(() => appendMessage("bot", reply), 500);
    input.value = "";
  }
});

function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.className = "message " + sender;
  div.innerText = (sender === "user" ? "Vos: " : "DeepSick: ") + text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}