import React, { Component } from 'react'
import Message from '../Message/Message'

export default class MessageField extends Component {
    state = {
        messages: [{
            name: "Dog",
            text: "How are you?"
        },
        {
            name: "cat",
            text: "No"
        }
        ]
    }

    handleClick = () => {
        this.setState({ messages: [...this.state.messages, {'name': 'User', 'text':'Проблема'}]});
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 == 1) {
            setTimeout(() =>
            this.setState(
                { messages: [...this.state.messages, {'name': 'Robot', 'text':'Что случилось?'}]}),
            1000);
        }
    }

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} {...text}/>
        ));

        return (
            <div>
                { messageElements }
                <button onClick={ this.handleClick }>Send</button>
            </div>
        )
    }
}