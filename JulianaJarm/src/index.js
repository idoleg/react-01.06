import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import { MessageList } from "./components/MessageList/MessageList";
import { Counter } from "./components/Counter";

const mountPoint = document.getElementById('root');
const messages = [
    {name: "Ivan", content: 'Hello'},
    {name: "Oleg", content: 'Hi'},
    {name: "Ivan", content: 'How are you?'},
    {name: "Oleg", content: 'Good. You?'},
]

// function handleClick() {
//     console.log('works');
//     let newElement = {name: "Ivan", content: "Not good!"};
//     messages.push(newElement);
//     ReactDom.render(<MessageList messages={messages} />, mountPoint);
// }
//ReactDom.render(<MessageList messages={messages} />, mountPoint);
ReactDom.render(<Counter />, mountPoint);


