function popup() {

    const fontawsom = document.createElement("link");
    fontawsom.rel = "stylesheet";
    fontawsom.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    document.head.appendChild(fontawsom)
    const style = document.createElement("style");
    style.innerHTML = `
        .cross-icon:hover {
            color: red !important;
        }
            .send-icon:hover {
            color: blue !important;
        }
    `;

    document.head.appendChild(style);


    const mainDiv = document.createElement('div');
    mainDiv.style.borderRadius = "10px"
    mainDiv.style.border = "1px solid #f1f1f1";
    mainDiv.style.boxShadow = "-3px 2px 12px #e3e3e3"
    mainDiv.style.padding = "10px"
    mainDiv.style.flexDirection = "column"
    mainDiv.style.display = "flex"
    mainDiv.style.alignItems = "start"
    mainDiv.style.justifyContent = "space-between"
    mainDiv.style.maxWidth = "500px"
    mainDiv.style.minHeight = "300px"
    mainDiv.style.minWidth = "250px"
    mainDiv.style.position = "fixed"
    mainDiv.style.bottom = "-100%"
    mainDiv.style.right = "10px"
    mainDiv.style.animation = "3s"
    mainDiv.style.animation = "slideUp 1s ease-out forwards";


    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes slideUp {
            from {
                bottom: -100%;
                opacity: 0;
            }
            to {
                bottom: 10px;
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(styleSheet);


    const span1 = document.createElement("span");
    span1.innerHTML = "Chat Bot";
    span1.style.fontFamily = "cursive";
    span1.style.color = "rgb(129 129 129)";


    const topdiv = document.createElement("div");
    topdiv.style.display = "flex";
    topdiv.style.justifyContent = "space-between";
    topdiv.style.alignItems = "center";
    topdiv.style.borderBottom = "1px solid rgb(241, 241, 241)";
    topdiv.style.width = "100%";
    topdiv.style.paddingBottom = "10px";
    mainDiv.appendChild(topdiv)


    const chatIcon = document.createElement("i");
    chatIcon.classList.add("fa-solid", "fa-comments");
    chatIcon.style.color = "rgb(129, 129, 129)"
    topdiv.appendChild(chatIcon)
    topdiv.appendChild(span1)


    const cross = document.createElement("i");
    cross.classList.add("fa-solid", "fa-xmark", "cross-icon");
    cross.style.color = "#a9a0a0"
    cross.style.cursor = "pointer";
    topdiv.appendChild(cross)


    const chatdiv = document.createElement("div");
    chatdiv.innerHTML = " How can I help you?";
    chatdiv.style.padding = "10px";
    chatdiv.style.textAlign = "center";
    chatdiv.style.width = "-webkit-fill-available";
    chatdiv.style.color = "rgb(129, 129, 129)";
    mainDiv.appendChild(chatdiv);


    const textBox = document.createElement("div");
    textBox.style.padding = "8px ";
    textBox.style.width = "-webkit-fill-available";
    textBox.style.fontFamily = "cursive";
    textBox.style.display = "flex";
    textBox.style.gap = "10px";
    textBox.style.alignItems = "center";
    textBox.style.border = "1px solid rgb(241, 241, 241)";
    textBox.style.borderRadius = "2px";


    const inputText = document.createElement("input");
    inputText.placeholder = "Enter your text here"
    inputText.style.outline = "none"
    inputText.style.border = "none"
    inputText.style.font = "14px"
    inputText.style.fontFamily = "cursive"
    inputText.style.color = "rgb(129, 129, 129)"
    inputText.style.width = "inherit";
    inputText.style.borderRight = "1px solid rgb(241, 241, 241)";


    const sendIcon = document.createElement("i");
    sendIcon.classList.add("fa-solid", "fa-paper-plane", "send-icon")
    sendIcon.style.color = "rgb(129, 129, 129)"
    sendIcon.style.cursor = "pointer";


    textBox.appendChild(inputText)
    textBox.appendChild(sendIcon)
    mainDiv.appendChild(textBox)
    document.body.append(mainDiv);

}
popup()