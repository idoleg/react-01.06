import React from 'react';
import PropTypes from 'prop-types';

import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';

import './chat.css';

export const Chat = ({ messages, lastId, setLastId, onSendMessage }) => {
  
  return (
    <div className="chat">
      <MessageList messages={ messages } />
      <ChatForm messages={ messages }
        onSendMessage={ onSendMessage } />
    </div>
  );
};

Chat.propTypes = {
  messages: MessageList.propTypes.messages,
  onSendMessage: PropTypes.func.isRequired
}