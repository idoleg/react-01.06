import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css'
import {MessageForm} from "../MessageForm/MessageForm";
import {MessageList} from "../MessageList/MessageList";

export class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    addMessage = (message) => {
        this.setState({ messages: [...this.state.messages, message]});
        this.addBotResponse();
        console.log(this.state.messages);
    }

    addBotResponse = () => {
            let botMessage = {login: 'bot', text: 'Talk to the hand'};
            setTimeout(() => {this.setState({messages: [...this.state.messages, botMessage]})},
                1000);
    }

   render() {
        return (
            <div className="chat" id="chat">
                <MessageList messages={this.state.messages}/>
                {/*<div className="sentMessages">{messages}</div>*/}
                <MessageForm onMessage={this.addMessage} />
            </div>
        );
    }
}
//todo -- ChatList и Chat должны быть расположены рядом друг с другом
// ниже Header так, чтобы Message Field занимал большую часть (например, 30 % на 70 %);
//todo -- прикрепить форму для ввода сообщения к низу экрана
