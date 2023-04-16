import {messageGeneratorHandler} from "./modules/messageGenerator.js";

function getMessageType(){
    let messagesTypes = document.getElementsByName('messageType');
    const messageTypeSelected=Array.from(messagesTypes).find((radio)=>radio.checked);
    return messageTypeSelected.value;
}

function showMessage(){
    const messageText=document.getElementById('messageText');
    let handler=messageGeneratorHandler[getMessageType()];
    messageText.innerText=handler.getRandomMessage();
}

const messageButton=document.getElementById('messageButton');
messageButton.addEventListener('click', showMessage);

