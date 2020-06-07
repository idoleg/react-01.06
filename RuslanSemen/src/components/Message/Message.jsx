import React, { createElement } from "react";
import ReactDOM from "react-dom";

export const Message = ({ name, content }) => (
  <li>
    <strong>{name}</strong>: {content}
  </li>
);
