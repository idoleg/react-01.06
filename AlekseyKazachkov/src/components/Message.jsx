import React from 'react';
import PropTypes from 'prop-types';
import "../styles/style.css";

export default class Message extends React.Component {
   static propTypes = {
       text: PropTypes.string.isRequired,
       sender: PropTypes.string.isRequired,
   };

    UNSAFE_componentWillMount() {
        // console.log('Message componentWillMount');
    }

    componentDidMount() {
        // console.log('Message componentDidMount');
    }

    componentDidUpdate() {
        // console.log('Message componentDidUpdate');
    }

   render() {
    // console.log("Message rander");
       return (
            <div className="message" style={{
                alignSelf: this.props.sender === "bot" ? "flex-start" : "flex-end"
            }}>
                <div className="message-sender">{this.props.sender}</div>
                <div>{ this.props.text }</div>
            </div>
        )
   }
}