import React, { createElement } from "react";
import ReactDom from "react-dom";

const messages = [ 
    { name: "Alex", content: "Hi, my friend" },
    { name: "Oleg", content: "Hello" },
    { name: "Alex", content: "How are u?" },
    { name: "Oleg", content: "Fine, and wbu?" }
]


const Message = ({ name, content }) => <li><strong>{ name }:</strong> { content }</li>


const MessageList = ({ messages }) => (
    <ul>
        {messages.map((item, index) => <Message name={item.name} content={item.content} key={ index }/>)}
    </ul>
)


const mountPoint = document.getElementById("root");
ReactDom.render(<MessageList messages =  { messages } />, mountPoint);