import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createChat } from '../../../store/chatActions';
import { useInput } from '../../../hooks/useInput';
import './ChatList.css'

export const ChatList = ({ chats, createChat }) => {

    const [name, setName, setNameState] = useInput("");

    const handleClick = () => {
        createChat(name, name);
        setNameState('');
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            createChat(name, name);
            setNameState('');
        }
    }

    return (
<div className="parent">

    <ul className="list">
       {chats.map(({ id, name }) => (<li key = { id } className="list-item"><Link className="link" to={ "/chats/" + id }>{ name }</Link></li>))}
    </ul>

    <div className="add-form">
        <div className="add-input">
            <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Chat name:" onChange={ setName } onKeyUp={ handleKeyUp } value={ name } />
        </div>

    <div className="add-btn">
        <Button variant="outlined" color="secondary" onClick={ handleClick }>
            Add chat
        </Button>
    </div> 
    </div>
</div>
)

/*    default sintax
 { <li className="list-item"><Link className="link" to="/chats/1">Chat 1</Link></li>
    <li className="list-item"><Link className="link" to="/chats/2">Chat 2</Link></li>
    <li className="list-item"><Link className="link" to="/chats/3">Chat 3</Link></li>
    <li className="list-item"><Link className="link" to="/chats/4">Chat 4</Link></li>
    <li className="list-item"><Link className="link" to="/chats/5">Chat 5</Link></li> } */
}

ChatList.propTypes = {
    createChat: PropTypes.func.isRequired,
}