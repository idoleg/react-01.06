import React from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from './ChatForm/ChatForm';
import PropTypes from 'prop-types';
import './Chat.css'

export const Chat = ({ isLoading, messages, onSendMessage }) => {
    if(isLoading) {
        return (
        <h1 className="loading-tittle">Your chats are loading now. Please, wait a bit</h1>
        )
    }

    return (
    <main>
        {!messages && <strong>This chat doesn't exist</strong>}
        {messages && <MessageField messages={messages} />}
        {messages && <ChatForm onSendMessage={onSendMessage} />}
    </main>
    )
};

Chat.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}
