import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';

export class ChatContainer extends Component{
	constructor(props){
		super(props);
	}
	
	render(){		
		return <Chat 	messages = {this.props.state.chats[this.props.chatId].msgArr}				 			 
						author = {this.props.state.chats[this.props.chatId].author}
						onSendMessage = {this.props.onSendMessage}
						addChat = {this.props.addChat}
						chatId = {this.props.chatId}
					/>
		}
}	

