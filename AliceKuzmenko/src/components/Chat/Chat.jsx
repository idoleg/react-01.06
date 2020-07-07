import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import { NoChatForm } from '../NoChatForm/NoChatForm';
import PropTypes from 'prop-types';
import './Chat.css'

export const Chat = ({ isLoading, messages, onSendMessage, onNewChat }) => {
    if (isLoading){
        return (<main>

            <strong className="no-msgs">Loading...</strong>
        </main>)
    }
    return (<main>

        {!messages && <NoChatForm/> }
        {messages && messages.length === 0 && <strong className="no-msgs">Say 'HI!'</strong>}
        {messages && <MessageList messages={messages} />}
        {messages && <ChatForm onSendMessage={onSendMessage} />}
    </main>)
};

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Object)),
    //onNewChat: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired, 
}


{/* <NewChatForm onNewChatCreate={onNewChatDo}/> */}
//onNewChatCreate={onNewChatDo}