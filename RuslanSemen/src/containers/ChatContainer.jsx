import React, { Component } from "react";
import { Chat } from "../components/Chat/Chat";

export const ROBOT_NAME = "Robot";

export class ChatContainer extends Component {
  state = {
    messages: [
      { name: "Ivan", content: "Hello, friend!" },
      { name: "Ruslan", content: "Hi!" },
      { name: "Ivan", content: "How are you?" },
      { name: "Ruslan", content: "I'm fine" },
    ],
  };

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];

    if (lastMessage.name !== ROBOT_NAME) {
      setTimeout(
        () =>
          this.handleSendMessage({
            name: ROBOT_NAME,
            content: `${lastMessage.name}, не приставай ко мне, я робот!`,
          }),
        1000
      );
    }
  }

  handleSendMessage = (message) => {
    this.setState((state) => ({
      messages: [...state.messages, message],
    }));
  };

  render() {
    return (
      <Chat
        messages={this.state.messages}
        onSendMessage={this.handleSendMessage}
      />
    );
  }
}
