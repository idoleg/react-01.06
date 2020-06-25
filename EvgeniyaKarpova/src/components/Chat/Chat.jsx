import './Chat.css'

import React from 'react';
import {MessagesList} from '../MessagesList/MessagesList';
import {ChatForm} from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';
import ChatListConteiner from '../../containers/ChatListConteiner';
import {Header} from '../Header/Header';

export const Chat = ({messages, onSendMessage, charId}) => (
   
    <main>
        <Header charId={charId}/>  
        <div className="chatBlok">
            <ChatListConteiner />
            {!messages && <strong className="chatNet">Такого чата нет!</strong>}
            {messages && <MessagesList messages={messages} />}
        </div>
       {messages && <ChatForm onSendMessage={onSendMessage} />}
    </main> 
);

Chat.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}