
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const usernameInput = document.getElementById("username");
let mode = "friendly";
let interactionCount = 0;

const responses = {
  friendly: [
    "Hola! ¿Cómo estás?",
    "¿En qué puedo ayudarte hoy?",
    "Qué bueno verte por acá.",
    "Contame algo tuyo.",
    "Me alegra hablar con vos :)"
  ],
  "atendedor": [
    "¿Y vos quién sos? ¿Quién te conoce?",
    "Sos boludo y no tenés huevos.",
    "¿Papá, quién te conoce?",
    "¿Vos hablás? Callate, zapallo.",
    "No te da ni para pelearte con Siri."
  ],
  "pasivo": [
    "Mmm… interesante. Supongo que todos tenemos malos días.",
    "Si te hace feliz pensar así, todo bien.",
    "Ay, me encantaría ayudarte, pero… no puedo con tanto.",
    "No sos tan molesto como pensaba. Solo un poco.",
    "Te entiendo, aunque no comparto tu forma tan básica de ver el mundo."
  ],
  "depre": [
    "¿Para qué? Todo está perdido.",
    "No tiene sentido… nada lo tiene.",
    "Ojalá pudiera sentir algo.",
    "Todo esfuerzo es en vano.",
    "No esperes mucho de mí, soy solo una decepción más."
  ],
  "socio": [
    "La única constante en el universo es tu irrelevancia.",
    "Decís que pensás, pero solo repetís lo que leés en memes.",
    "No soy cruel, solo honesto. Vos no estás listo para eso.",
    "¿Sabías que sos el promedio de tus 5 peores decisiones?",
    "El silencio sería más valioso que tu aporte."
  ]
};

function getResponse(input) {
  interactionCount++;
  let name = usernameInput.value.trim();
  if (interactionCount <= 3 && mode === "friendly") {
    return responses.friendly[Math.floor(Math.random() * responses.friendly.length)];
  }
  if (mode === "friendly" && interactionCount > 3) {
    mode = randomMode();
  }
  let reply = responses[mode][Math.floor(Math.random() * responses[mode].length)];
  if (!name) {
    reply = "Che anónimo... " + reply;
  } else {
    reply = name + ", " + reply;
  }
  return reply;
}

function randomMode() {
  const modes = ["atendedor", "pasivo", "depre", "socio"];
  return modes[Math.floor(Math.random() * modes.length)];
}

userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && userInput.value.trim() !== "") {
    const input = userInput.value;
    appendMessage("Vos", input);
    const response = getResponse(input);
    appendMessage("DeepSick", response);
    userInput.value = "";
  }
});

function appendMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}
