(function (window, document) {


  const mainDiv = document.createElement("div");

  mainDiv.style.position = "fixed";
  mainDiv.classList.add("maindiv")
  mainDiv.style.bottom = "13px";
  mainDiv.style.right = "25px";
  // mainDiv.style.border = "1px solid gray";
  mainDiv.style.height = "30px";
  mainDiv.style.width = "30px";
  mainDiv.style.padding = "10px";
  mainDiv.style.borderRadius = "90000px";
  mainDiv.style.display = "flex";
  mainDiv.style.alignItems = "center";
  mainDiv.style.justifyContent = "center";

  const chatIcon = document.createElement("img"); 
  chatIcon.src = "./chat.png"
  chatIcon.style.height = "30px"
  chatIcon.style.width = "30px"
  chatIcon.style.width = "30px"



  mainDiv.onclick=()=>{
 
  if (document.getElementById("chatbot-container")) {
 
    document.getElementById("chatbot-container").remove();

    mainDiv.innerHTML='<img id="chat-img" src="./chat.png" height="30px" width="30px" class="img-clss" />';
}else{

  ChatBot({
    title: 'Chat Bot',
    welcomeMessage: 'Hello! How can we help you today?',
    reply: 'Send reply from here',
    titleColor: '',
    textColor: '',
    replybgColor: '',
    msgBgColor: '',
    fontFamily: '',
  
  });



  const closeIcon = document.createElement("i");

  closeIcon.classList.add("fa-solid", "fa-xmark")


  closeIcon.style.color="red"

  mainDiv.innerHTML='<i class="fa-solid fa-xmark icon-cls"></i>';


}





  }




  mainDiv.appendChild(chatIcon)


  document.body.appendChild(mainDiv)




  function ChatBot({
    title = "Chat Bot",
    welcomeMessage = "How can I help you?",
    reply = "here will reply text",
    titleColor,
    textColor,
    replybgColor,
    msgBgColor,
    fontFamily,

  }) {
    if (document.getElementById("chatbot-container")) return;

    let socket = null;

    const script = document.createElement("script");
    script.src = "https://cdn.socket.io/4.7.2/socket.io.min.js";
    script.onload = function () {
      socket = io("http://localhost:8080");
      socket.on("connect", function () {
        console.log(" Connected to server! Socket ID:", socket.id);
      });

      // Jab disconnect ho jaye
      socket.on("disconnect", function () {
        console.log(" Disconnected from server.");
      });

      // Jab koi error aaye
      socket.on("connect_error", function (err) {
        console.log(" Connection Error:", err.message);

      });
      socket.on("message", (reply) => {
        console.log("msg from server", reply)


        getReply(reply)
      });
    };

    document.head.appendChild(script);





    function sendMessage() {
      if (input.value.trim()) {
        const userMsgDiv = document.createElement("div");
        userMsgDiv.style.display = "flex";
        userMsgDiv.style.justifyContent = "flex-start";
        userMsgDiv.style.gap = "5px";
        const userMsg = document.createElement("span");
        userMsg.innerText = input.value;
        socket.emit("sendMessage", input.value);
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
        profile.style.color = "#ababab";

        userMsgDiv.appendChild(profile);
        userMsgDiv.appendChild(userMsg);
        if (chatBody.textContent.trim() === welcomeMessage.trim()) {
          chatBody.innerHTML = "";
        }

        chatBody.appendChild(userMsgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        input.value = "";
        dots();


      }
    }





    function getReply(reply) {

      const resDiv = document.createElement("div");
      resDiv.style.display = "flex";
      resDiv.style.justifyContent = "flex-end";
      resDiv.style.gap = "5px";
      const resMsg = document.createElement("span");
      document.getElementById("dotsId")?.remove();
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
      profile2.style.color = "#cbc7c7";
      resDiv.appendChild(resMsg);
      resDiv.appendChild(profile2);
      chatBody.appendChild(resDiv);

      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = "";
    }





    const dots = () => {
      // dot1.textContent = "●"; 
      const dotDiv = document.createElement("div");
      dotDiv.id = "dotsId";
      dotDiv.style.display = "flex";
      dotDiv.style.flexDirection = "row";
      dotDiv.style.gap = "2px";
      dotDiv.style.justifyContent = "end";
      dotDiv.style.paddingRight = "5px";

      const dot1 = document.createElement("div");
      dot1.style.height = "4px";
      dot1.style.width = "4px";
      dot1.style.borderRadius = "9999px";
      dot1.style.backgroundColor = "rgb(209, 231, 221)";

      const dot2 = document.createElement("div");
      dot2.style.height = "4px";
      dot2.style.width = "4px";
      dot2.style.borderRadius = "9999px";
      dot2.style.backgroundColor = "rgb(209, 231, 221)";


      const dot3 = document.createElement("div");
      dot3.style.height = "4px";
      dot3.style.width = "4px";
      dot3.style.borderRadius = "9999px";
      dot3.style.backgroundColor = "rgb(209, 231, 221)";


      const ary = [dot1, dot2, dot3]
      let index = 0;
      setInterval(() => {
        ary.forEach(dot => dot.style.backgroundColor = "rgb(203, 199, 199)");
        ary[index].style.backgroundColor = "rgb(209, 231, 221) ";
        index = (index + 1) % ary.length;
      }, 300);

      dotDiv.append(dot1, dot2, dot3);
      chatBody.appendChild(dotDiv);

    };












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
          bottom: 67px;
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
          gap:6px;
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

    .dot-class{
    background:red;
    height:8px;
    width:8px;
     border-radius:999px;
   
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
    settingIcon.classList.add("fa-solid", "fa-minus", "sendIcon");

    settingIcon.addEventListener("click", () => {
      console.log("Sssss", chatContainer.style.bottom)

      if (chatContainer.style.bottom == "-354px") {
        chatContainer.style.bottom = "67px";
        console.log("Sssss222", chatContainer.style.bottom)
        settingIcon.classList.add("fa-solid", "fa-minus", "sendIcon");

      } else {
        settingIcon.classList.add("fa-solid", "fa-up-right-and-down-left-from-center", "sendIcon");
        chatContainer.style.bottom = "-354px";
      }
    });


    // settingIcon.classList.add("fa-solid", "fa-gear", "sendIcon");
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
    input.id = "input-text";
    input.type = "text";
    input.placeholder = "Type a message...";

    const sendIcon = document.createElement("i");
    sendIcon.classList.add("fa-solid", "fa-paper-plane", "sendIcon");






    sendIcon.style.color = "gray"
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


    return 1
  }

  window.ChatBot = ChatBot;
})(window, document);


