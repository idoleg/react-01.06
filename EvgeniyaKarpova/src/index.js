import React, {createElement} from "react";
import ReactDom from "react-dom";
import MessagesList from "./components/MessagesList/MessagesList";

const messages = [];
// const messages = [
//     {name: 'Лена', content: 'Превет!'},
//     {name: 'Оля', content: 'Превет!'},
//     {name: 'Лена', content: 'Как дела?'},
//     {name: 'Оля', content: 'Хорошо'}
// ]

const mounPoint = document.getElementById('point');
ReactDom.render(<MessagesList messages={messages}/>, mounPoint)
