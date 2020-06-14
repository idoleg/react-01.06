import React from 'react';
import PropTypes from 'prop-types';

import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';

import './chat.css';

export const Chat = ({ messages, onSendMessage }) => {
  
  return (
    <div className="chat">
      { !messages && <strong>Чат не существует</strong> }
      { messages && <MessageList messages={ messages } /> }
      { messages && <ChatForm onSendMessage={ onSendMessage } /> }
    </div>
  );
};

Chat.propTypes = {
  messages: MessageList.propTypes.messages,
  onSendMessage: PropTypes.func.isRequired
}