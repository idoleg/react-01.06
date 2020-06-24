import { loadingChats, failedLoadedChats, initChats, sendMessage } from './chatActions'

export const fetchChats = () => async dispatch => {
    dispatch(loadingChats());

    try {
        const response = await fetch('/api/chats.json');
        const result = await response.json();
        dispatch(initChats(result));
    }
    catch(e) {
        dispatch(failedLoadedChats(e.message))
    }

}

export const sendMessageToBot = (botName, id, content) => async dispatch => {
    const formData = new FormData;
    formData.append('query', JSON.stringify({
        userid: id,
        ask: content,
    }));

    const response = await fetch('/bot/', { method: 'POST', body: formData });
    const { aiml } = await response.json();
    dispatch(sendMessage(id, botName, aiml))
}
