import {loadingChats, failedLoadedChats, initChats, sendMessage} from './chatAction';

export const fetchChats = () => async dispatch => {
    dispatch(loadingChats());

  try {
    const response = await fetch('api/chats.json');
    if(!response.ok) {
        throw new Error('Error with status ' + response.status)
    }
    const result = await response.json();
    dispatch(initChats(result));
  } catch(e) {
      dispatch(failedLoadedChats(e.message));
  }
}

export const sendMessageToBot = (botName, id, content) => async dispatch => {
    const formData = new FormData;
    formData.append('query', JSON.stringify({
        ask: content,
        userid: id,
    }))
    const response = await fetch('/bot/', {method: 'post', body: formData});
    const {aiml} = await response.json();
    dispatch(sendMessage(id, botName, aiml));
}