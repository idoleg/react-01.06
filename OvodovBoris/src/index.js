import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { MessageList } from './components/MessageList/MessageList';
import { MessageField } from '../MessageField/MessageField';
import { App } from './components/App';

const mountPoint = document.getElementById('root');

const messages = [
    { name: "Ivan", content: "Hi"},
    { name: "Oleg", content: "Nu dopustem"},
    { name: "Ivan", content: "Hmm =)"},
]

const itog = {
    MessageList (messages)
        <MessageField />
}


ReactDOM.render(<itog />, mountPoint)
//eactDOM.render(<App />, mountPoint)
