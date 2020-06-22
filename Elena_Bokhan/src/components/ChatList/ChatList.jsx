import React from 'react';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NewChat from '../NewChat/NewChat';

const ChatList = (props) =>{
debugger
	return  (
		<div className = "chat-list-field" >                                
				{props.chats.map(({id,author},index) => 
				 <div style ={ props.newMsgEffect && props.newMsgEffect==index+1 ? {backgroundColor: "#33CCCC"} : null }>
					<Link to ={"/chats/" + (id)} key = {id}>
						<span key = {id}>{author}</span>
					</Link>
					<Link to ={"/chats/"+ (id) +"/profile/" + (id)} key = {index}>
						<AccountCircleIcon style={{ fontSize: 40 }} key = {id}/>
					</Link>  
				</div> )}
				<NewChat addChat = {props.addChat}/>
		</div>)
}
export default ChatList;