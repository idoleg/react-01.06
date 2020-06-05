import React, { createElement } from "react";
import ReactDom from "react-dom";

const messages = [ 
    { name: "Alex", content: "Hi, my friend" },
    { name: "Oleg", content: "Hello" },
    { name: "Alex", content: "How are u?" },
    { name: "Oleg", content: "Fine, and wbu?" }
]


const Message = ({ name, content }) => <li><strong>{ name }:</strong> { content }</li>


const MessageList = ({ messages }) => (
    <ul>
        {messages.map((item, index) => <Message name={item.name} content={item.content} key={ index }/>)}
    </ul>
)

//Добавил функцию, которая выводит в консоль массив с сообщениями и рендерит новое на страницу
//Но увы не получилось сделать рендер самой кнопки(
const clickOnButton = () => {
    const newInfo = { name: 'Dmitriy', content: 'Hi, guys!' }

    messages.push(newInfo)
    console.log(messages)
}
clickOnButton();


const mountPoint = document.getElementById("root");
ReactDom.render(<MessageList messages =  { messages } />, mountPoint);