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
    handleCreateChat = () => {
        const chat = {id: 50, name: 'Test Chat'}
        this.props.onNewChat(chat);
    }
    render() {
        console.log(this.props.chats)

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