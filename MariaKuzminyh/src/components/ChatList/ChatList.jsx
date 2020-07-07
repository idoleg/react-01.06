import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './chat-list.css';

export const ChatList = () => (
  <List
    className="chat-list"
    component="nav"
    aria-label="main mailbox folders"
  >
    <ListItem button>
      <Link to="/chats/1">
        <ListItemText primary="Иван" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link to="/chats/2">
        <ListItemText primary="Татьяна" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link to="/chats/3">
        <ListItemText primary="Лидия" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link to="/chats/4">
        <ListItemText primary="Чат 4" />
      </Link>
    </ListItem>
  </List>
);