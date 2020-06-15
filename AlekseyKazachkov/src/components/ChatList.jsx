import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import "../styles/style.css";

export default class ChatList extends React.Component {
    render() {
        return (
            <div className="wrap-chatList">
                <List>
                    <Subheader>Recent chats</Subheader>
                    <Link to="/chat/1/">
                        <ListItem
                            primaryText="Brendan Lim"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                    <Link to="/chat/2/">
                        <ListItem
                            primaryText="Eric Hoffman"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                    <Link to="/chat/3/">
                        <ListItem
                            primaryText="Grace Ng"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                </List>
            </div>
        )
    }
}