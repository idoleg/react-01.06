import React from 'react';
import MessageList from './MessageList';
import PropTypes from "prop-types";
import '../chat/styles.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Button from '@material-ui/core/Button';


export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: []},
        },
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Здравствуйте!", sender: 'bot' },
        },
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
 
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
                this.handleSendMessage(this.robotAnswer(), 'bot'), 1000);
        }
    }

    handleSendMessage = (message, sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        if (input.length > 0 || sender === 'bot') {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                    [messageId]: {text: message, sender: sender}},
                chats: {...chats,
                    [chatId]: { ...chats[chatId],
                        messageList: [...chats[chatId]['messageList'], messageId]
                    }
                },
            })
        }
        
        if (sender === 'me') {
            this.setState({ input: '' })
        }
    };
  
    componentWillUnmount() {
        clearTimeout(this.myTimer);
    };
 
    handleClick = (message) => {
        this.handleSendMessage(message,'me')
    };
 
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
     
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(message,'me')
        }
    };

     render() {
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        clearTimeout(this.myTimer);

        const messageListElements = chats[chatId].messageList.map((messageId, index) => (
            <MessageList
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
  
            return (
                <div className="layout">
                    { messageListElements }
     
                    <TextField
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '20px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                    />
                    <Button 
                        fullWidth="true"
                        variant="contained"
                        color="primary"
                        disableElevation onClick={ () => this.handleClick(this.state.input) }>
                        Send
                    </Button>
                </div>
            )
    }
 }