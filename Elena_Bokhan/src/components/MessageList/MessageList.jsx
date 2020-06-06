
import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

class MessageList extends Component{
	constructor(props){
		super(props);

			this.state = {
					text: "",
					msgArr:[{name: "Mask", text: "Hello"},
							{name: "Bot", text: "Hi"},
							{name: "Mask", text: "How are U?"},
							{name: "Bot", text: "Fine, thanks"}]
						}
	}

	handleClick = () => {
		const newState ={...this.state, 
						msgArr: [...this.state.msgArr, {name: "Mask", text: this.state.text}],
						text: ""};
		this.state.text ? this.setState(newState) : null;	
	} 
	
	handleChange = (evt) =>{

		let text = evt.target.value;
		this.setState({text: text})

	}
	componentDidUpdate(){

		if( this.state.msgArr[this.state.msgArr.length-1].name !="Bot" ){
		setTimeout(()=>{
			if( this.state.msgArr[this.state.msgArr.length-1].name !="Bot" ){
			this.setState({ msgArr: [...this.state.msgArr, {name: "Bot", text: "Can I help u?" }]})
			}		
			},3000)
		}		
	}
	render(){
		return  <div className = "field">
					<header>I'm Messenger</header>
					<div className = "field-items">
						{this.state.msgArr.map(elem => <Message name = {elem.name} text = {elem.text}/>)}
					</div>
					<div className ="textmap">
						<textarea 
							onChange = {this.handleChange} 
							value = {this.state.text}
							placeholder = "Text a message">
						</textarea>
						<button onClick = { this.handleClick }>SEND</button>
					</div>		
				</div>
	}
		
}
export default MessageList;