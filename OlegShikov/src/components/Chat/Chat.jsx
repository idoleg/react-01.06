import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';

export const Chat = ({ messages, onSendMessage }) => (
    <main>
        {!messages && <strong>Такого чата не существует</strong>}
        {messages && <MessageList messages={messages} />}
        {messages && <ChatForm onSendMessage={onSendMessage} />}
    </main>
);

Chat.propTypes = {
    // messages: MessageList.propTypes.messages,
    onSendMessage: PropTypes.func.isRequired,
}