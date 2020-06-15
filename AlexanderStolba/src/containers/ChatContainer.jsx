import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat'

export const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: "Chat 1",
                messages: [
                    { name: 'Alex', content: 'Hello!' },
                    { name: 'Ivan', content: 'Hi!' },
                    { name: 'Alex', content: 'How are you?' },
                    { name: 'Ivan', content: 'Fine, and wbu?' },
                ]
            },

            2: {
                name: "Chat 2",
                messages: [
                    { name: 'Dima', content: 'Hello!' },
                    { name: 'Oleg', content: 'Hi!' },
                    { name: 'Dima', content: 'What is the weather like?' },
                    { name: 'Oleg', content: 'Wonderful!' },
                ]
            },

            3: {
                name: "Chat 3",
                messages: [
                    
                ]
            },

            4: {
                name: "Chat 4",
                messages: [
                    { name: 'Messenger Bot', content: 'It is chat 4' },
                ]
            }
        }
    }

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

    handleSendMessage = (id) => (messages) => {
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
        return <Chat messages={ messages } onSendMessage={ this.handleSendMessage(id) } />
    }
}