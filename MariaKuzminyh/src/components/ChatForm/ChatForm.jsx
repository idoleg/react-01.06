import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInput from '../../hooks/useInput';

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useInput('Мария');
  const [content, setContent, setContentState] = useInput('');

  const sendingActions = () => {
    onSendMessage({ name, content });
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