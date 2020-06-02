import React, {createElement} from 'react'
import ReactDom from 'React-dom'

const root = document.getElementById('root')

const messages = [
    {name: 'Ivan' , content: 'Hello'},
    {name: 'Petr' , content: 'Hi'},
    {name: 'Vitalii' , content: 'Hola'},
    {name: 'Oleg' , content: 'Shalom'},

]

const Message = ({name, content}) => <li><strong>{name}</strong> : {content}</li>

const MessageList = ({messages}) => (
    <ul>
        {messages.map((item, index) => <Message {...item} key={index}/> )}
    </ul>
)

ReactDom.render(<MessageList messages={messages}/>, root)