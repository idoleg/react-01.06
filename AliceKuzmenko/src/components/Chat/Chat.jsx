import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import { NoChatForm } from '../NoChatForm/NoChatForm';
import PropTypes from 'prop-types';
import './Chat.css'

export const Chat = ({ messages, onSendMessage, onNewChat }) => (
    <>

        {!messages && <NoChatForm/> }
        {messages && messages.length === 0 && <strong className="no-msgs">Say 'HI!'</strong>}
        {messages && <MessageList messages={messages} />}
        {messages && <ChatForm onSendMessage={onSendMessage} />}
    </>
);

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Object)),
    //onNewChat: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired,
    
}


{/* <NewChatForm onNewChatCreate={onNewChatDo}/> */}
//onNewChatCreate={onNewChatDo}