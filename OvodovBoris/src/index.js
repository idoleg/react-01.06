import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

const mountPoint = document.getElementById('root');

const messages = [
    { name: "Ivan", content: "Hi"},
    { name: "Oleg", content: "Nu dopustem"},
    { name: "Ivan", content: "Hmm =)"},
]

const Message = ({ name, content }) => <li><b>{name}</b>:{content}</li>
const MessageLst = ({ messages }) => (
    <ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>
    ) 
ReactDOM.render(<MessageLst messages = { messages} /> ,mountPoint)