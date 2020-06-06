import React, { createElement } from 'react';
import Message from "../Message/Message";

export class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textAreaValue: '',
            messages: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let message = this.state.textAreaValue;
        this.setState({ textAreaValue: '', messages: [...this.state.messages, message]});
    }

   handleChange(event) {
       this.setState({ textAreaValue: event.target.value });
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
       if (this.state.textAreaValue === '' && this.state.messages.length % 2 !== 0) {
           setTimeout(() => {this.setState({messages: [...this.state.messages, 'Talk to the hand.']})},
               1000);
       }
   }

    render() {
        let messages = this.state.messages.map((message, index) => <Message text={ message } key={ index } />);
        return (
            <div>
                <div>{messages}</div>
                <p>Enter your message here:</p>
                <textarea name="message" id="textarea-message" value={ this.state.textAreaValue } onChange={ this.handleChange } />
                <button onClick={ this.handleClick }>Send</button>
            </div>
        );
    }
}

