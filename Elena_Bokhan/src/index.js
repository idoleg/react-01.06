import React from 'react';
import ReactDom from 'react-dom';
import MessageList from './components/MessageList/MessageList.jsx';

const mountPoint = document.getElementById('root');

let msgArr = [{name: "Mike", text: "Hello"},
			  {name: "Helga", text: "Hi"},
			  {name: "Mike", text: "How are you?"},
			  {name: "Helga", text: "Fine, thanks"}
			]


ReactDom.render(<MessageList msgArr = { msgArr } />, mountPoint);
