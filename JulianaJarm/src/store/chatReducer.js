import { handleActions } from "redux-actions";
import { initChats, sendMessage, deleteMessage, createChat, deleteChat } from "./chatActions";

const initialState = {};

export default handleActions({
    [initChats]: (state, action) => {

        return {
                1: {
                    name: 'Chat 1',
                    messages: [
                        {name: 'Legolas', content: 'Hello'},
                        {name: 'Gangalf', content: 'Hi'},
                        {name: 'Gimli', content: 'Morning'},
                    ]
                },
                2: {
                    name: 'Chat 2',
                    messages: [
                        {name: 'Rick', content: 'Come on, Morty, 20 minute adventure'},
                        {name: 'Morty', content: 'No, Rick, I am not going'},
                        {name: 'Jerry', content: 'I will not let you take my son'},
                        {name: 'Rick', content: 'Fuck you, Jerry, get a job'},
                    ]
                },
                3: {
                    name: 'Chat 3',
                    messages: []
                },


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
    }


}, initialState);