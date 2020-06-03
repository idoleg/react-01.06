import React, { createElement } from "react";
import ReactDom from "react-dom";

const messages = [
  { name: "Ivan", content: "Hello friend!" },
  { name: "Oleg", content: "Hi!" },
  { name: "Ivan", content: "How are you?" },
  { name: "Oleg", content: "I'm fine" },
];

const Message = ({ name, content }) => (
  <li>
    <strong>{name}</strong>: {content}
  </li>
);

const MessageList = ({ messages }) => (
  <ul>
    {messages.map((item, index) => (
      <Message {...item} key={index} />
    ))}
  </ul>
);

const mountPoint = document.getElementById("root");
ReactDom.render(<MessageList messages={messages} />, mountPoint);

// function Link(props) {
//   return <a href={"//" + props.url}>Link to {props.url}</a>;
// }
// const linkElement = <a href="//ya.ru">Link to yandex</a>;
// createElement("a", { href: "//ya.ru" }, "Link to yandex");
// const mountPoint = document.getElementById("root");
// ReactDom.render(<Link url="yandex.ru" />, mountPoint);
