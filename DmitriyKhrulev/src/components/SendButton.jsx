import React, { Fragment } from 'react';
import Message from './Message';
import { element } from 'prop-types';




export default class SendButton extends React.Component {

   state = {
      messages: ['User: Hi', 'User: How are you?'],
   };

   handleClick = () => {
      this.setState({
         messages: [...this.state.messages, 'Robot: Good'],
      });

   }

   componentDidUpdate() {
      if (this.state.messages.length % 2 === 1) {
         setTimeout(() => this.setState({
            messages: [...this.state.messages, "Robot: I don't want talk to you Leathern!"],

         })), 2000
      }
   }
   render() {
      const messageElements = this.state.messages.map((text, index) => (
            <Message key={index +2} text={text} />
      ));
      messageElements.forEach((element) => console.log(element.props));


      return <div>
         {messageElements}
         <input id='one'></input><button onClick={this.handleClick}>Send Message</button>
      </div>
   }
}