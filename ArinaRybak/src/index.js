import React, { createElement } from 'react';
import ReactDom from 'react-dom';

const messages = [
    { name: 'Ivan', content: 'Hello, friend!' },
    { name: 'Oleg', content: 'Hi!' },
    { name: 'Ivan', content: 'How are you?' },
    { name: 'Oleg', content: 'I\'m fine' },
]

const Message = ({ name, content }) => <li><strong>{name}:</strong> {content}</li>

const Button = ()=>{
    return(
        <button onClick={BtnClick}>PUSH ME</button>
    )
}

function BtnClick(){
    let addMess = {
        name: 'Ivan',
        content: 'Glad to hear u man'
    }
    messages.push(addMess)
    console.log(messages)
    //В массив сообщение после нажатия добавляется, но так как мы не обновили стейт - не отображается.
    //Нужно немного переписать код и задать componentDidUpdate, но не в моих правилах бежать впереди паровоза :)
}

const MessageList = ({ messages }) => (
    <ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
        <Button />
    </ul>
)

const mountPoint = document.getElementById('root')
ReactDom.render(<MessageList messages={messages} />, mountPoint)
