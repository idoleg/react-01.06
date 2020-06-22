import './Message.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };
    render(){
        
    return <div
        className="message"
        style={{alignSelf: this.props.name === 'Robot' ? 'flex-start':'flex-end'}}
    >
        <div>{this.props.text}</div>
        <div className="message-sender">{this.props.name}</div>

    </div>
    }
}