import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import '../containers/ChatContainer.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/chatActions'

const mapStateToProps = (store, props) => {
   const {id} = props.match.params;
   const chat = id && store.chats.items && store.chats.items[id]  ? store.chats.items[id] : undefined;
   return {
      isLoading: store.chats.isLoading,
      error: store.chats.error,
      messages: chat ? chat.messages : undefined,
   }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
   const {id} = ownProps.match.params;

   const onSendMessage = (message) => {
      dispatchProps.sendMessage(id, message.name, message.content);
   }
   return {
      ...stateProps,
      onSendMessage,
   }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat)

