import './MessageList.css'

import React, { Component } from 'react';
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';

export class MessageList extends Component {

    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
    }

    render() {
        const messageElements = this.props.messages.map((item, index) => (
            <Message key={index} name={item.name} content={item.content} />
        ));

        return (
            <ul className="message-list">
                {messageElements}
            </ul>
        )
    }
}