import {createActions} from "redux-actions"

export const {loadingChats,initChats, sendMessage, addChat }=createActions({
    LOADING_CHATS: () => ({}),
    INIT_CHATS: (data) => ({data}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (id, name) => ({id, name}),
})