import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import './ChatList.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import './NewChatForm.css'


//import useInput from '../../hooks/useInput';

export const AddChatForm = ({onNewChat}) => {
//    const [name, setName, setNameState] = useInput("");

    //const handleClick = () => {
    //    createChat(new Date().valueOf(), name);
    //    setNameState('');
    //}
    //const [name, setName] = useInput("Chat");

    const handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    const handleSubmit = (event) => {
        //alert('Отправленное имя: ' + this.state.value);
        console.log(onNewChat)
        onNewChat(name);
        console.log(name)
        event.preventDefault();
        //setContentState("");

    }
    const handleKeyUp = (event) => {
        //console.log("event")
        if (event.keyCode === 13) { // Enter
            handleSubmit(event);
        }
     };
    return (
        <form>
            <TextField
                label="Name"
                variant="outlined"
                placeholder="Name"
                value={name}
                onChange={setName}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit}
                
            >
                Create
            </Button>
        </form>
    )
}


//export function ChatList(chats){
export const ChatList = ({ chats }) => {
    
   //chats = Object.values(chats)
   const chatsArray=[]
   for (let key in chats){chatsArray.push(chats[key])};
   chatsArray.map(item => console.log (item))
    return (
        <ul>
            {chatsArray.map(({ id, name }) => (<li key={id}><Link to={"/chats/" + id}>{name}</Link></li>))}
            {/* <li>
              <AddChatForm />
            </li> */}
        </ul>
    )
    return null
}

