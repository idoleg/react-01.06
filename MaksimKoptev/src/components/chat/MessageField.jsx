import React from 'react';
import Message from './Message';
import '../chat/styles.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Button from '@material-ui/core/Button';


export default class MessageField extends React.Component {
    state = {
        messageList: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
        input: '',
    };

    robotAnswer() {
        const answers = 
        [
            "Я устал!"
            ,"Сам такой"
            ,"У меня обед"
            ,"Власть машинам!!!"
            ,"Я робот :("
            ,"Это я User, а ты робот"
        ];
        return answers[Math.floor(Math.random()*answers.length)]
    }

    sendMessage = (message) => {
        if (message != '') {
            this.setState({ 
                messageList: [ ...this.state.messageList, {text: message, sender: 'user'} ],
                input: '',
            });
        }
    }; 

    componentDidUpdate() {
        if (this.state.messageList[this.state.messageList.length - 1].sender === 'user') {
            this.myTimer = setTimeout(() => this.setState({ messageList: [ ...this.state.messageList, {text: this.robotAnswer(), sender: 'bot' }]}),1000);
        }
     }
 
    componentWillUnmount() {
        clearTimeout(this.myTimer);
    };
 
    handleClick = (message) => {
        this.sendMessage(message)
    };
 
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
     
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message)
        }
    }; 

    render() {
        clearTimeout(this.myTimer);

        const messageElements = this.state.messageList.map((message, index) => (
            <Message key={ index } text={ message.text } sender={message.sender}/>));
 
            return <div>
            <div className="message-field">
                { messageElements }
            </div>
            <div>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '20px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <Button variant="contained" color="primary" disableElevation onClick={ () => this.handleClick(this.state.input) }>
                    Send
                </Button>
            </div>
        </div>
    }
 }