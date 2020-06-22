export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const ADD_MESSAGE = '@@message/ADD_MESSAGE';

export const sendMessage = (messageId, text, name, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    name,
    chatId,
});

export const addMessage = (text, name) => ({
    type: ADD_MESSAGE,
    text,
    name
});