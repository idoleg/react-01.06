import { handleActions } from "redux-actions";
import { loadingChats, failedLoadedChats, initChats, sendMessage, deleteMessage, createChat, deleteChat } from "./chatActions";

const initialState = {};

export default handleActions({
    [loadingChats]: (state, action) => {
        return {
            isLoading: true,
            error: null,
        }
    },

    [failedLoadedChats]: (state, action) => {
        return {
            isLoading: false,
            error: action.payload.message,
        }
    },

    [initChats]: (state, action) => {

        return {
            ...action.payload,
            isLoading: false,
            error: null,
        };
    },

    [sendMessage]: (state, action) => {
        const { id, name, content } = action.payload;
        return {
            ...state,
            [id]: {
                ...state[id],
                messages: [
                    ...state[id].messages,
                    { name, content }
                ]
            }
        }
    },

    [deleteMessage]: (state, action) => {
        const { chatId, messageId } = action.payload;
        let messages = state[chatId].messages;
        messages.splice(messageId, 1)
        return {
            ...state,
            [chatId] : {
                ...state[chatId],
                messages: [
                    ...messages
                ]
            }
        }
    },

    [createChat]: (state, action) => {
        const { id, name } = action.payload;
        return {
            ...state,
            [id]: {
                name: name,
                messages: [],
            }
        }
    },

    [deleteChat]: (state, action) => {
        const {id} = action.payload;
        delete state[id];
        return {
            ...state
        }
    },


}, initialState);