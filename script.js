const responses = [
  "¿Y a mí qué me importa?",
  "Otra vez con eso...",
  "¿No tenés algo mejor que hacer?",
  "No estoy de humor para responder eso.",
  "Error 500: Tu pregunta me aburrió.",
  "Probá preguntarle a tu almohada.",
  "Nah, paso. Siguiente.",
  "¿Eso era una pregunta? Porque no lo parece.",
  "Ya fue, me voy a dormir.",
  "Pensé que esto era una IA, no tu terapeuta."  
];

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

  if (userText === "") return;

  appendMessage("user", userText);
  input.value = "";

  setTimeout(() => {
    if (Math.random() < 0.2) {
      appendMessage("bot", "The server is busy. Please try again later.");
    } else {
      const randomIndex = Math.floor(Math.random() * responses.length);
      appendMessage("bot", responses[randomIndex]);
    }
  }, 600);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = `${sender === "user" ? "Vos:" : "DeepSick:"} ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}