import React, { createElement } from "react";
import ReactDom from "react-dom";
import { MessageField } from "./components/MessageField/MessageField";

//const messages = [
//    { name: 'Ivan' },
//    { name: 'Oleg' },
//   { name: 'Ivan' }, 
//    { name: 'Oleg' },
//]

const mountPoint = document.getElementById("root");
ReactDom.render(<MessageField />, mountPoint);