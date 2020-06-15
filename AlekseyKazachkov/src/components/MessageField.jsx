import React from 'react';
import PropTypes from "prop-types";
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import "../styles/style.css";

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

    textInput = React.createRef();

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
               this.handleClick('Не приставай ко мне, я робот!', 'bot'), 1000);
        }
    }

   handleClick = (message, sender) => {
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
            this.setState({ input: '' });
        }
    };
 
   handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
   };

   handleKeyUp = (e) => {
       if (e.keyCode == 13) {
        this.handleClick(this.state.input, 'me');
       }
   };

   render() {

        const { messages, chats } = this.state;
        const { chatId } = this.props;

        const messageElements = chats[chatId].messageList.map((messageId, index) => (
           <Message
               key={ messageId }
               text={ messages[messageId].text }
               sender={ messages[messageId].sender }
           />));

       return (
            <div className="wrap-message-field">
                <div className="message-field">
                    { messageElements }
                </div>
                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                    hintText="Hint Text"
                    fullWidth={true}
                    name="input"
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={this.handleKeyUp}
                    ref={this.textInput}
                    />
                    <FloatingActionButton onClick={ () => this.handleClick(this.state.input, 'me') }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
       )
   }
}