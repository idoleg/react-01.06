import { handleActions } from 'redux-actions';
import { initChats, sendMessage, createChat } from './chatActions'


const initialState = {};

export default handleActions({
    [initChats]: (state, action) => {
        return {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: 'Ivan', content: 'Hello, friend!' },
                    { name: 'Oleg', content: 'Hi!' },
                    { name: 'Ivan', content: 'How are you?' },
                    { name: 'Oleg', content: 'I\'m fine' },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: 'Dima', content: 'It\'s chat 2' },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
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
        };
    },
    [createChat]: (state, action) => {
        const { id, name } = action.payload;
        return {
            ...state,
            [id]: {
                name,
                messages: [],
            }
        }
    }
}, initialState);