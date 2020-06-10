import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FloatingActionButton, Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../../styles/styles.css'
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
    }

    handleMessageSend = () => {
        let message = {login: this.state.login, text: this.state.textAreaValue};
        this.setState({ textAreaValue: '', messages: [...this.state.messages, message], login: ''});

    }

   handleMessageChange = (event) => {
       this.setState({ textAreaValue: event.target.value });
   }

   handleLoginChange = (event) => {
        this.setState({ login: event.target.value });
   }

   handleClick = () => {
        this.handleMessageSend();
   }

   handleKeyUp = (event) =>{
        if (event.keyCode === 13) {
            this.handleMessageSend();
        }
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
       if (this.state.textAreaValue === '' && this.state.messages.length % 2 !== 0) {
           let message = {login: 'bot', text: 'Talk to the hand'};
           setTimeout(() => {this.setState({messages: [...this.state.messages, message]})},
               1000);
       }
   }
   render() {
        let messages = this.state.messages.map((message, index) => (
            <Message author={ message.login } text={ message.text } key={ index } />
            ));

        return (
            <div className="messageField">
                <div className="sentMessages">{messages}</div>
                <form>
                    <TextField
                        name="input"
                        fullWidth={ false }
                        type="text"
                        hintText="Your login"
                        className="loginInput"
                        value={ this.state.login }
                        onChange={ this.handleLoginChange } />

                    <TextField
                        fullWidth={ true }
                        name="message"
                        hintText="Write your message here..."
                        className="messageInput"
                        style={{fontSize: 20}}
                        value={ this.state.textAreaValue }
                        onChange={ this.handleMessageChange }
                        onKeyUp={this.handleKeyUp} />
                    <FloatingActionButton onClick={ this.handleClick } >
                        <SendIcon />
                    </FloatingActionButton>
                </form>
            </div>
        );
    }
}
//todo -- ChatList и MessageField должны быть расположены рядом друг с другом ниже Header так, чтобы Message Field занимал большую часть (например, 30 % на 70 %);
//todo -- прикрепить форму для ввода сообщения к низу экрана
