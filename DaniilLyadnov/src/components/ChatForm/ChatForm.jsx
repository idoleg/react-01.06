import './ChatForm.css';
import React, {useState} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.target.value);
    };

    return [state, setInput, setState];
}

export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useInput('');
    const [content, setContent, setContentState] = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (content.trim() !== '') {
            onSendMessage({name, content});
            setContentState('');
        }
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (content.trim() !== '') {
                onSendMessage({name, content});
                setContentState('');
            }
        }
    };

    return (
        <form className={'chat-form'}>
            <TextField
                className={"input-name"}
                label="Name"
                variant="outlined"
                placeholder="Name"
                value={name}
                onChange={setName}
            />

            <TextField
                className={"input-content"}
                label="Content"
                multiline
                variant="outlined"
                placeholder="Type text of message"
                value={content}
                onChange={setContent}
                onKeyUp={handleKeyUp}
            />

            <IconButton
                aria-label="delete"
                onClick={handleSubmit}
            >
                <SendRoundedIcon />
            </IconButton>
        </form>
    )
};

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};