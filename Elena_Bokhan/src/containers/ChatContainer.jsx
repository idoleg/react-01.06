import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';

export class ChatContainer extends Component{
	state = {	
		msgArr: [{name: "Mask", text: "Hello"},
				{name: "Bot", text: "Hi"},
				{name: "Mask", text: "How are U?"},
				{name: "Bot", text: "Fine, thanks"},
				],
		chatArr: ["Mask", "Durov", "Gates"],		
	}
	componentDidUpdate(){
		if(this.state.msgArr[this.state.msgArr.length-1].name !="Bot"){

		setTimeout(()=>{
			if(this.state.msgArr[this.state.msgArr.length-1].name !="Bot"){
			this.setState({msgArr: [...this.state.msgArr, {name: "Bot", text: "Can I help u?"}]})
			}		
		},3000)
		}
	}
	handleSendMessage = (message) =>{
		this.setState (state => ({
			msgArr: [...state.msgArr, message]
		}))
	}
	handleAddChat = (person) =>{		
		this.setState (state => {state.chatArr.push(person.name)})
	}
	render(){
	return <Chat messages = {this.state.msgArr}
				 currentChat= {this.state.currentChat} 
				 chats = {this.state.chatArr} 
				 onSendMessage = {this.handleSendMessage}
				 addChat = {this.handleAddChat}/>
	}
}	

