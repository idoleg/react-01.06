import React from 'react';
import '../../styles/styles.css'
import { MessageForm } from "../MessageForm/MessageForm";
import { MessageList } from "../MessageList/MessageList";

export const Chat = ({ isLoading, messages, onMessage, onDeleteMessage }) => {
    if (isLoading) {
        return (<main><strong>Подождите, чаты грузятся.</strong></main>)
    }
    return (
        <div className="chat" id="chat">
            { !messages && <strong>This chat does not exist.</strong> }
            { messages && <MessageList messages={ messages } deleteMessage={onDeleteMessage}/> }
            { messages && <MessageForm onMessage={ onMessage } /> }
        </div>
    )
}
