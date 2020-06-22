import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.target.value);
    }

    return [state, setInput, setState];
}

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput("Оля");
    const [content, setContent, setContentState] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault(); // отмена поведения по умолчанию(перезагрузка)
        onSendMessage({ name, content });
        setContentState("");
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            onSendMessage({ name, content });
            setContentState("");
        }
     };
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          color: 'white',
          height: 55,
          padding: '0 30px',
        },
      });

      const classes = useStyles();
    return (
        <form>
            <TextField
                label="Имя"
                variant="outlined"
                placeholder="Name"
                value={name}
                onChange={setName}
            />
            <TextField
                label="Текст"
                variant="outlined"
                multiline
                rows={1}
                placeholder="Текст сообщения"
                value={content}
                onChange={setContent}
                onKeyUp={handleKeyUp}
            />
            <Button 
                //variant="outlined" 
                // color="primary" 
                // size="large"
                className={classes.root}
                onClick={handleSubmit}
              
            >
                Отправить
            </Button>
        </form>
    )
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}