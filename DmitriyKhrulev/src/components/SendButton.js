import React from 'react';
import Message from './Message';

export default class SendButton extends React.Component {
   state = {
      messages: ['Hi', 'How are you?']
   };

   handleClick = () => {
      this.setState({ messages: [...this.state.messages, 'Good'] });
   }

   render() {
      const messageElements = this.state.messages.map((text, index) => (
      <Message key={ index } text = { text }/>
      ));

      return 
      <div>
         {messageElements}
         <button onClick={ this.handleClick }>Send Message</button>
      </div>
   }
}