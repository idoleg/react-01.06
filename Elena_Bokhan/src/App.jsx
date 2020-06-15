import React, { Component } from 'react';
import { ChatContainer } from './containers/ChatContainer.jsx';
import Header from './components/Header/Header.jsx';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import ChatList from './components/ChatList/ChatList.jsx';
import Profile from './components/Profile/Profile.jsx';

class App extends Component{
	state = {
		chats:{
			1:{
			author: "Mask",
			msgArr: [{name: "Mask", text: "Hello"},
					{name: "Bot", text: "Hi"},
					{name: "Mask", text: "How are U?"},
					{name: "Bot", text: "Fine, thanks"},
					],
			},
			2:{
				author: "Durov",
				msgArr: [{name: "Durov", text: "Hello, i had created VK"},
						{name: "Bot", text: "It's awesome"},
						{name: "Durov", text: "Yeaa"},					
						],
			},
			3:{
				author: "Gates",
				msgArr: [{name: "Gates", text: "I'm smartest man in the world"},
						{name: "Bot", text: "Everybody know it"},
						],
			},		
		},		
				
		chatArr: ["Mask", "Durov", "Gates"],
		currentChat: null,	
	}
	timeoutId = null;
	handleSendMessage = (message,chatId) =>{		
		this.setState (state => ({
			...state,
			chats:{...state.chats,
			[chatId]:{...state.chats[chatId],
			msgArr: [...state.chats[chatId].msgArr,message]}},
			currentChat: chatId		
		}			
		),this.robotSendMessage)		
	}
	robotSendMessage(){	
		
		const chatId = this.state.currentChat;
		if(this.state.chats[chatId].msgArr[this.state.chats[chatId].msgArr.length-1].name !="Bot"){
		clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(()=>this.handleSendMessage({name: "Bot", text: "Can I help u?"},chatId)
		,2000)
			}
	}
	handleAddChat = (person) =>{
		debugger
		
		this.setState (state =>({
			...state,
			chats:{...state.chats, 
				[state.chatArr.length+1]:{author:person, msgArr: []}},
			chatArr: [...state.chatArr,person]
		}))
	}
	render(){		
		return (
			<>
				<Header />				
				<div className = "field">
					<ChatList 	chats={this.state.chatArr}
								addChat = {this.handleAddChat.bind(this)} />
					<Route>
						<Switch>
							<Route 	path ="/main" exact render = {() => <div style = {{margin:"auto", fontSize:"24px", color:"rgb(17, 136, 136)" }}>Тут будет главная страница :)</div>} />									
							<Route 	path ="/chats/profile/:id" exact 
									render = {profile => <Profile profileId = {Number(profile.match.params.id)}/>} />
							<Route 	path ="/chats/:id" exact 
									render = {chat=> <ChatContainer chatId = {Number(chat.match.params.id)}
																	state = {this.state}
																	onSendMessage = {this.handleSendMessage.bind(this)}
																	addChat = {this.handleAddChat.bind(this)}
																	/>}/>				
						</Switch>
					</Route>
				</div>
			</>
		)		
	}
}

export default App