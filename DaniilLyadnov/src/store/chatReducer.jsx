import {handleActions} from 'redux-actions';
import {initChats, sendMessage} from "./chatActions";

const initialState = {};

export default handleActions({
    [initChats]: (state, action) => {
        return {
            1: {
                name: 'Chat 1',
                messages: [
                    {role: 'user', name: 'Ivan', content: 'Hello, friend!'},
                    {role: 'user', name: 'Oleg', content: 'Hi!'},
                    {role: 'user', name: 'Ivan', content: 'How are you?'},
                    {role: 'user', name: 'Oleg', content: 'I\'m fine'},
                ],
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {role: 'user', name: 'Ivan', content: 'Hello, friend!'},
                ],
            },
            3: {
                name: 'Chat 3',
                messages: [],
            }
        };
    },
    [sendMessage]: (state, action) => {
        console.log(state, action);
        const {id, role, name, content} = action.payload;
        return {
            ...state,
            [id]: {
                ...state[id],
                messages: [
                    ...state[id].messages,
                    {role, name, content}
                ]
            }
        };
    },
}, initialState);