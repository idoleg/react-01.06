import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  const setInput = (event) => {
    setState(event.target.value);
  };

  return [state, setInput, setState];
};

export const ChatForm = ({ messages, onSendMessage }) => {
  const [name, setName] = useInput('Мария');
  const [content, setContent, setContentState] = useInput('');

  const sendingActions = () => {
    onSendMessage({ id: messages.length, name, content });
    setContentState('');
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //Отмена поведения по умолчанию
    sendingActions();
  };

  const handleKeyUp = (event) => {
    event.keyCode === 13 && sendingActions();
  };

  return (
    <form className="message-box">
      <TextField
        label="Имя"
        variant="outlined"
        placeholder="Имя"
        value={ name }
        onChange={ setName }
      />
      <TextField
        label="Сообщение"
        multiline
        rows={4}
        placeholder="Введите текст сообщения"
        variant="outlined"
        value={ content }
        onChange={ setContent }
        onKeyUp={ handleKeyUp }
      />
      <Button 
        variant="contained"
        color="primary"
        onClick={ handleSubmit }
      >
        Отправить
      </Button>
    </form>
  );
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}