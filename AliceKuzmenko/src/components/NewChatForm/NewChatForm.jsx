import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './NewChatForm.css'

function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.target.value);
    }

    return [state, setInput, setState];
}

export const NewChatForm = ({onNewChat}) => {
    const [name, setName] = useInput("Chat");

    const handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    const handleSubmit = (event) => {
        //alert('Отправленное имя: ' + this.state.value);
        console.log(onNewChat)
        onNewChat(name);
        console.log(name)
        event.preventDefault();
        //setContentState("");

    }
    const handleKeyUp = (event) => {
        //console.log("event")
        if (event.keyCode === 13) { // Enter
            handleSubmit(event);
        }
     };
    return (
        <form>
            <strong className="no-chat">Chat does not exist</strong>
            <TextField
                label="Name"
                variant="outlined"
                placeholder="Name"
                value={name}
                onChange={setName}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit}
                
            >
                Create
            </Button>
        </form>
    )
}

NewChatForm.propTypes = {
    onNewChat: PropTypes.func.isRequired,

}

//onNewChatCreate