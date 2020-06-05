import React, { createElement } from 'react';

export default class Message extends React.Component {
     render() {
        return <p>{this.props.text}</p>
     }

}
