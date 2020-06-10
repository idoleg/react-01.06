import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
     render() {
         let className = this.props.author === 'bot' ? 'botMessage' : 'userMessage';
        return <p className={className}>
            <b className="author">{this.props.author}:</b>
            <span className="messageText">{this.props.text}</span>
        </p>
     }
}
