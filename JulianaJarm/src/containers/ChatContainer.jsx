import React from 'react';
import { Chat } from "../components/Chat/Chat";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendMessage } from "../store/chatActions";

//export  const BOT_NAME = 'bot';
//class ChatContainer extends React.Component {
    //timeoutId = null;
    // handleMessageSend = (id) => (message) => {
    //     this.props.sendMessage(id, message.name, message.content)
    //     //     this.setState(state => ({
    //     //         ...state,
    //     //         chats: {
    //     //             ...state.chats,
    //     //             [id]: {
    //     //                 ...state.chats[id],
    //     //                 messages: [...state.chats[id].messages, message]
    //     //             }
    //     //         }
    //     //     }))
    //     //         //, this.addBotResponse)
    // }
    // addBotResponse = () => {
    //     let { id } = this.props.match.params;
    //     console.log('update')
    //
    //     if (id && this.state.chats[id]) {
    //         let currentMessages = this.state.chats[id].messages;
    //         let lastMessage = currentMessages[currentMessages.length - 1];
    //
    //         if (lastMessage && lastMessage.name !== BOT_NAME) {
    //             clearTimeout(this.timeoutId);
    //             this.timeoutId = setTimeout(() => this.handleMessageSend(id)({
    //                 name: BOT_NAME,
    //                 content: `${lastMessage.name}, talk to the hand.`
    //             }), 1000);
    //         }
    //     }
    // }
    //
    //  render() {
        //const { id } = this.props.match.params;
        //const messages = id && this.props.chats[id] ? this.props.chats[id].messages : null;
    //      return <Chat messages={this.props.messages} handleMessageSend={this.props.onMessage} />
  //  }
//}

const mapStateToProps = (store, props) => {
    const { id } = props.match.params;
    const chat = id && store.chats ? store.chats[id] : undefined;
    return {
        messages: chat ? chat.messages : undefined,
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ sendMessage }, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;
    const onMessage = (message) =>  {
        dispatchProps.sendMessage(id, message.name, message.content);
    }
    return {
        ...stateProps,
        onMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
