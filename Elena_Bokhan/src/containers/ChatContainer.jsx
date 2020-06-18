import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';
import { sendMessageActionCreator } from '../store/messagesReducer';
import { connect } from 'react-redux';

// export class ChatContainer extends Component{
// 	constructor(props){
// 		super(props);
// 	}
	
// 	render(){		
// 		return <Chat 	messages = {this.props.state.chats[this.props.chatId].msgArr}				 			 
// 						author = {this.props.state.chats[this.props.chatId].author}
// 						onSendMessage = {this.props.onSendMessage}
// 						addChat = {this.props.addChat}
// 						chatId = {this.props.chatId}
// 					/>
// 		}
// }	


let mapStateToProps = ({messagesReducer}, ownProps) =>{
	debugger
	const chatId =  ownProps.match.params.id;	
	return {
		messages: messagesReducer.state.chats[chatId].msgArr,
		author: messagesReducer.state.chats[chatId].author,
		chatId: messagesReducer.chatId
	}
	
}
let mapDispatchToProps = (dispatch) =>{
	return {
		onSendMsg: (message,id) => dispatch(sendMessageActionCreator(message,id)),		
		}
}
// const mapDispatchToProps = (dispatch) =>
// 	bindActionCreators({ onSendMsg }, dispatch);
	
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;

    const onSendMsg = (message) => {
        dispatchProps.onSendMsg( message,id);
    }

    return {
		...stateProps,
		...dispatchProps,
        onSendMsg,
    }
}
const ChatContainer = connect(mapStateToProps,mapDispatchToProps, mergeProps)(Chat)

export default ChatContainer

