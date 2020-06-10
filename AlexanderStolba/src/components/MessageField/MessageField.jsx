import './MessageField.css';
import React from 'react';
import { Message } from './Message/Message';
import PropTypes from 'prop-types';

export const MessageField = ({ messages }) => (
    <ul className='message-list'>
        {messages.map((item, index) => <Message { ...item } key={ index } />)}
    </ul>
);
MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}