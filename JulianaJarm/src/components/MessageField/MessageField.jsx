import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
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

   handleKeyUp = (event) =>{
        if (event.keyCode === 13) {
            this.handleMessageSend();
        }
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
       if (this.state.textAreaValue === '' && this.state.messages.length % 2 !== 0) {
           let message = {login: 'Robot', text: 'Talk to the hand'};
           setTimeout(() => {this.setState({messages: [...this.state.messages, message]})},
               1000);
       }
   }
   render() {
        let messages = this.state.messages.map((message, index) => (
            <Message author={ message.login } text={ message.text } key={ index } />
            ));
        return (
            <div>
                <div>{messages}</div>
                <div>
                    <input
                        type="text"
                        placeholder="Login"
                        value={ this.state.login }
                        onChange={ this.handleLoginChange } />
                </div>
                <textarea
                    placeholder={ 'Enter your message here:' }
                    value={ this.state.textAreaValue }
                    onChange={ this.handleMessageChange }
                    onKeyUp={this.handleKeyUp} />
                <button onClick={ this.handleMessageSend }>Send</button>
            </div>
        );
    }
}
//todo ?? перенести логику формы для ввода сообщения и логина в ChatForm
//todo ?? Chat будет содержать чат-форму и список отправленных и полученных сообщений MessageList
//todo ?? Chat - для отрисовки вертски. ChatContainer - для всей логики, все, кроме верстки
//todo * Создать новые компоненты: Layout, ChatList и Header.
//todo -- Layout должен быть вверху приложения (подключаться в index.jsx), а ChatList, Header и MessageField внутри него;
//todo -- Header должен быть вверху Layout и занимать всю ширину;
//todo -- ChatList и MessageField должны быть расположены рядом друг с другом ниже Header так, чтобы Message Field занимал большую часть (например, 30 % на 70 %);
//todo -- ChatList должен только визуально отражать список из 3–5 чатов (назовите их как угодно) и пока не несет никакой функциональности. Переключение между чатами реализовывать не нужно;
//todo ++ Для верстки ChatList использовать List из Material-UI.
