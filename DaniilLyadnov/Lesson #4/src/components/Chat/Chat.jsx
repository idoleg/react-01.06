import './Chat.css'
import React from "react";
import PropTypes from 'prop-types';
import {MessageList} from "../MessageList/MessageList";
import {ChatForm} from "../ChatForm/ChatForm";
import {ChatList} from "../ChatList/ChatList";
import {Header} from "../Header/Header";

export const Chat = ({chats, messages, onSendMessage}) => (
    <main>
        <Header/>

        <ChatList chats={chats}/>

        <section className="chat-app">
            {!messages && <h2 className={'chats-error'}>Chats not found!</h2>}
            {messages && <MessageList messages={messages}/>}
            {messages && <ChatForm onSendMessage={onSendMessage}/>}
        </section>
    </main>
);

Chat.propTypes = {
    messages: MessageList.propTypes.messages,
    onSendMessage: PropTypes.func.isRequired,
};