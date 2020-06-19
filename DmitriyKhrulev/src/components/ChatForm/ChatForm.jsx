import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './ChatForm.css'


function useInput(initialState) {
   const [state, setState] = useState(initialState);

   const setInput = e => {
      setState(e.target.value);
   }

   return [state, setInput, setState];
}

export const ChatForm = ({ onSendMessage }) => {
   const [name, setName, setNameState] = useInput('Dima');
   const [content, setContent, setContentState] = useInput('')

   const handleSubmit = (e) => {
      e.preventDefault();
      onSendMessage({ name, content });
      setContentState('');
      // setNameState('');
   }

   const handleKeyUp = (e) => {
      if (e.keyCode === 13) {
         e.preventDefault();
         onSendMessage({ name, content });
         setContentState('');
         // setNameState('');
      }


   }

   return (
      <form className='send-form' onSubmit={handleSubmit}>
         <TextField className='name-form'
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Имя"
            value={name}
            onChange={setName}
         />

         <TextField 
            onKeyUp={e => handleKeyUp(e, content)}
            className='content-form'
            id="outlined-multiline-static"
            label="Введите собщение"
            placeholder="Введите собщение"
            multiline
            rowsMax={4}
            value={content}
            onChange={setContent}
            variant="outlined"
         />
         <Button onClick={handleSubmit} variant='contained' color="primary"> Отправить </Button>
      </form>
   );
}

ChatForm.propTypes = {
   onSendMessage: PropTypes.func.isRequired,
}