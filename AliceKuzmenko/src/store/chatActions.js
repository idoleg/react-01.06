import {createActions} from "redux-actions"

export const {initChats, sendMessage, addChat }=createActions({
    //, addChat
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (id, name) => ({id, name}),
})