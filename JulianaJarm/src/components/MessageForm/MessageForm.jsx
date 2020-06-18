import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import React from "react";

export class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaValue: '',
            login: '',
        };
    }

    handleMessageSend () {
         let message = {name: this.state.login, content: this.state.textAreaValue};
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
            <form className="messageForm">
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    className="loginInput"
                    value={ this.state.login }
                    onChange={ this.handleLoginChange }
                />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    label="Message"
                    className="messageInput"
                    value={ this.state.textAreaValue }
                    onChange={ this.handleMessageChange }
                    onKeyUp={this.handleKeyUp}
                />
                <Button variant="contained" color="primary" onClick={ this.handleClick }>SEND</Button>
            </form>
        )
    }
}

