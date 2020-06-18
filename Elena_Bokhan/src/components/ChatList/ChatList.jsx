import React from 'react';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NewChat from '../NewChat/NewChat';

const ChatList = (props) =>{

	return  (
		<div className = "chat-list-field" >                                
				{props.chatArr.map((item,index) => <>
					<Link to ={"/chats/" + (index+1)} key = {index}>
							<span>{item}</span>
							<Link to ={"/chats/"+ (index+1) +"/profile/" + (index+1)} key = {index}>
									<AccountCircleIcon style={{ fontSize: 40 }} />
							</Link>                               
					</Link>
					
				</> )}
				<NewChat addChat = {props.addChat}/>
		</div>)
}
export default ChatList