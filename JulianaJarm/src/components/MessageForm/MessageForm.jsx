import {FloatingActionButton, TextField} from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import React from "react";


export class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaValue: '',
            login: '',
        };
    }

    handleMessageSend = () => {
        let message = {login: this.state.login, text: this.state.textAreaValue};
        this.props.onMessage(message);
        this.setState({ login: '', textAreaValue: ''});
    }

    handleMessageChange = (event) => {
        this.setState({ textAreaValue: event.target.value });
    }

    handleLoginChange = (event) => {
        this.setState({ login: event.target.value });
    }

    handleClick = () => {
        this.handleMessageSend();
    }

    handleKeyUp = (event) =>{
        if (event.keyCode === 13) {
            this.handleMessageSend();
        }
    }

    render () {
        return (
            <form>
                <TextField
                    name="input"
                    fullWidth={ false }
                    type="text"
                    hintText="Your login"
                    className="loginInput"
                    value={ this.state.login }
                    onChange={ this.handleLoginChange } />

                <TextField
                    fullWidth={ true }
                    name="message"
                    hintText="Write your message here..."
                    className="messageInput"
                    style={{fontSize: 20}}
                    value={ this.state.textAreaValue }
                    onChange={ this.handleMessageChange }
                    onKeyUp={this.handleKeyUp} />
                <FloatingActionButton onClick={ this.handleClick } >
                    <SendIcon />
                </FloatingActionButton>
            </form>
        )
    }
}