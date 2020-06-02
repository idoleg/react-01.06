import React, { createElement } from "react";
//import "./App.css";

// ------ //

const messages = [
    { name: "Ivan", content: "Hello, friend!" },
    { name: "Oleg", content: "Hi!" },
    { name: "Ivan", content: "How are you?" },
    { name: "Oleg", content: "I'm fine" },
];

// ------ //

function App() {
    return (
        <div className="App">
            <MessageList messages={messages} />
        </div>
    );
}

const Message = ({ name, content }) => (
  <li>
      <strong>{name}:</strong> {content}
  </li>
);
const MessageList = ({ messages }) => (
  <ul>
      {messages.map((item, index) => (
          <Message {...item} key={index} />
      ))}
  </ul>
);

// ------ //

export default App;
