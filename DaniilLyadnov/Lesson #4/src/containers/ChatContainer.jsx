import React, {Component} from "react";
import {Chat} from "../components/Chat/Chat";

export const ROBOT_ROLE = 'robot';

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {role: 'user', name: 'Ivan', content: 'Hello, friend!'},
                    {role: 'user', name: 'Oleg', content: 'Hi!'},
                    {role: 'user', name: 'Ivan', content: 'How are you?'},
                    {role: 'user', name: 'Oleg', content: 'I\'m fine'},
                ],
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {role: 'user', name: 'Ivan', content: 'Hello, friend!'},
                ],
            },
            3: {
                name: 'Chat 3',
                messages: [],
            }
        },
    };

    timeoutId = null;

    handleRobotAnswer = () => {
        const {id} = this.props.match.params;

        if (id && this.state.chats[id]) {
            const currentMessages = this.state.chats[id].messages;
            const lastMessage = currentMessages[currentMessages.length - 1];

            if (lastMessage && lastMessage.role !== ROBOT_ROLE) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
                    role: 'robot',
                    name: 'robot',
                    content: `Hello ${lastMessage.name}, I'm Robot`,
                }), 1000);
            }
        }
    };

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
    };

    render() {
        const {id} = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : null;

        return <Chat chats={this.state.chats} messages={messages} onSendMessage={this.handleSendMessage(id)}/>
    }
}