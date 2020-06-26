import React from 'react';
import '../../styles/styles.css'
import { MessageForm } from "../MessageForm/MessageForm";
import { MessageList } from "../MessageList/MessageList";
import PropTypes from 'prop-types';

export const Chat = ({ isLoading, error, messages, onMessage, onDeleteMessage }) => {
    if (error) {
        return (<main><strong>Oops! There has been a mistake!</strong></main>)
    }
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

Chat.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    onMessage: PropTypes.func.isRequired,
}