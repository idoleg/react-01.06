import './MessageList.css';

import React from 'react';
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';

export const MessageList = ({ messages }) => (
    <ul className="message-list">
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>
);

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}