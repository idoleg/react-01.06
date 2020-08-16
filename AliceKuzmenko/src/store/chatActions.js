import {createActions} from "redux-actions"

export const {loadingChats,failedLoadedChats,initChats, sendMessage, addChat }=createActions({
    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (message) => ({message}),
    INIT_CHATS: (data) => ({data}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (id, name) => ({id, name}),
})