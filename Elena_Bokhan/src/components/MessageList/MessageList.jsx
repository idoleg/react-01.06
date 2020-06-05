
import React from 'react';
import Message from '../Message/Message.jsx';

const addMsg = () =>{
	let newMsg = {name: "Mike", text: "I'm glad!"};
		
	let findElem = msgArr.find(elem =>( newMsg.name==elem.name && newMsg.text==elem.text));
	if (!findElem){
		msgArr.push(newMsg);
		ReactDom.render(<MessageList msgArr = { msgArr } />, mountPoint);
	} 
}


const MessageList = () =>{
	return  <div>
				{msgArr.map(elem => <Message name = {elem.name} text = {elem.text}/>)}
				<button onClick = { addMsg }>Добавить</button>
			</div>	
}
export default MessageList;