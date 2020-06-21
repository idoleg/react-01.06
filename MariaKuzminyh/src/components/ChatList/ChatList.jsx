import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './chat-list.css';

export const ChatList = () => {
  return (
    <List
      className="chat-list"
      component="nav"
      aria-label="main mailbox folders"
    >
      <ListItem button>
        <ListItemText primary="Иван" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Татьяна" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Лидия" />
      </ListItem>
    </List>
  );
};