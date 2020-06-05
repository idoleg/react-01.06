import React from 'react';
import ReactDom from 'react-dom'

const messages = [
    { name: 'Ivan', content: 'Hello, friend!' },
    { name: 'Oleg', content: 'Hi!' },
    { name: 'Ivan', content: 'How are you?' },
    { name: 'Oleg', content: 'I\'m fine' },
]

const Message = ({ name, content }) => <li><strong>{name}:</strong> {content}</li>
const MessageList = ({ messages }) => {
    return (
        <div>
            <ul>
                {messages.map((item, index) => <Message {...item} key={index} />)}
            </ul>
            <Button/>
        </div>
    )
}

const Button = () => {
    return (
        <button onClick={btnClick}>Нажми</button>
    )
}

function btnClick() {
    let send = {
        name: 'Anton',
        content: 'Normal'
    }
    messages.push(send)
    console.log(messages)
}

const mountPoint = document.getElementById('root')
ReactDom.render(<MessageList messages={messages} />, mountPoint)