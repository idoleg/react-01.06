import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createChat } from "../../store/chatActions";

export class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatName: '',
            chatId: '',
        }
    }
    handleNameChange = (event) => {
        this.setState({chatName: event.target.value});
    }
    findNewChatId = () => {
        let max = 0;
        this.props.chats.map((chat, index) => {
            if (chat.id > max) {
                max = chat.id;
            }
        })
        parseInt(max)
        max += 1;
        this.setState({chatId: max});
    }
    setNewChat = () => {
        const chatName = this.state.chatName;
        const chatId = this.state.chatId;
        return {id: chatId, name: chatName};
    }
    handleCreateChat = () => {
        const chat = this.setNewChat();
        this.props.onNewChat(chat);
        this.setState({chatName: ''})
    }
    render() {
        const chats = this.props.chats.map((chat, id) => (
            <>
                <Link to={`/chats/${chat.id}`}>
                    <ListItem key={id}>{chat.name}</ListItem>
                </Link>
                <Divider />
            </>
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
/*

//todo по кнопке добавления чата должен вместо кнопки появляться инпут, где нужно ввести имя чата и
//todo после нажатия энтера чат добавляется с введенным именем
 */