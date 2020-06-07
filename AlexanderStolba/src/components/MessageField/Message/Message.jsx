import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,

    }

    render() {
        return <>
            <strong>{ this.props.text }</strong>
            </>
    }
}