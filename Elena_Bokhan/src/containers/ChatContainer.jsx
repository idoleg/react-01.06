import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';
import { sendMessageActionCreator } from '../store/messagesReducer';
import { connect } from 'react-redux';

class ChatContainer extends Component{
	constructor(props){
		super(props);
	}
	onSendMessage = (id) =>(message) => {
		this.props.onSendMsg(message,id)
		}
	render(){
		let chatId = this.props.match.params.id;	
		return <Chat 	messages = {this.props.messages}				 			 
						author = {this.props.author}
						onSendMessage = {this.onSendMessage(chatId)}
						addChat = {this.props.addChat}
						chatId = {this.props.chatId}
					/>
		}
}	


let mapStateToProps = ({chatReducer}, ownProps) =>{	
	const chatId =  ownProps.match.params.id;	
	return {
		messages: chatReducer.chats[chatId].msgArr,
		author: chatReducer.chats[chatId].author,
		chatId: chatReducer.chatId
	}
	
}
let mapDispatchToProps = (dispatch) =>{
	return {
		onSendMsg: (message,id) => dispatch(sendMessageActionCreator(message,id)),		
		}
}
// const mapDispatchToProps = (dispatch) =>
// 	bindActionCreators({ onSendMsg }, dispatch);
	
// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     const { id } = ownProps.match.params;

//     const onSendMsg = (message) => {
//         dispatchProps.onSendMsg( message,id);
//     }

//     return {
// 		...stateProps,
// 		...dispatchProps,
//         onSendMsg,
//     }
// }
export default ChatContainer = connect(mapStateToProps,mapDispatchToProps)(ChatContainer)


