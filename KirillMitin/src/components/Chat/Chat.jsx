import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';

import './Chat.css'

export const Chat = ({ messages, onSendMessage }) => (
    <main>
        <MessageList messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />
    </main>
);

Chat.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}