import React, { createElement } from "react";
import ReactDOM from "react-dom";
import { MessageList } from "./components/MessageList/MessageList";

const messages = [
  { name: "Ivan", content: "Hello friend!" },
  { name: "Oleg", content: "Hi!" },
  { name: "Ivan", content: "How are you?" },
  { name: "Oleg", content: "I'm fine." },
];

const mountPoint = document.getElementById("root");
ReactDOM.render(<MessageList messages={messages} />, mountPoint);
