import React from 'react';
import PropTypes from "prop-types";
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';
import "../styles/style.css";

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId: 1,
    }; 
    render() {
    
        return (
            <div className="layout">
                <Header chatId={ this.props.chatId } />
                <div className="wrap-chat-and-liast">
                    <ChatList />
                    <MessageField chatId={ this.props.chatId } />
                </div>
            </div>
        )
    }
}