(function (window, document) {
    function ChatBot({ title = "Chat Bot", welcomeMessage = "How can I help you?" }) {
      if (document.getElementById("chatbot-container")) return;
   
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes chatbot-slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
  
        #chatbot-container {
          position: fixed;
          bottom: 10px;
          right: 10px;
          width: 300px;
          min-height: 350px;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          font-family: Arial, sans-serif;
          opacity: 0;
          transform: translateY(50px);
          animation: chatbot-slide-up 0.5s ease-out forwards;
        }
  
        #chatbot-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background: #007bff;
          color: white;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .chatbot-body {
          padding: 10px;
          flex: 1;
          overflow-y: auto;
        }
        #chatbot-input {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ddd;
        }
        #chatbot-input input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: none;
        }
        #chatbot-input button {
          margin-left: 5px;
          background: #007bff;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 5px;
          cursor: pointer;
        }
      `;
      document.head.appendChild(style);
  
      // Main Chatbot Container
      const chatContainer = document.createElement("div");
      chatContainer.id = "chatbot-container";
  
      // Header
      const header = document.createElement("div");
      header.id = "chatbot-header";
      header.innerHTML = `<span>${title}</span>`;
      
      const closeIcon = document.createElement("i");
      closeIcon.classList.add("fa", "fa-times");
      closeIcon.style.cursor = "pointer";
      closeIcon.onclick = () => chatContainer.remove();
      header.appendChild(closeIcon);
  
      // Chat Body
      const chatBody = document.createElement("div");
      chatBody.classList.add("chatbot-body");
      chatBody.innerHTML = `<p>${welcomeMessage}</p>`;
  
      // Input Box
      const chatInput = document.createElement("div");
      chatInput.id = "chatbot-input";
      
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type a message...";
      
      const sendBtn = document.createElement("button");
      sendBtn.innerHTML = "Send";
      sendBtn.onclick = () => {
        if (input.value.trim()) {
          const userMsg = document.createElement("p");
          userMsg.innerText = input.value;
          chatBody.appendChild(userMsg);
          input.value = "";
        }
      };
  
      chatInput.appendChild(input);
      chatInput.appendChild(sendBtn);
  
      // Append all elements
      chatContainer.appendChild(header);
      chatContainer.appendChild(chatBody);
      chatContainer.appendChild(chatInput);
      
      document.body.appendChild(chatContainer);
    }
  
    window.ChatBot = ChatBot; // Make it globally accessible
  })(window, document);
  