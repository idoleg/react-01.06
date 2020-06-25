import React from 'react';

export default class Message extends React.Component {
     render() {
         let className = this.props.name === 'bot' ? ' botMessage' : ' userMessage';
         return (
            <div className="messageContainer">
                <div className={ className }>
                    <b>{ this.props.name }: </b>
                    <span className="messageText">{ this.props.content }</span>
                    <button onClick={this.props.deleteMessage}>X</button>
                </div>
            </div>
            )
     }
}
