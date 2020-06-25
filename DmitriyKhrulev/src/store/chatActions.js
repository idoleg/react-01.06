import { createActions } from 'redux-actions';

export const {initChats, sendMessage, createChat, login} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
    CREATE_CHAT: (id, name) => ({ id, name }),
    LOGIN: (id, name, mail, phone) => ({id, name, mail, phone}),
    LOGOUT: (id) => ({id})
});