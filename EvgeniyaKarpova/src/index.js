import React, {createElement} from "react";
import ReactDom from "react-dom";

const messages = [
    {name: 'Лена', content: 'Превет!'},
    {name: 'Оля', content: 'Превет!'},
    {name: 'Лена', content: 'Как дела?'},
    {name: 'Оля', content: 'Хорошо'}
]
const Message = ({name, content}) => <li><strong>{name}:</strong> {content}</li>;
const MessagesList = ({messages}) => (
    <ul>
       {messages.map((item, index) => <Message {...item} key={index}/>)}
    </ul>
); // ...item  =  name={item.name} content={item.content}

const mounPoint = document.getElementById('point');
ReactDom.render(<MessagesList messages={messages}/>, mounPoint)
