import './Message.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ROBOT_NAME } from '../../containers/ChatContainer'

export class Message extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        let { name, content } = this.props;
        let isRobot = (name === ROBOT_NAME) ? 'message-robot' : '';
        return <li className={'message ' + isRobot}><strong>{name}</strong>: {content}</li>;
    }
}