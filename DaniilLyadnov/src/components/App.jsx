import React, {Component} from 'react';
import {MessageField} from "./MessageField/MessageField";

export class App extends Component {

    state = {
        messages: [
            {role: 'user', name: 'Ivan', content: 'Hello, friend!'},
            {role: 'user', name: 'Oleg', content: 'Hi!'},
            {role: 'user', name: 'Ivan', content: 'How are you?'},
            {role: 'user', name: 'Oleg', content: 'I\'m fine'},
        ],
    };

    addMessage = (author, messageText) => {
        this.setState(() => ({
            messages: [...this.state.messages, {role: 'user', name: author, content: messageText}]
        }))
    };

    componentDidUpdate() {
        // console.log('componentDidUpdate');
        // console.log(this.state.messages[this.state.messages.length - 1].role === 'robot');

        if (this.state.messages[this.state.messages.length - 1].role !== 'robot') {
            setTimeout(() =>
                this.setState({
                    messages: [...this.state.messages, {
                        role: 'robot',
                        name: 'robot',
                        content: 'Прости ' + this.state.messages[this.state.messages.length - 1].name + ', я робот!'
                    }]
                }), 1000);
        }
    }

    render() {
        // console.log(this.state.messages);

        return (
            <MessageField messages={this.state.messages} addMessage={this.addMessage}/>
        );
    };
}