import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import { MessageList } from './components/MessageList/MessageList';
import { App } from './components/App';

const messages = [
    { name: 'Ivan', content: 'Hello, friend!' },
    { name: 'Oleg', content: 'Hi!' },
    { name: 'Ivan', content: 'How are you?' },
    { name: 'Oleg', content: 'I\'m fine' },
]


const mountPoint = document.getElementById('root')
ReactDom.render(<App />, mountPoint)
// ReactDom.render(<MessageList messages={messages} />, mountPoint)