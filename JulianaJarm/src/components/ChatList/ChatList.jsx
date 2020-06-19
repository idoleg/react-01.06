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

//props: (chats: [{id, name}])
export class ChatList extends React.Component {
    constructor(props) {
        super(props);

    }
    handleCreateChat = () => {
        const chat = {id: 50, name: 'Test Chat'}
        this.props.onNewChat(chat);
    }
    render() {
        return (
            <div className="chatList">
                <List>
                    <Button onClick={this.handleCreateChat}>Create new chat</Button>
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
                </List>
                <Divider />
            </div>
        )
    }
}
//должен брать из стейта список чатов, ему не нужны месседжи
const mapStateToProps = (store, props) => {
    console.log(store)
    const { id } = props.match.params;
    const newChatId = id ? (id + 1) : undefined;
    return {
        chats: !store.chats[newChatId] ? store.chats[newChatId] : undefined,
    }
}

const mapDispatchToProps = (dispatch) => {
    bindActionCreators({ createChat }, dispatch)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;
    const onNewChat = (chat) => {
        console.log('new chat')
        dispatchProps.createChat(chat.id, chat.name);
    }
    return {
        ...stateProps,
        onNewChat
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);

//fixme connect не вызывается нигде, добавление чата не работает