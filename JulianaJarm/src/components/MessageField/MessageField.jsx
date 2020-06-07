import React from 'react';
import Message from "../Message/Message";

export class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textAreaValue: '',
            //[{login: '', text: ''}]
            messages: [],
            login: '',
        };
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

    handleClick() {
        let message = {login: this.state.login, text: this.state.textAreaValue};
        this.setState({ textAreaValue: '', messages: [...this.state.messages, message]});
    }

   handleMessageChange(event) {
       this.setState({ textAreaValue: event.target.value });
   }

   handleLoginChange(event) {
        this.setState({ login: event.target.value });
        console.log(this.state.login)
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
       if (this.state.textAreaValue === '' && this.state.messages.length % 2 !== 0) {
           let message = {login: 'Robot', text: 'Talk to the hand'};
           setTimeout(() => {this.setState({messages: [...this.state.messages, message]})},
               1000);
       }
   }

    render() {
        let messages = this.state.messages.map((message, index) => <Message author={ message.login } text={ message.text } key={ index } />);
        return (
            <div>
                <div>{messages}</div>
                <div><input type="text" placeholder="Login" value={ this.state.login } onChange={ this.handleLoginChange } /></div>
                <textarea placeholder={ 'Enter your message here:' } value={ this.state.textAreaValue } onChange={ this.handleMessageChange } />
                <button onClick={ this.handleClick }>Send</button>
            </div>
        );
    }
}

