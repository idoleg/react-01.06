import './Chat.css'
import React from "react";
import PropTypes from 'prop-types';
import {MessageList} from "../MessageList/MessageList";
import {ChatForm} from "../ChatForm/ChatForm";

export const Chat = ({messages, onSendMessage}) => (
    <main>
        {!messages && <strong>Chats not found!</strong>}
        {messages && <MessageList messages={messages}/>}
        {messages && <ChatForm onSendMessage={onSendMessage}/>}
    </main>
);

Chat.propTypes = {
    messages: MessageList.propTypes.messages,
    onSendMessage: PropTypes.func.isRequired,
};