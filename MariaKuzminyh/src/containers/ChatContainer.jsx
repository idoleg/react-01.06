import React, { Component } from 'react';

import { Chat } from '../components/Chat/Chat';

export const ROBOT_NAME = "Робот";

export class ChatContainer extends Component {
  state = {
    chats: {
      1: {
        name: 'Ivan',
        messages: [
          {
            id: 0,
            name: 'Мария',
            content: 'Привет)'
          },
          {
            id: 1,
            name: 'Мария',
            content: 'Как у тебя дела?'
          },
          {
            id: 2,
            name: 'Иван',
            content: 'Привет) На карантине скучно. Хочется погулять'
          },
          {
            id: 3,
            name: 'Иван',
            content: 'Как ты?'
          }
        ],
      },
      2: {
        name: 'Tatyana',
        messages: [
          {
            id: 0,
            name: 'Татьяна',
            content: 'Привет)'
          },
          {
            id: 1,
            name: 'Татьяна',
            content: 'Как у тебя дела?'
          }
        ],
      },
      3: {
        name: 'Lidia',
        messages: [],
      },
    }
  }

  timeoutId = null;

  handleRobotAnswer = () => {
    const { id } = this.props.match.params;

    if (id && this.state.chats[id]) {
      const currentMessages = this.state.chats[id].messages;
      const lastMessage = currentMessages[currentMessages.length - 1];

      if (lastMessage && lastMessage.name !== ROBOT_NAME) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
          name: ROBOT_NAME,
          content: `${lastMessage.name}, я робот`,
        }), 1000);
      }
    }
  };

  handleSendMessage = (id) => (message) => {
    this.setState(state => ({
      ...state, //Деструктуризация стейта
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
    const { id } = this.props.match.params;
    const messages = id && this.state.chats[id] ? this.state.chats[id].messages : null;

    return <Chat messages={ messages } onSendMessage={ this.handleSendMessage(id) } />
  }
}