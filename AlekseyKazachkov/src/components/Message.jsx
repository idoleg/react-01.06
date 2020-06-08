import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };

    UNSAFE_componentWillMount() {
        console.log('Message componentWillMount');
    }

    componentDidMount() {
        console.log('Message componentDidMount');
    }

    componentDidUpdate() {
        console.log('Message componentDidUpdate');
    }

    render() {
        console.log("Message rander");
        return ( <
            div >
            <
            div > {
                this.props.sender
            } < /div> <
            div > {
                this.props.text
            } < /div> <
            /div>
        )
    }
}
