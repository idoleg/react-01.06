import React, { createElement } from "react";
import { Message } from "../Message/Message";

export const MessageList = ({ messages }) => (
  <ul>
    {messages.map((item, index) => (
      <Message {...item} key={index} />
    ))}
  </ul>
);
