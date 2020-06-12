import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import SendButton from './components/SendButton'

// const messages = [
//    { name: 'Ivan', content: "Hello" },
//    { name: 'Dima', content: "YO!" },
//    { name: 'OL', content: "Whats up?" },
//    { name: 'Oleg', content: "How are you?" }
// ]


// const Message = ({ name, content }) => <li><strong>{name}:</strong> {content}</li>
// const MessageList = ({ message }) => (
//    <ul>
//       {messages.map((item, index) => <Message {... item} key={index} />)}
//    </ul>
// )

const mountPoint = document.getElementById('root');
ReactDom.render(<SendButton />, mountPoint);