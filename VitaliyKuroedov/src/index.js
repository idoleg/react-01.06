import React, {createElement} from 'react'
import ReactDom from 'React-dom'

const root = document.getElementById('root')

const messages = [
    {name: 'Ivan' , content: 'Hello'},
    {name: 'Petr' , content: 'Hi'},
    {name: 'Vitalii' , content: 'Hola'},
    {name: 'Oleg' , content: 'Shalom'},
]

const App = () => (
    <MessageList messages={messages}/>
)

const Message = ({name, content}) => <li><strong>{name}</strong> : {content}</li>

const addMessage = () => {
    let nameField = document.getElementById('name')
    let textField = document.getElementById('text')
    messages.push({name: nameField.value, content: textField.value})
    ReactDom.render(<App/>, root)
}

const MessageList = ({messages}) => (
    <div>
        <label>
            <span>Имя</span>
            <input id="name" type="text"></input>
        </label>
        <label>
            <span>Текст</span>
            <input id="text" type="text"></input>
        </label>
        <Button name="Добавить" cb={addMessage}/>

        <ul>
            {messages.map((item, index) => <Message {...item} key={index}/> )}
        </ul>
    </div>
)

const Button = ({name, cb}) =>  <button onClick={cb}>{name}</button>

ReactDom.render(<App/>, root)
