import React, {useState} from 'react';
import propTypes from 'prop-types';

function useInput(initialState){
	const [state, setState] = useState(initialState)

	const setInput =(event) =>{
		setState(event.target.value)
	}
	return [state,setInput,setState]
}
const ChatForm = (props) => {
	
	const [name, setName, setNameState] = useInput("Your name");
	const [text, setText, setTextState] = useInput("type your message");

	const handleSubmit = () =>{
		event.preventDefault();
		props.onSendMsg({name,text});
		props.addChat({name});
		setTextState("type your message");
		setNameState("Your name");
	}
	
	const handleKeyUp = (event) =>{
			if(event.keyCode === 13){
				props.onSendMsg({name,text});
				setTextState("type your message");
				setNameState("Your name");
		}
	}
	return (
		<form onSubmit = {handleSubmit} className ="chat-form">
			<input type="text"
				placeholder = "Your name"
				value = {name}
				onChange = {setName}
				onKeyUp = {handleKeyUp}/>
			<textarea 
				placeholder = "type your message"
				value = {text}
				onChange = {setText}
				onKeyUp = {handleKeyUp} >
			</textarea>
			<button >SEND</button>
		</form>
	)
}
export default ChatForm;