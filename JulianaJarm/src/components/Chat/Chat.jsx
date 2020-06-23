import React from 'react';
import '../../styles/styles.css'
import { MessageForm } from "../MessageForm/MessageForm";
import { MessageList } from "../MessageList/MessageList";

export const Chat = ({ messages, onMessage }) => (
    <div className="chat" id="chat">
        { !messages && <strong>This chat does not exist.</strong> }
        { messages && <MessageList messages={ messages }/> }
        { messages && <MessageForm onMessage={ onMessage } /> }
    </div>
)
