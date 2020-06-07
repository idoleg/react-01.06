import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Message extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };
    render() {
        return <li><strong style={{marginRight: '5px'}}>{ this.props.name }</strong>{this.props.text}</li>
    }
}