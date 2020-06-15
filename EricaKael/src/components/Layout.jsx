import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatList from '../components/ChatList/ChatList';
import Header from '../components/Header/Header';
import MessageField from '../components/MessageField/MessageField';

export default class Layout extends Component{
    static propTypes ={
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId:1,
    };
    render(){
        return <div>
            <Header chatId={this.props.chatId} />
            <div style={{display: 'flex'}}>
                <ChatList />,
                <MessageField chatId={this.props.chatId} />
            </div>
        </div>
    }
}