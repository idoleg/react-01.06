import React from 'react';
import MessageField from '../chat/MessageField'
import Header from '../chat/Header'
import ChatList from '../chat/ChatList'


export default class Layout extends React.Component {
    render() {
        return <div className = "parent-container">
            <div className ="message-header">
                <Header />
            </div>
            <div className = "message-container">
                <div className = "column-chat-list"><ChatList /></div>
                <div className = "column-message-field"><MessageField /></div>
            </div>
        </div>
    }
}