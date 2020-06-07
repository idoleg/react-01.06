import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField';

/*let messages = [
    { 
        name: 'Tanya',
        content: 'How are you?'
    },
    { 
        name: 'Vlad',
        content: 'Hi, friend!'
    },
    { 
        name: 'Julia',
        content: 'Hello'
    },
]


const MessageComponent = ({ name, content }) => <li><strong>{name}:</strong> {content}</li>
const MessageList = ({ messages }) =>{
    return(
        <div>
            <ul>
            {messages.map((item, index)=><MessageComponent {...item} key={index} />)}
            </ul>
            <Button />
        </div>  
    )
}

const Button = ()=>{
    return(
        <button onClick = {ButtonClick}>Send</button>
    )
}

function ButtonClick(){
    let mes = { 
        name: 'Julia',
        content: 'Ok'
    }
    messages.push(mes)
    console.log(messages)
    ReactDOM.render(<MessageList messages={messages} />, mountPoint)
}*/

const mountPoint = document.getElementById('app')
ReactDOM.render(<App />, mountPoint)