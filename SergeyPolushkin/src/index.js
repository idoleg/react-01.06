import React, {createElement, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';

function buttonClick() {
    messages.push({ name: 'Я', content: 'Нормально!' });
    ReactDOM.render(<MessageList messages={messages} />, mountPoint);
}

const messages = [
    {
        name: 'Ivan',
        content: 'Hello'
    },
    {
        name: 'Oleg',
        content: 'Hi'
    },
    {
        name: 'Ivan',
        content: 'How are you?'
    },
    {
        name: 'Oleg',
        content: 'I\'m fine'
    },
]

const Message = ({ name, content }) => <li><strong>{name}</strong>: {content}</li>;
const MessageList = ({ messages }) => (
    <div>
    <ul>
        {messages.map((item, index) => <Message {...item} key={index}/>)}
    </ul>
        <button onClick={buttonClick}>Нормально!</button>
    </div>
)


const mountPoint = document.getElementById('root');
ReactDOM.render(<MessageList messages={messages}/>, mountPoint);