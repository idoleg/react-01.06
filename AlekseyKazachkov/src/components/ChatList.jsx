import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    UNSAFE_componentWillMount() {
        // console.log('ChatList componentWillMount');
    }

    componentDidMount() {
        // console.log('ChatList componentDidMount');
    }

    componentDidUpdate() {
        // console.log('ChatList componentDidMount');
    }
    
    render() {
        // console.log("ChatList render");
    
        return (
            <div className="wrap-chatList">
                <List>
                    <Subheader>Recent chats</Subheader>
                    <ListItem
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/ok-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Eric Hoffman"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/kolage-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Grace Ng"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/uxceo-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Kerem Suer"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/kerem-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Raquel Parrado"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/raquelromanp-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                    </List>
                    <Divider />
                    <List>
                    <Subheader>Previous chats</Subheader>
                    <ListItem
                        primaryText="Chelsea Otakan"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/chexee-128.jpg" />}
                    />
                    <ListItem
                        primaryText="James Anderson"
                        leftAvatar={<Avatar src="https://v0.material-ui.com/images/jsa-128.jpg" />}
                    />
                </List>
            </div>
        )
    }
}