import React from 'react';
import PropTypes from 'prop-types';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";


export class ChatList extends React.Component {

    render() {
        return (
            <div className="chatList">
                <List>
                    <ListSubheader>Recent chats</ListSubheader>
                    <ListItem primaryText="Brendan Lim">
                        Chat 1
                    </ListItem>
                    <ListItem primaryText="Eric Hoffman">
                        Chat 2
                    </ListItem>
                    <ListItem primaryText="Grace Ng">
                        Chat 3
                    </ListItem>
                    <ListItem primaryText="Kerem Suer">
                        Chat 4
                    </ListItem>
                    <ListItem primaryText="Raquel Parrado">
                        Chat 5
                    </ListItem>
                </List>
                <Divider />
            </div>
        )
    }
}