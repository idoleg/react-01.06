import React from 'react';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';

export default class Layout extends React.Component {
    UNSAFE_componentWillMount() {
        // console.log('Layout componentWillMount');
    }

    componentDidMount() {
        // console.log('Layout componentDidMount');
    }

    componentDidUpdate() {
        // console.log('Layout componentDidMount');
    }
    
    render() {
        // console.log("Layout render");
    
        return (
            <div className="layout">
                <Header />
                <div className="wrap-chat-and-liast">
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        )
    }
}