document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let messageText = messageInput.value.trim();

    if (messageText === "") {
        return; // Don't send if empty
    }

    // Add user message to chat box
    addMessage(messageText, "user");

    // Clear input field
    messageInput.value = "";

    // Simulate a response from the bot
    setTimeout(() => {
        let botResponse = generateBotResponse(messageText);
        addMessage(botResponse, "bot");
    }, 1000);
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateBotResponse(userMessage) {
    // Basic bot response (could be expanded with more logic)
    return "You said: " + userMessage;
}
