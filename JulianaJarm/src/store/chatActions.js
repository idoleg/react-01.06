import { createActions } from 'redux-actions';

export const {loadingChats, failedLoadedChats, initChats, sendMessage, deleteMessage, createChat, deleteChat} = createActions({
    LOADING_CHATS: () => ({}),
    INIT_CHATS: (data) => ({ data }),
    FAILED_LOADED_CHATS: () => ({}),

    SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
    DELETE_MESSAGE: (chatId, messageId) => ({chatId, messageId}),
    CREATE_CHAT: (id, name) => ({ id, name }),
    DELETE_CHAT: (id) => ({ id }),
})