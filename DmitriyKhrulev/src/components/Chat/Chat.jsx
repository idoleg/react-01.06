import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {MessageList} from '../MessageList/MessageList';
import { Message } from '../Message/Message';
import { ChatForm } from '../ChatForm/ChatForm'

export const Chat = ({messages, onSendMessage}) =>(
   <main className='chat'>
      {!messages && <strong>Broken link</strong>}
      {messages && <MessageList messages={messages}/>}
      {messages && <ChatForm onSendMessage={onSendMessage} />}
   </main>
);

Chat.propTypes = {
   // messages: MessageList.propTypes.messages,
   onSendMessage: PropTypes.func.isRequired,
}
