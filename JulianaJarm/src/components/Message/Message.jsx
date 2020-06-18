import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
     render() {
         let className = this.props.name === 'bot' ? ' botMessage' : ' userMessage';
         return (
            <div className="messageContainer">
                <div className={className}>
                    <b>{this.props.name}: </b>
                    <span className="messageText">{this.props.content}</span>
                </div>
            </div>
            )
     }
}

// Message.propTypes = {
//     author: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
// }