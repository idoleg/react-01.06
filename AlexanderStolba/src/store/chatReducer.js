import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from './chatActions'

const initialState = {}

export default handleActions ({
    
    [initChats]: (state, action) => {
        return {
                1: {
                    name: "Chat 1",
                    messages: [
                        { name: 'Alex', content: 'Hello!' },
                        { name: 'Ivan', content: 'Hi!' },
                        { name: 'Alex', content: 'How are you?' },
                        { name: 'Ivan', content: 'Fine, and wbu?' },
                    ]
                },
    
                2: {
                    name: "Chat 2",
                    messages: [
                        { name: 'Dima', content: 'Hello!' },
                        { name: 'Oleg', content: 'Hi!' },
                        { name: 'Dima', content: 'What is the weather like?' },
                        { name: 'Oleg', content: 'Wonderful!' },
                    ]
                },
    
                3: {
                    name: "Chat 3",
                    messages: [
                        
                    ]
                },
    
                4: {
                    name: "Chat 4",
                    messages: [
                        { name: 'Messenger Bot', content: 'It is chat 4' },
                    ]
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
        }
    }
}, initialState)