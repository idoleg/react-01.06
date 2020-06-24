import React from 'react';
import PropTypes from "prop-types";
import MessageField from '../chat/MessageField'
import Header from '../chat/Header'
import ChatList from '../chat/ChatList'


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className = "parent-container">
                <Header chatId={ this.props.chatId } />
                <div className = "message-container">
                    <div className = "column-chat-list">
                        <ChatList />
                    </div>
                    <div className = "column-message-field">
                        <MessageField chatId={ this.props.chatId } />
                    </div>
                </div>
            </div>
        )
    }
}