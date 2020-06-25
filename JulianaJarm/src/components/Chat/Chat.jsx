import React from 'react';
import '../../styles/styles.css'
import { MessageForm } from "../MessageForm/MessageForm";
import { MessageList } from "../MessageList/MessageList";

export const Chat = ({ messages, onMessage, onDeleteMessage }) => (
    <div className="chat" id="chat">
        { !messages && <strong>This chat does not exist.</strong> }
        { messages && <MessageList messages={ messages } deleteMessage={onDeleteMessage}/> }
        { messages && <MessageForm onMessage={ onMessage } /> }
    </div>
)
