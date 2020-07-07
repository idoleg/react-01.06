import React from 'react';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NewChat from '../NewChat/NewChat';

const ChatList = (props) =>{
return  (<>
	{props.isLoading ? 	<div className = "preload" >
							<svg  width="64px" height="64px" viewBox="0 0 128 128" ><g><path d="M59.6 0h8v40h-8V0z" fill="#000000" fill-opacity="1"/><path d="M59.6 0h8v40h-8V0z" fill="#cccccc" fill-opacity="0.2" transform="rotate(30 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#cccccc" fill-opacity="0.2" transform="rotate(60 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#cccccc" fill-opacity="0.2" transform="rotate(90 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#cccccc" fill-opacity="0.2" transform="rotate(120 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#b2b2b2" fill-opacity="0.3" transform="rotate(150 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#999999" fill-opacity="0.4" transform="rotate(180 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#7f7f7f" fill-opacity="0.5" transform="rotate(210 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#666666" fill-opacity="0.6" transform="rotate(240 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#4c4c4c" fill-opacity="0.7" transform="rotate(270 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#333333" fill-opacity="0.8" transform="rotate(300 64 64)"/><path d="M59.6 0h8v40h-8V0z" fill="#191919" fill-opacity="0.9" transform="rotate(330 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64" calcMode="discrete" dur="1080ms" repeatCount="indefinite"></animateTransform></g></svg>
						<p>Loading chats. Please wait</p>
						</div> : <div className = "chat-list-field" >
							{props.chats ? props.chats.map(({id,author},index) => 				
							<div style ={ props.newMsgEffect && props.newMsgEffect==index+1 ? {backgroundColor: "#33CCCC"} : null }>
								<Link to ={"/chats/" + (id)} key = {id}>
									<span key = {id}>{author}</span>
								</Link>
								<Link to ={"/chats/"+ (id) +"/profile/" + (id)} key = {index}>
									<AccountCircleIcon style={{ fontSize: 40 }} key = {id}/>
								</Link>  
							</div> ): null}
							<NewChat addChat = {props.addChat}/>
					</div>}
		</>
)
}
export default ChatList;