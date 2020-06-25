import React from "react";
import { bindActionCreators } from "redux";
import { createChat } from "../store/chatActions";
import { connect } from "react-redux";
import { ChatList } from "../components/ChatList/ChatList";
import { push } from "connected-react-router";

const mapStateToProps = (store) => {
    let chats = [];
        for (let id in store.chats) {
            chats.push({id: parseInt(id, 10), name: store.chats[id].name})
        }
    return { chats }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ createChat, push }, dispatch);

const mergeProps = (stateProps, dispatchProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);