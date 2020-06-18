import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT_NAME = "Robot";

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {name: 'Лена', content: 'Превет!'},
                    {name: 'Оля', content: 'Превет!'},
                    {name: 'Лена', content: 'Как дела?'},
                    {name: 'Оля', content: 'Хорошо'}
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {name: 'Вася', content: 'Превет! Как дела'},
                    {name: 'Петя', content: 'Нормально!'},
                    
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            },
        }
                
    }
           
    timeoutId = null;        

   //componentDidUpdate(prevProps, prevState) {
       hendleRobotAnswer = () => {
        const {id} = this.props.match.params;

        if(id && this.state.chats[id]){
            const currenMessages = this.state.chats[id].messages;
            const lastMessage = currenMessages[currenMessages.length - 1];

           // if(prevState.chats[id].messages.length === currenMessages.length) return;

            if (lastMessage && lastMessage.name !== ROBOT_NAME) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
                    name: ROBOT_NAME,
                    content: `Привет ${lastMessage.name}, я Робот`,
                }), 1000);
            }

        }
    }        

    handleSendMessage = (id) => (message) => {
          this.setState(state => ({
              ...state,
              chats: {
                  ...state.chats,
                  [id]: {
                      ...state.chats[id],
                      messages: [...state.chats[id].messages, message],
                  }
              }
          }), this.hendleRobotAnswer);  



        // this.setState(state => ({
        //     messages: [...state.messages, message],
        // }))
    }
    

    render() {

        const {id} = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : null;
        const charId = this.props.match.params.id;

        return (<Chat messages={messages} onSendMessage={this.handleSendMessage(id)} charId={charId}/>)
        
        
    }
    
}
