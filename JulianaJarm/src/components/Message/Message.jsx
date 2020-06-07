import React from 'react';

export default class Message extends React.Component {
     render() {
        return <p><b>{this.props.author}:</b>{this.props.text}</p>
     }

}
