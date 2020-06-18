import React, { Component } from 'react';
import ChatContainer from './containers/ChatContainer.jsx';
import Header from './components/Header/Header.jsx';
import { Switch, Route} from 'react-router-dom';
import ChatList from './components/ChatList/ChatList.jsx';
import Profile from './components/Profile/Profile.jsx';
import { initStore } from './store/index.js';
import { Provider } from 'react-redux';
import AddChatContainer from './components/ChatList/ChatListContainer.jsx';

const store = initStore();

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
			<Provider store = {store}>
				<Header />
				<div className = "field">
					<AddChatContainer />
					<Route>
						<Switch>
							<Route 	path ="/chats/:id/profile/:id" exact 
									render = {profile => <Profile profileId = {Number(profile.match.params.id)}/>} />
							<Route 	path ="/chats/:id" exact component = {ChatContainer}/>				
						</Switch>
					</Route>
				</div>
			</Provider>
		)		
	}
}

export default App