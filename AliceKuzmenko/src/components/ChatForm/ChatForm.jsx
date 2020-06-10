import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ChatForm.css'

function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.target.value);
    }

    return [state, setInput, setState];
}

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput("Me");
    const [content, setContent, setContentState] = useInput("");

    const handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    const handleSubmit = (event) => {
        //alert('Отправленное имя: ' + this.state.value);
        onSendMessage({ name, content});
        event.preventDefault();
        setContentState("");

    }
    const handleKeyUp = (event) => {
        console.log("event")
        if (event.keyCode === 13) { // Enter
            this.handleSubmit(event);
        }
     };
    return (
        <form>
            <TextField
                label="Name"
                variant="outlined"
                placeholder="Name"
                value={name}
                onChange={setName}
            />
            <TextField
                label="Content"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Your message"
                value={content}
                onChange={setContent}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit}
                onKeyUp = { (event) => handleKeyUp(event) }
            >
                Send
            </Button>
        </form>
    )
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}