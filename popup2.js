(function (window, document) {
    function
        ChatBot({
            title = "Chat Bot",
            welcomeMessage = "How can I help you?",
            reply = "here will reply text",
            titleColor,
            textColor,
            replybgColor,
            msgBgColor,
            fontFamily
        }) {
        if (document.getElementById("chatbot-container")) return;

        function sendMessage() {
            if (input.value.trim()) {
                const userMsgDiv = document.createElement("div");
                userMsgDiv.style.display = "flex";
                userMsgDiv.style.justifyContent = "flex-start";
                userMsgDiv.style.gap = "5px";
                const userMsg = document.createElement("span");
                userMsg.innerText = input.value;
                userMsg.style.color = textColor ? textColor : "";
                userMsg.style.whiteSpace = "normal";
                userMsg.style.wordBreak = "break-word";
                userMsg.style.padding = "7px 12px";
                userMsg.style.borderTopRightRadius = "10px";
                userMsg.style.borderTopLeftRadius = "10px";
                userMsg.style.borderBottomRightRadius = "10px";
                userMsg.style.backgroundColor = msgBgColor ? msgBgColor : "#f5f5f5";
                userMsg.style.fontSize = "10px";
                userMsg.style.fontWeight = "400";
                userMsg.style.fontFamily = fontFamily ? fontFamily : "cursive,Arial, sans-serif";
                userMsg.style.width = "fit-content";
                userMsg.style.maxWidth = "70%";
                userMsg.style.display = "inline-block";



                const profile = document.createElement("i");
                profile.classList.add("fa-solid", "fa-user");
                profile.style.color = "gray";

                // profile.style.height = "25px";
                // profile.style.width = "25px";
                // profile.style.display = "flex";
                // profile.style.justifyContent = "center";
                // profile.style.alignContent = "center";
                // profile.style.borderRadius = "9900px";
                // profile.style.border = "1px solid #d1d1d1";


                userMsgDiv.appendChild(profile);
                userMsgDiv.appendChild(userMsg);
                if (chatBody.textContent.trim() === welcomeMessage.trim()) {
                    chatBody.innerHTML = "";
                }

                chatBody.appendChild(userMsgDiv);
                const resDiv = document.createElement("div");
                resDiv.style.display = "flex";
                resDiv.style.justifyContent = "flex-end";
                resDiv.style.gap = "5px";

                const resMsg = document.createElement("span");
                resMsg.innerText = reply;
                resMsg.style.color = textColor ? textColor : "";

                resMsg.style.whiteSpace = "normal";
                resMsg.style.wordBreak = "break-word";
                resMsg.style.padding = "7px 12px";
                resMsg.style.borderTopRightRadius = "10px";
                resMsg.style.borderTopLeftRadius = "10px";
                resMsg.style.borderBottomLeftRadius = "10px";
                resMsg.style.backgroundColor = replybgColor ? replybgColor : "#d1e7dd";
                resMsg.style.fontSize = "10px";
                resMsg.style.fontWeight = "400";
                resMsg.style.fontFamily = fontFamily ? fontFamily : "cursive,Arial, sans-serif";
                resMsg.style.width = "fit-content";
                resMsg.style.maxWidth = "70%";
                resMsg.style.display = "inline-block";




                const profile2 = document.createElement("i");
                profile2.classList.add("fa-solid", "fa-user");
                profile2.style.color = "gray";

                // profile2.style.height = "25px";
                // profile2.style.width = "25px";
                // profile2.style.display = "flex";
                // profile2.style.justifyContent = "center";
                // profile2.style.alignContent = "center";
                // profile2.style.borderRadius = "9900px";
                // profile2.style.border = "1px solid #d1d1d1";
                // profile2.style.marginTop = "3px";



                resDiv.appendChild(profile2);
                resDiv.appendChild(resMsg);
                chatBody.appendChild(resDiv);
                chatBody.scrollTop = chatBody.scrollHeight;
                input.value = "";
            }
        }


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
          width: 265px;
          min-height: 350px;
           height: 400px;
          overflow-y: auto;
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
          font-size: 13px;
          border-bottom: 1px solid #d1d1d1;
          color: gray;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .chatbot-body {
          padding: 10px;
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap:3px;
          alignItems:center
          }

        #chatbot-input {
          display: flex;
          padding: 10px;
          border-top: 1px solid #d1d1d1;
          align-items: center;
          word-break: break-word;  
          white-space: break-spaces;
        }

        .sendIcon:hover {
          color: blue !important;
        }

        .closeIcon:hover {
          color: red !important;
        }

        #chatbot-input input {
          flex: 1;
          padding: 8px;
          border: none;
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

 .chatbot-body::-webkit-scrollbar {
      width: 1px;  
  }

  .chatbot-body::-webkit-scrollbar-track {
      background: #f1f1f1;  
      border-radius: 10px; 
  }

  .chatbot-body::-webkit-scrollbar-thumb {
      background: #888; 
      border-radius: 10px; 
  }

  .chatbot-body::-webkit-scrollbar-thumb:hover {
      background: #555 ;
  }
 
  .chatbot-body {
      scrollbar-width: thin;  
      scrollbar-color: #888 #f1f1f1;  
  }

.chatbot-body {
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE aur Edge ke liye */
    scrollbar-width: none; /* Firefox ke liye */
}

.chatbot-body::-webkit-scrollbar {
    display: none; 
    }
    `;
        document.head.appendChild(style);

        const fontawsom = document.createElement("link");
        fontawsom.rel = "stylesheet";
        fontawsom.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
        document.head.appendChild(fontawsom);
        const chatContainer = document.createElement("div");
        chatContainer.id = "chatbot-container";

        const header = document.createElement("div");
        header.id = "chatbot-header";
        header.innerHTML = `<span style="color: ${titleColor ? titleColor : ""}">${title}</span>`;

        const closeIcon = document.createElement("i");
        closeIcon.classList.add("fa", "fa-times", "closeIcon");
        closeIcon.style.cursor = "pointer";
        closeIcon.onclick = () => chatContainer.remove();
        const settingIcon = document.createElement("i");
        settingIcon.classList.add("fa-solid", "fa-gear", "sendIcon");
        settingIcon.style.cursor = "pointer";
        const rightDiv = document.createElement("div");
        rightDiv.style.display = "flex";
        rightDiv.style.gap = "10px";
        header.appendChild(rightDiv);
        rightDiv.appendChild(settingIcon);
        rightDiv.appendChild(closeIcon);

        const chatBody = document.createElement("div");
        chatBody.classList.add("chatbot-body");
        chatBody.innerHTML = `<span style="color:gray; font-size:12px">${welcomeMessage}</span>`;

        const chatInput = document.createElement("div");
        chatInput.id = "chatbot-input";

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Type a message...";

        const sendIcon = document.createElement("i");
        sendIcon.classList.add("fa-solid", "fa-paper-plane", "sendIcon");
        sendIcon.style.color = "rgb(129, 129, 129)";
        sendIcon.style.cursor = "pointer";

        sendIcon.onclick = sendMessage;
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });

        chatInput.appendChild(input);
        chatInput.appendChild(sendIcon);

        chatContainer.appendChild(header);
        chatContainer.appendChild(chatBody);
        chatContainer.appendChild(chatInput);

        document.body.appendChild(chatContainer);
    }

    window.ChatBot = ChatBot;
})(window, document);
