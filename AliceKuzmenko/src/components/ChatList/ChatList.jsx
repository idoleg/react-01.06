import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import './ChatList.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import './NewChatForm.css'


import useInput from '../../hooks/useInput';

export const AddChatForm = ({onNewChat, chats}) => {

    const [name, setName,setNameState] = useInput("");


    const handleSubmit = (event) => {
        //alert('Отправленное имя: ' + this.state.value);
       // console.log(onNewChat)
        onNewChat(chats.length+1, name);
       // console.log(name)
        event.preventDefault();
        setNameState('');

    }

    return (
        <form className="add-chat-form" onSubmit={handleSubmit}>
            <TextField
                label="New chat name"
                variant="outlined"
                placeholder="New chat name"
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
export const ChatList = ({isLoading, chats, addChat,push }) => {
    if (isLoading){console.log(isLoading);
        return <strong className="no-msgs">Loading...</strong>}
   //chats = Object.values(chats)
   const chatsArray=[]
   for (let key in chats){chatsArray.push(chats[key])};
   //chatsArray.map(item => console.log (item))
    return (
        <><ul className="chats">
            {/* {chatsArray.map(({ id, name }) => (<li key={id}><Link to={"/chats/" + id}>{name}</Link></li>))} */}
            {chatsArray.map(({ id, name }) => (<li key={id} onClick={()=>push(`/chats/${id}`)}>{name}</li>))}
            
            
        
        </ul>
              <AddChatForm onNewChat={addChat} chats={chats}/>
        </>
    )
    return null
}

