import React from 'react';
import propTypes from 'prop-types';
import MessageList from '../MessageList/MessageList';
import ChatForm from '../ChatForm/ChatForm';
import ChatList from '../ChatList/ChatList';
import Header from '../Header/Header';

const Chat = (props) => {
	return (
			<div className = "field">
				<Header />
				<ChatList  chats={props.chats} />
				<div style = {{width: "70%",position: "relative"}}>
					<MessageList messages={props.messages}/>
					<ChatForm onSendMsg = {props.onSendMessage} addChat ={props.addChat}/>
				</div>				
			</div>	
		)
}

export default Chat;