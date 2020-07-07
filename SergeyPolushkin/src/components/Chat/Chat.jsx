import React, { Component } from 'react';
import { ChatForm } from '../ChatForm/ChatForm'
import { MessageList } from '../MessageList/MessageList';
import PropTypes from 'prop-types';

export class Chat extends Component {

    static propTypes = {
        messages: MessageList.propTypes.messages,
        onSendMessage: PropTypes.func.isRequired,
    }

    render() {
        let { messages, onSendMessage } = this.props;

        return (
            <main>                
                <MessageList messages={messages} />
                <ChatForm onSendMessage={onSendMessage}/>
            </main>
        )
    }
}