import { handleActions } from 'redux-actions';
import { initChats, sendMessage, createChat } from './chatActions'

const initialState = {};

export default handleActions({
   [initChats]: (state, action) => {
    
      return {
         1: {
            name: 'Chat 1',
            messages: [
               { name: 'Ivan', content: 'Hello' },
               { name: 'Gref', content: 'Hi' },
            ],
         },
         2: {
            name: 'Chat 2',
            messages: [
               { name: 'Pupu', content: 'Good day' },
               { name: 'Medved', content: 'Ola' },
            ],
         },
         3: {
            name: 'Chat 3',
            messages: [],
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
}, initialState)