import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
//import Subheader from 'material-ui/Subheader';
//import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends Component{
    render(){
        return <div style={{width: '30%'}}>
            <List>
                <Link to="/chat/1/">
                    <ListItem primaryText="Chat 1" leftIcon={<ContentSend/>}/>
                </Link>
                <Link to="/chat/2/">
                    <ListItem primaryText="Chat 2" leftIcon={<ContentSend/>}/>
                </Link>
                <Link to="/chat/3/">
                    <ListItem primaryText="Chat 3" leftIcon={<ContentSend/>}/>
                </Link>
            </List>
        </div>
    }
}