import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat'

export const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {
    state = {
        messages: [
            { name: 'Alex', content: 'Hello!' },
            { name: 'Ivan', content: 'Hi!' },
            { name: 'Alex', content: 'How are you?' },
            { name: 'Ivan', content: 'Fine, and wbu?' },
        ]
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if (lastMessage.name !== ROBOT_NAME) {
            setTimeout(() => this.handleSendMessage({
                name: ROBOT_NAME,
                content: `Hello ${lastMessage.name}, I'm Robot`,
            }), 1000);
        }
    }

    handleSendMessage = (message) => {
        this.setState(state => ({
            messages: [...state.messages, message],
        }));
    }

    render() {
        return <Chat messages={ this.state.messages } onSendMessage={ this.handleSendMessage } />
    }
}