import React from 'react';
import PropTypes from 'prop-types';

import { Message } from '../Message/Message';
import './message-list.css';

export const MessageList = ({ messages }) => (
  <ul className="message-list">
    { messages.map(item => <Message key={item.id} { ...item} />) }
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired
}