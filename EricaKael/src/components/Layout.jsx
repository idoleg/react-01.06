import React, { Component } from 'react';
import ChatList from '../components/ChatList/ChatList';
import Header from '../components/Header/Header';
import MessageField from '../components/MessageField/MessageField';

export default class Layout extends Component{
    render(){
        return <div>
            <Header />
            <div style={{display: 'flex'}}>
                <ChatList />,
                <MessageField />
            </div>
        </div>
    }
}