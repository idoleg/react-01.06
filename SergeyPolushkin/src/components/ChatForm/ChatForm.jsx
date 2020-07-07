import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class ChatForm extends Component {

    state = {
        content: '',
        name: '',
    }

    static propTypes = {        
        onSendMessage: PropTypes.func.isRequired,
    }

    handleSubmit = (event) => {
        let { name, content } = this.state;
        event.preventDefault();
        this.props.onSendMessage({ name, content });
        this.setState({ name: '', content: '' });
    }

    handleChange = (event) => {        
        if (event.target.id === 'name') {            
            this.setState({ name: event.target.value });
        }            
        else {
            this.setState({ content: event.target.value });
        }            
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSubmit(event);
        }
    }

    render() {
        return (
            <form>                
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <TextField
                    id="content"    
                    label="Your Message"
                    multiline
                    rows={4}
                    placeholder="Your message"
                    variant="outlined"
                    value={this.state.content}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                />
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Send
                </Button>
            </form>
        );
    }
}