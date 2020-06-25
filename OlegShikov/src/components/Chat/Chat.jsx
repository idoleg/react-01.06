import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';

export const Chat = ({ isLoading, error, messages, onSendMessage }) => {
    if (error) {
        return (<main><strong>Упс! Произошла ошибка {error}.</strong></main>)
    }
    if (isLoading) {
        return (<main><strong>Подождоите, чаты грузятся.</strong></main>)
    }
    return (
        <main>
            {!messages && <strong>Такого чата не существует</strong>}
            {messages && <MessageList messages={messages} />}
            {messages && <ChatForm onSendMessage={onSendMessage} />}
        </main>
    )
};

Chat.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    // messages: MessageList.propTypes.messages,
    onSendMessage: PropTypes.func.isRequired,
}