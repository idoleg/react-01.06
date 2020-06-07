import React, { Component, Fragment } from "react";
import { Message } from "./Message/Message";


export class MessageField extends Component {
    state = {
        messages: ["Hello!", "How are you?"]
    }

    //styles
    TextStyle = {
        color: 'blue',
        margin: '15px'
    }

    handleClick = (event) => {
        this.setState({messages: [ ...this.state.messages, "Fine" ] });
        console.log(event)
    }

    render() {
        const messageElements = this.state.messages.map((text, index, style) => (
            <Message key = { index } text = { text } style = { this.TextStyle } />));
 
        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Send message</button>
        </div>
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, 'I am bot!' ] }) ,1000)
        }
    }
}