import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInput from '../../hooks/useInput';

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput("Oleg");
    const [content, setContent, setContentState] = useInput("");

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
                rows={4}
                placeholder="Type text of message"
                value={content}
                onChange={setContent}
            />
            <Button 
                variant="contained" 
                color="primary" 
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

// onChange={event => setContent(event.target.value)}
