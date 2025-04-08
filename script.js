const responses = {
  normal: [
    "Hola! ¿Cómo estás?",
    "¿En qué puedo ayudarte hoy?",
    "Contame algo tuyo.",
    "¿Querés charlar de algo o vas a decir pavadas?",
    "Hmm, interesante... seguí."
  ],
  atendedor: [
    "Reputo, ¿Papá, quién te conoce?",
    "Reputo, ¿Y vos quién sos? ¿Quién te conoce?",
    "Reputo, Sos boludo y no tenés huevos.",
    "Reputo, ¿Vos hablás? Callate, zapallo.",
    "Reputo, No te da ni para pelearte con Siri."
  ]
};

let isFriendly = true;
let messageCount = 0;

document.getElementById("chat-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;
  appendMessage("Vos", message);
  input.value = "";
  handleDeepSickResponse(message);
});

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleDeepSickResponse(userInput) {
  let response;
  messageCount++;

  if (isFriendly) {
    response = getRandomResponse("normal");
    if (messageCount > 3 || userInput.toLowerCase().includes("puto")) {
      isFriendly = false;
    }
  } else {
    response = getRandomResponse("atendedor");
  }

  setTimeout(() => appendMessage("DeepSick", response), 500);
}

function getRandomResponse(mode) {
  const pool = responses[mode];
  return pool[Math.floor(Math.random() * pool.length)];
}

document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("chat-form").dispatchEvent(new Event("submit"));
  }
});