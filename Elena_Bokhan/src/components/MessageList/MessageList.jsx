
import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

class MessageList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className = "messages-list-field">
					{this.props.messages.map(elem => <Message name = {elem.name} text = {elem.text}/>)}
				</div>	
	}		
}
export default MessageList;