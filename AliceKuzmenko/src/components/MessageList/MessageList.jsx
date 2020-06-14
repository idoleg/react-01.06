import React from 'react';
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';

import './MessageList.css'

export const MessageList = ({ messages }) => (
    <ul className="message-list">
        {messages.map((item) => <Message {...item} key={item.id} />)}
    </ul>
);
MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}