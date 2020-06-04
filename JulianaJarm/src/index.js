import React, {createElement} from 'react';
import ReactDom from 'react-dom';
const mountPoint = document.getElementById('root');
const messages = [
    {name: "Ivan", content: 'Hello'},
    {name: "Oleg", content: 'Hi'},
    {name: "Ivan", content: 'How are you?'},
    {name: "Oleg", content: 'Good. You?'},
]
const Message = ({ name, content }) => <li><strong>{name}:</strong> {content}</li>;
const MessageList = ({ messages }) => (
    <ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
        <button id="button" onClick={handleClick}>Push Me!</button>
    </ul>
);

function handleClick() {
    console.log('works');
    let newElement = {name: "Ivan", content: "Not good!"};
    messages.push(newElement);
    ReactDom.render(<MessageList messages={messages} />, mountPoint);
}
ReactDom.render(<MessageList messages={messages} />, mountPoint);


