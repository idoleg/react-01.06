import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT_NAME = "Robot";
export class ChatContainer extends Component {
    state = {
                messages: [
                        {name: 'Лена', content: 'Превет!'},
                        {name: 'Оля', content: 'Превет!'},
                        {name: 'Лена', content: 'Как дела?'},
                        {name: 'Оля', content: 'Хорошо'}
                    ]
            }

     timeoutId = null;        

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if (lastMessage.name !== ROBOT_NAME) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => this.handleSendMessage({
                name: ROBOT_NAME,
                content: `Привет ${lastMessage.name}, я Робот`,
            }), 1000);
        }
    }         

    handleSendMessage = (message) => {
        this.setState(state => ({
            messages: [...state.messages, message],
        }))
    }

    render() {
        return <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage}/>
    }
}