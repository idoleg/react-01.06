import React from 'react';

import { Chat } from '../../components/Chat/Chat'
import { ChatList } from '../../components/ChatList/ChatList'
import {Header} from '../../components/Header/Header'
export const ROBOT_NAME = "Robot";
let timerID="";
export class ChatContainer extends React.Component {
    state = {
        messages: [
            { name: 'Me', content: 'Hello!', id: 1 },
            { name: 'You', content: 'Hi!', id: 2 },
            { name: 'Me', content: 'How are you?', id: 3 },
            { name: 'You', content: 'Fine', id: 4 },
        ],
        chats: [
            {name: 'Lorem'},
            {name:'Ipsum'},
            {name: 'Dolor'},
            {name:'Sit'},
            {name:'Amet'},    
        ],
        //timerID:''
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].name != (ROBOT_NAME)) {//ответ только если последнее сообщение не от робота
            clearInterval(timerID);
            timerID = setTimeout(() => {
                //alert('robot')
                this.setState({
                    messages: [...this.state.messages, { name: ROBOT_NAME, content: 'Не приставай ко мне, я робот!', id: (this.state.messages.length + 1) }]
                })
            },3000);
        }
    }

    handleSendMessage = (message) => {
        
        
        this.setState(state => ({
            messages: [...state.messages, {...message, id:(state.messages.length+1)}],
        }));
         

    }

    render() {
        
        return <>
        <Header/>
        <main>
        <ChatList chats={this.state.chats}/>
        <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage} />
        </main>
        </>
    }
}