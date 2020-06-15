import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat'

export const ROBOT_NAME = "Robot";

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: 'Ivan', content: 'Hello, friend!' },
                    { name: 'Oleg', content: 'Hi!' },
                    { name: 'Ivan', content: 'How are you?' },
                    { name: 'Oleg', content: 'I\'m fine' },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: 'Dima', content: 'It\'s chat 2' },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        }


    }

    timeoutId = null;

    // componentDidUpdate(prevProps, prevState) {
    handleRobotAnswer = () => {
        const { id } = this.props.match.params;

        if (id && this.state.chats[id]) {
            const currentMessages = this.state.chats[id].messages;
            const lastMessage = currentMessages[currentMessages.length - 1];

            // if(prevState.chats[id].messages.length === currentMessages.length) return;

            if (lastMessage && lastMessage.name !== ROBOT_NAME) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
                    name: ROBOT_NAME,
                    content: `Hello ${lastMessage.name}, I'm Robot`,
                }), 1000);
            }

        }


    }

    handleSendMessage = (id) => (message) => {
        this.setState(state => ({
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    messages: [...state.chats[id].messages, message],
                }
            }
        }), this.handleRobotAnswer);
    }

    render() {
        const { id } = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : null;

        return <Chat messages={messages} onSendMessage={this.handleSendMessage(id)} />
    }
}