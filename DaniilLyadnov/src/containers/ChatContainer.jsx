import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendMessage} from '../store/chatActions';

export const ROBOT_ROLE = 'robot';

class ChatContainer extends Component {
    // timeoutId = null;
    //
    // handleRobotAnswer = () => {
    //     const {id} = this.props.match.params;
    //
    //     if (id && this.state.chats[id]) {
    //         const currentMessages = this.state.chats[id].messages;
    //         const lastMessage = currentMessages[currentMessages.length - 1];
    //
    //         if (lastMessage && lastMessage.role !== ROBOT_ROLE) {
    //             clearTimeout(this.timeoutId);
    //             this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
    //                 role: 'robot',
    //                 name: 'robot',
    //                 content: `Hello ${lastMessage.name}, I'm Robot`,
    //             }), 1000);
    //         }
    //     }
    // };

    render() {
        return <Chat messages={this.props.messages} onSendMessage={this.props.onSendMessage}/>
    }
}

const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    const chat = id && store.chats && store.chats[id] ? store.chats[id] : undefined;

    return {
        messages: chat ? chat.messages : undefined,
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {id} = ownProps.match.params;

    const onSendMessage = (message) => {
        dispatchProps.sendMessage(id, message.role, message.name, message.content);
    };

    return {
        ...stateProps,
        onSendMessage,
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);