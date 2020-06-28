import React from 'react';
import PropTypes from 'prop-types';
import {MessageList} from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm'

export const Chat = ({isLoading, error, messages, onSendMessage}) =>{

   return(
      <main className='chat'>
      {error && <strong>Error {error} occures</strong> }
      {isLoading && <strong>Loading</strong>}
      {!messages && !error && !isLoading && <strong>Broken link</strong>}
      {messages && <MessageList messages={messages}/>}
      {messages && <ChatForm onSendMessage={onSendMessage} />}
   </main>
   )
  
};

Chat.propTypes = {
   // messages: MessageList.propTypes.messages,
   onSendMessage: PropTypes.func.isRequired,
}

