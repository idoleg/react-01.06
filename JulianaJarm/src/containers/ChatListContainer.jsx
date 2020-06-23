import React from "react";
import {bindActionCreators} from "redux";
import {createChat} from "../store/chatActions";
import {connect} from "react-redux";
import {ChatList} from "../components/ChatList/ChatList";

const mapStateToProps = (store) => {
    let chats = [];
        for (let id in store.chats) {
            chats.push({id: id, name: store.chats[id].name})
        }
        console.log(chats);
    return { chats }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ createChat }, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
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