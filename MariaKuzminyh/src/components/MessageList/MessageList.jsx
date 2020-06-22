import React from 'react';
import PropTypes from 'prop-types';

import { Message } from '../Message/Message';
import './message-list.css';

export const MessageList = ({ messages }) => (
  <ul className="message-list">
    { messages.length == 0 && <strong>Здесь ещё нет сообщений.<br/>Введите первое.</strong> }
    { messages.map((item, index) => <Message key={ index } { ...item} />) }
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired
}