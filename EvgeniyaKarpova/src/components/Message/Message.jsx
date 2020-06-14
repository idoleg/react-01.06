import React, {Component} from "react";
import PropTypes from "prop-types";

//export const Message = ({name, content}) => <li><strong>{name}:</strong> {content}</li>;

export default class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {     
        return <li><strong>{this.props.text.name}:</strong> {this.props.text.content}</li>
    }
 }
 