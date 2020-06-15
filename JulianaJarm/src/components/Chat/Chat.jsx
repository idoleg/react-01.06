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
    }

    addBotResponse = () => {
        let botMessage = {login: 'bot', text: 'Talk to the hand'};
        setTimeout(() => {this.setState({messages: [...this.state.messages, botMessage]})},
            5000);
    }

   render() {
        return (
            <div className="chat" id="chat">
                <MessageList messages={this.state.messages}/>
                <MessageForm onMessage={this.addMessage} />
            </div>
        );
    }
}


