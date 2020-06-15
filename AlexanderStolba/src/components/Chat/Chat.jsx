import React from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from './ChatForm/ChatForm';
import PropTypes from 'prop-types';

export const Chat = ({ messages, onSendMessage }) => (
    <main>
        <MessageField messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />
    </main>
);

Chat.propTypes = {
    messages: MessageField.propTypes.messages,
    onSendMessage: PropTypes.func.isRequired,
}
