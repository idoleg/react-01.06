import React, { Component } from 'react';
import {Chat} from '../components/Chat/Chat'

export const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {

    state = {
        messages: [
            {
                name: 'Ivan',
                content: 'Hello'
            },
            {
                name: 'Oleg',
                content: 'Hi'
            },
            {
                name: 'Ivan',
                content: 'How are you?'
            },
            {
                name: 'Oleg',
                content: 'I\'m fine'
            },
        ]
    }

    componentDidUpdate() {
        let penultimateMsg = null;
        if (this.state.messages.length > 1) {
            penultimateMsg = this.state.messages[this.state.messages.length - 2];
        }
        let lastMsg = this.state.messages[this.state.messages.length - 1];
       
        if (lastMsg.name !== ROBOT_NAME && lastMsg.name !== penultimateMsg.name) {
            setTimeout(() => {                
                this.handleSendMessage({ name: ROBOT_NAME, content: 'Hello ' + lastMsg.name })
            }, 1000);
        }
    }

    handleSendMessage = (message) => {
        this.setState(state => ({
            messages: [...state.messages, message]
        }));
    }

    render() {
        return <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage}/>;
    }

}