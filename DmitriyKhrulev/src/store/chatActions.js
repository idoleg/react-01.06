import { createActions } from 'redux-actions';

export const { loadingChats, initChats, failedLoadedChats, sendMessage, createChat } = createActions({
    LOADING_CHATS: () => ({}),
    INIT_CHATS: (data) => ({ data }),
    FAILED_LOADED_CHATS: (message) => ({ message }),
    SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
    CREATE_CHAT: (id, name) => ({ id, name }),
});