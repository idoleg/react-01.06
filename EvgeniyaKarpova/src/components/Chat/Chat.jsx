import './Chat.css'

import React from 'react';
import {MessagesList} from '../MessagesList/MessagesList';
import {ChatForm} from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';
import {ChatList} from '../ChatList/ChatList';

export const Chat = ({messages, onSendMessage}) => (
    <main>
        <div className="chatBlok">
            <ChatList/>
            <MessagesList messages={messages} />
        </div> 
        <ChatForm onSendMessage={onSendMessage} />
    </main>
);

Chat.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}

