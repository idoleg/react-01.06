import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


export class ChatList extends React.Component {
    addNewChat() {
        console.log('new chat')
    }

    render() {

        return (
            <div className="chatList">
                <List>
                    <Button onClick={this.addNewChat}>Create new chat</Button>
                    <Link to="/chats/1" >
                        <ListItem>Chat 1</ListItem>
                    </Link>
                    <Divider />
                    <Link to="/chats/2" >
                        <ListItem>Chat 2</ListItem>
                    </Link>
                    <Divider />
                    <Link to="/chats/3" >
                        <ListItem>Chat 3</ListItem>
                    </Link>
                    <Divider />
                    <Link to="/chats/4" >
                        <ListItem>Chat 4</ListItem>
                    </Link>
                    <Divider />
                    <Link to="/chats/5" >
                        <ListItem>Chat 5</ListItem>
                    </Link>
                    <Divider />
                </List>
                <Divider />
            </div>
        )
    }
}

