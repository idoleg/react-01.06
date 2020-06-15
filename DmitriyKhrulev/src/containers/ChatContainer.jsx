import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import { ChatList } from '../components/ChatList/ChatList';
import '../containers/ChatContainer.css';


export const ROBOT = 'Robot'
export class ChatContainer extends Component {
   state = {
      messages: [
         { name: 'Ivan', content: 'Hello' },
         // { name: 'Gref', content: 'Hi' },
         // { name: 'Pupu', content: 'Good day' },
         // { name: 'Medved', content: 'Ola' },
      ],
      dialogs: [
         {name: "Conversation1", theme: 'Theme1'},
         {name: "Conversation2", theme: 'Theme2'},
         {name: "Conversation3", theme: 'Theme3'},
         {name: "Conversation4", theme: 'Theme4'},
         {name: "Conversation5", theme: 'Theme5'},
      ]
   }

   componentDidUpdate() {
      const lastMessage = this.state.messages[this.state.messages.length - 1];
      const previosMessage = this.state.messages[this.state.messages.length - 2];
      if ((lastMessage.name !== ROBOT) && 
      (previosMessage.name !== lastMessage.name) && 
      (previosMessage.content !== lastMessage.content)) {
            setTimeout(() => this.handleSendMessage({
               name: ROBOT,
               content: `Hello, ${lastMessage.name}`
            }), 1000);
      }
   }
   handleSendMessage = (message) => {
      this.setState(state => ({
         messages: [...state.messages, message],
      }));
   }
   render() {
      return <div className='chat-field'>
         <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage} /> 
         <ChatList dialogs={this.state.dialogs}/>
      </div>
   }
}