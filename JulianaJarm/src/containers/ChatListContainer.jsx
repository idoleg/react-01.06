import React from "react";
import { bindActionCreators } from "redux";
import { createChat, deleteChat } from "../store/chatActions";
import { connect } from "react-redux";
import { ChatList } from "../components/ChatList/ChatList";
import { push } from "connected-react-router";

const mapStateToProps = (store) => {
    let chats = [];
        for (let id in store.chats) {
            if (id > 0 ) {
                chats.push({id: parseInt(id, 10), name: store.chats[id].name});
            }
        }
    return {
        isLoading: store.chats.isLoading,
        error: store.chats.error,
        chats
        }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ createChat, deleteChat, push }, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);