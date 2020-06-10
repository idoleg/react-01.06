import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
     render() {
        return <p className="messageBlock">
            <b className="author">{this.props.author}:</b>
            <span className="messageText">{this.props.text}</span>
        </p>
     }

}
