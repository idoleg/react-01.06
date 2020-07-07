import React from 'react';
import PropTypes from 'prop-types';

import { Chat } from '../../components/Chat/Chat'
import { ChatList } from '../../components/ChatList/ChatList'
import { Header } from '../../components/Header/Header'
export const ROBOT_NAME = "Robot";

export class ChatContainer extends React.Component {
    state = {
        // messages: [
        //     { name: 'Me', content: 'Hello!', id: 1 },
        //     { name: 'You', content: 'Hi!', id: 2 },
        //     { name: 'Me', content: 'How are you?', id: 3 },
        //     { name: 'You', content: 'Fine', id: 4 },
        // ],
        chats: {
            1: {
                name: 'Lorem',
                messages: [
                    { name: 'Me', content: 'Hello!', id: 1 },
                    { name: 'Lorem', content: 'Hi!', id: 2 },
                    { name: 'Me', content: 'How are you?', id: 3 },
                    { name: 'Lorem', content: 'Fine', id: 4 },
                ]
            },
            2: {
                name: 'Ipsum',
                messages: [
                    { name: 'Me', content: 'Hello!', id: 1 },
                    { name: 'Ipsum', content: 'Hi!', id: 2 },
                ]
            },
            3: {
                name: 'Dolor',
                messages: []
            },
            //4:{name:'Sit'},
            //5:{name:'Amet'},    
        }
        //timerID:''
    }
    timerID = ""

    handleNewChat = (id) => (newChatName) => {
        let newChat={};
        newChat[id]={name: newChatName, messages: []}
        this.setState(state => ({
            //messages: [...state.messages, {...message, id:(state.messages.length+1)}],
            ...state,
            chats: {
                ...state.chats, ...newChat
                }
            }
        ),);
    }
    //componentDidUpdate(prevProps, prevState) {
    handleRobotAnswer = () => {
        //console.log ("robot")
        const { id } = this.props.match.params;
        if (id && this.state.chats[id]) {
            const lastMessage = this.state.chats[id].messages[this.state.chats[id].messages.length - 1];

            //console.log(lastMessage)

            if (lastMessage && lastMessage.name != (ROBOT_NAME) ) {//ответ только если последнее сообщение не от робота
                //&& (prevState.chats[id].messages[prevState.chats[id].messages.length - 1] != lastMessage)
                clearInterval(this.timerID);
                this.timerID = setTimeout(() => {
                    this.handleSendMessage(id)({ name: ROBOT_NAME, content: `${lastMessage.name}! Не приставай ко мне, я робот!`, id: (this.state.chats[id].messages.length + 1) })
                }, 1000);
            }
        }
    }

    handleSendMessage = (id) => (message) => {
        this.setState(state => ({
            //messages: [...state.messages, {...message, id:(state.messages.length+1)}],
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    messages: [...state.chats[id].messages, { ...message, id: (state.chats[id].messages.length + 1) }]
                }
            }
        }),this.handleRobotAnswer);
    }


    testHandle = (id) => () =>{
        console.log("testHandle: "+id)
    }
    render() {
        const { id } = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : null;
        console.log (this.handleSendMessage(id))
        console.log (this.handleNewChat(id))
        return <>
            
            <main>
                <Chat messages={messages} onNewChat={this.handleNewChat(id)} onSendMessage={this.handleSendMessage(id)}   />
            </main>
        </>
    }
}
ChatContainer.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape(Object)),//.isRequired,
}
//onNewChatDo={this.handleNewChat(id)}