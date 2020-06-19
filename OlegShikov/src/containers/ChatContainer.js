// import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/chatActions';


export const ROBOT_NAME = "Robot";

// class ChatContainer extends Component {
//     // timeoutId = null;

//     // componentDidUpdate(prevProps, prevState) {
//     // handleRobotAnswer = () => {
//     //     const { id } = this.props.match.params;

//     //     if (id && this.state.chats[id]) {
//     //         const currentMessages = this.state.chats[id].messages;
//     //         const lastMessage = currentMessages[currentMessages.length - 1];

//     //         // if(prevState.chats[id].messages.length === currentMessages.length) return;

//     //         if (lastMessage && lastMessage.name !== ROBOT_NAME) {
//     //             clearTimeout(this.timeoutId);
//     //             this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
//     //                 name: ROBOT_NAME,
//     //                 content: `Hello ${lastMessage.name}, I'm Robot`,
//     //             }), 1000);
//     //         }
//     //     }
//     // }

//     // handleSendMessage = (id) => (message) => {
//     //     this.props.sendMessage(id, message.name, message.content);
//     // }

//     render() {
//         console.log(this.props);
//         // return null
//         // const { id } = this.props.match.params;
//         // const messages = id && this.props.chats[id] ? this.props.chats[id].messages : null;
//         return <Chat messages={this.props.messages} onSendMessage={this.props.onSendMessage} />
//     }
// }

const mapStateToProps = (store, props) => {
    const { id } = props.match.params;
    const chat = id && store.chats && store.chats[id] ? store.chats[id] : undefined;

    return {
        messages: chat ? chat.messages : undefined,
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ sendMessage }, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;

    const onSendMessage = (message) => {
        dispatchProps.sendMessage(id, message.name, message.content);
    }

    return {
        ...stateProps,
        onSendMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);