import React, { Component } from 'react';
import ChatContainer from './containers/ChatContainer.jsx';
import Header from './components/Header/Header.jsx';
import { Switch, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import { initStore } from './store/index.js';
import { Provider } from 'react-redux';
import ChatListContainer from './containers/ChatListContainer.jsx';


const store = initStore();

class App extends Component{
	
	render(){		
		return (
			<Provider store = {store}>
				<Header />
				<div className = "field">
					<ChatListContainer/>
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