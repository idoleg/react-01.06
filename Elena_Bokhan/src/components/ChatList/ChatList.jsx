import React from 'react';


const ChatList = (props) =>{

	return  <div className = "chat-list-field" >
				{props.chats.map(item => <div>{item}</div> )}		
			</div>
}
export default ChatList