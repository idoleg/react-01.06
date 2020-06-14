import React from "react";
import Message from "../Message/Message";

export class MessageList extends React.Component {
    render() {
        return this.props.messages.map((message, index) => (
            <Message author={ message.login } text={ message.text } key={ index } />
        ));
    }
}