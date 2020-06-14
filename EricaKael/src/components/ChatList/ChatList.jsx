import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends Component{
    render(){
        return <div style={{width: '30%'}}>
            <List>
                <Subheader>Recent chats</Subheader>
                <ListItem
                primaryText="Brendan Lim"
                leftAvatar={<Avatar>A</Avatar>}
                rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar>A</Avatar>}
                rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                primaryText="Grace Ng"
                leftAvatar={<Avatar>A</Avatar>}
                rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                primaryText="Kerem Suer"
                leftAvatar={<Avatar>A</Avatar>}
                rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                primaryText="Raquel Parrado"
                leftAvatar={<Avatar>A</Avatar>}
                rightIcon={<CommunicationChatBubble />}
                />
            </List>
        </div>
    }
}