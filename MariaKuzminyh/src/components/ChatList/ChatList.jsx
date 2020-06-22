import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useInput from '../../hooks/useInput';

import './chat-list.css';

export const ChatList = ({ chats, createChat }) => {
  const [name, setName, setNameState] = useInput("");

  const handleClick = () => {
    createChat(new Date().valueOf(), name);
    setNameState('');
  };

  return (
    <List
      className="chat-list"
      component="nav"
      aria-label="main mailbox folders"
    >
      { chats.map(({ id, name }) => (
        <ListItem button>
          <Link to={"/chats/" + id} key={ id }>
            <ListItemText primary={ name } />
          </Link>
        </ListItem>))
      }
      <ListItem button>
        <input 
          placeholder="The name of chat"
          onChange={ setName }
          value={ name }
        />
        <button onClick={ handleClick }>Добавить новый чат</button>
      </ListItem>
    </List>
  );
};

//propTypes