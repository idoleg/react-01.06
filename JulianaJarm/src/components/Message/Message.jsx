import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }
     render() {
        return <p><b>{this.props.author}:</b>{this.props.text}</p>
     }

}
