import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatName: '',
        }
    }
    handleNameChange = (event) => {
        this.setState({chatName: event.target.value});
    }
    findNewChatId = () => {
        let max = 0;
        this.props.chats.map((chat) => {
            if (chat.id > max) {
                max = chat.id;
            }
        })
        return max += 1;
    }
    setNewChat = () => {
        const chatName = this.state.chatName;
        const chatId = this.findNewChatId();
        return {id: chatId, name: chatName};
    }
    handleCreateChat = () => {
        const chat = this.setNewChat();
        this.props.onNewChat(chat);
        this.setState({chatName: ''})
    }
    render() {
        const chats = this.props.chats.map((chat, id) => (
            <Link key={id} to={`/chats/${chat.id}`}>
                <ListItem>{chat.name}</ListItem>
                <Divider/>
            </Link>
        ))

        return (
            <div className="chatList">
                <List>
                    <input type="text" value={this.state.chatName} onChange={this.handleNameChange}/>
                    <Button onClick={this.handleCreateChat}>Create new chat</Button>
                    { chats }
                </List>
            </div>
        )
    }
}
