import { handleActions } from 'redux-actions';
import { initChats, sendMessage, createChat } from './chatAction';

const initialState = {};

export default handleActions({
    [initChats]: (state, action) => {
      
        return {  
            1: {
                name: 'Chat 1',
                messages: [
                    {name: 'Лена', content: 'Превет!'},
                    {name: 'Оля', content: 'Превет!'},
                    {name: 'Лена', content: 'Как дела?'},
                    {name: 'Оля', content: 'Хорошо'}
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {name: 'Вася', content: 'Превет! Как дела'},
                    {name: 'Петя', content: 'Нормально!'},
                    
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            },
        
    };
    },
    [sendMessage]: (state, action) => {
        const {id, name, content} = action.payload;
        
        return {
            ...state,
            [id]: {
                ...state[id],
                messages: [
                    ...state[id].messages,
                    {name, content}
                ]
            }
        };
    },
    [createChat]: (state, action) => {
       const {id, name} = action.payload;
       return {
           ...state,
           [id]: {
               name,
               messages: [],
           }
       } 
    }
}, initialState)