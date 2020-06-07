import React from 'react';
import ReactDom from 'react-dom';

const mountPoint = document.getElementById('root');

let msgArr = [{name: "Mike", text: "Hello"},
			  {name: "Helga", text: "Hi"},
			  {name: "Mike", text: "How are you?"},
			  {name: "Helga", text: "Fine, thanks"}
			]

const addMsg = () =>{
	let newMsg = {name: "Mike", text: "I'm glad!"};
		
	let findElem = msgArr.find(elem =>( newMsg.name==elem.name && newMsg.text==elem.text));
	if (!findElem){
		msgArr.push(newMsg);
		ReactDom.render(<MessageList msgArr = { msgArr } />, mountPoint);
	} 
}

const Message = (props) => {
	return  <div>
				<span> {props.name +": " } </span><span><i> {props.text} </i></span>
			</div>
	}

const MessageList = () =>{
	return  <div>
				{msgArr.map(elem => <Message name = {elem.name} text = {elem.text}/>)}
				<button onClick = { addMsg }>Добавить</button>
			</div>	
}

ReactDom.render(<MessageList msgArr = { msgArr } />, mountPoint);
