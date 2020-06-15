import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import { NewChatForm } from '../NewChatForm/NewChatForm';
import PropTypes from 'prop-types';
import './Chat.css'

export const Chat = ({ messages, onSendMessage }) => (
    <>

        {!messages && 
        <>
            <strong className="no-chat">Chat does not exist</strong>
            {/* <NewChatForm onNewChat={onNewChat}/> */}
        </>}
        {messages && messages.length === 0 && <strong className="no-msgs">Say 'HI!'</strong>}
        {messages && <MessageList messages={messages} />}
        {messages && <ChatForm onSendMessage={onSendMessage} />}
    </>
);

Chat.propTypes = {
    messages: MessageList.propTypes,
    onSendMessage: PropTypes.func.isRequired,
    onNewChat: PropTypes.func.isRequired,
}