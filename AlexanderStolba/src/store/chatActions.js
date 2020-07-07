import { createActions } from 'redux-actions';

export const {loadingChats, failedLoadedChats, initChats, sendMessage, createChat} = createActions({
    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (messages) => ({messages}),
    INIT_CHATS: (data) => ({ data }),
    SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
    CREATE_CHAT: (id, name) => ({ id, name }),
}) 
