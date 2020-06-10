import React, { useState } from 'react';
import './ChatForm.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.target.value);
    }

    return [state, setInput, setState];
}

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput("Alex");
    const [content, setContent, setContentState] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage({ name, content });
        setContentState("");
    }
    
    const handleKeyUp = (event) => {

        if (event.keyCode === 13) {
            event.preventDefault();
            onSendMessage({ name, content });
            setContentState("");
        }
    }

    return (
        <form>
            <TextField 
            id="standard-basic"
            label="Name"
            placeholder="Name:"
            value={name}
            onChange={setName} 
            />
   
            <TextField
            id="standard-textarea"
            label="Content"
            multiline
            rows={4}
            placeholder="Your message:"
            value={content}
            onChange={setContent}
            className="second-textarea"
            onKeyUp={handleKeyUp}
            />
            
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleSubmit}
            >
                Send
            </Button>
        </form>
    )
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}