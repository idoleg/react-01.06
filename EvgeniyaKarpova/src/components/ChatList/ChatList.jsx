import './ChatList.css';

import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export const ChatList = ({chats, createChat}) => {
    const [name, setName, setNameState] = useInput("");
    const handleClick = () => {
        createChat(new Date().valueOf(), name)
        setNameState('');
    }
const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            createChat(new Date().valueOf(), name);
            setNameState('');
        }
     };
  const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          color: 'white',
          height: 22,
          padding: '0 10px',
        },
      })
    const classes = useStyles();

    return (<div className="chatList">
        <ul>
            {chats.map(({id, name}) => (<li key={id}><Link to={"/chats/"+id}>{name}</Link></li>))}
        <li>
            <input 
            placeholder="Имя чата"
            onChange={setName} 
            value={name}
            onKeyUp={handleKeyUp}
            />

            <Button 
            className={classes.root}
            onClick={handleClick}>
            Добавить чат
            </Button>
        </li>
        </ul>
    </div>)
}