import React from 'react';
import propTypes from 'prop-types';
import MessageList from '../MessageList/MessageList';
import ChatForm from '../ChatForm/ChatForm';

const Chat = (props) => {
	return (
				<div style = {{width: "70%", height: "100%",position: "relative"}}>
					<MessageList messages={props.messages}/>
					<ChatForm 	onSendMsg = {props.onSendMsg}								
								author = {props.author}
								addChat ={props.addChat}
								chatId = {props.chatId}/>
				</div>	
		)
}

export default Chat;