import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemAvatar, Avatar, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'

import './ChatList.css'

export const ChatList = () => (

    <List className="ChatList">
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Link to="/chats/1">
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                </Link>
            </ListItemAvatar>
        </ListItem>
        <Divider veriant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Link to="/chats/2">
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                </Link>
            </ListItemAvatar>
        </ListItem>
        <Divider veriant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Link to="/chats/3">
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                </Link>
            </ListItemAvatar>
        </ListItem>
        <Divider veriant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Link to="/chats/4">
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                </Link>
            </ListItemAvatar>
        </ListItem>
        <Divider veriant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Link to="/chats/5">
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                </Link>
            </ListItemAvatar>
        </ListItem>
    </List>

)