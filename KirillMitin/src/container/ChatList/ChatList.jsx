import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@material-ui/core';

import './ChatList.css'

class ChatList extends Component {
    render() {
        return (
            <List className="ChatList">
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                </ListItem>
                <Divider veriant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                    </ListItemAvatar>
                </ListItem>
                <Divider veriant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                    </ListItemAvatar>
                </ListItem>
                <Divider veriant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                </ListItem>
                <Divider veriant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                    </ListItemAvatar>
                </ListItem>
            </List>
        )
    }
}

export default ChatList