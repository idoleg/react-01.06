import React, { Fragment } from 'react';
import Message from './Message/Message';

import { element } from 'prop-types';

import '../components/Styles/style.css'


export default class SendButton extends React.Component {

   state = {
      messages: [{text:'Hi', user: 'bot'}, {text:'How are you?', user: 'bot'}],
   };

   handleClick = () => {
      let userMessage = document.querySelector('#userInput').value;
      this.setState({
         messages: [...this.state.messages, {text: userMessage, user: 'Human'}],
      });

   }

   componentDidUpdate() {
      if (this.state.messages[this.state.messages.length-1].user == 'Human') {
         setTimeout(() => {this.setState({messages: [...this.state.messages, {text: "I don't want talk to you! Leave me alone!", user: 'bot'}]})}, 2000)
      }
   }
   render() {
      const messageElements = this.state.messages.map((message, index) => (
         
         <Message key={index} text={message.text} name={message.user} /> 
         
      ));

      return <div id='main' className='message-field'>
         {messageElements}
         <input id='userInput'></input>
         <button onClick={this.handleClick}>Send Message</button>
      </div>
   }
}