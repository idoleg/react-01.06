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
    const [name, setName] = useInput("Oleg");
    const [content, setContent, setContentState] = useInput("");

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            onSendMessage({ name, content });
            setContentState("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage({ name, content });
        setContentState("");
    }

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
                placeholder="Type text of message"
                value={content}
                onChange={setContent}
                style={{width:'100vh'}}
                onKeyUp={handleKeyUp}
            />
            <Button 
                variant="outlined" 
                color="primary"
                size="medium"
                onClick={handleSubmit}
            >
                Send
            </Button>
        </form>
    )
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    handleKeyUp: PropTypes.func.isRequired,
}