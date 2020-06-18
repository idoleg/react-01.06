export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, name, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    name,
    chatId,
});