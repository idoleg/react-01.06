import { handleActions } from 'redux-actions';
import { loadingChats, failedLoadedChats, initChats, sendMessage, createChat } from './chatActions'


const initialState = {
   items: {},
   isLoading: false,
   error: null
};

export default handleActions({
   [loadingChats]: (state, action) => {
      return {
         items: {},
         isLoading: true,
         error: null
      }
   },

   [failedLoadedChats]: (state, action) => {
      return {
         items: {},
         isLoading: false,
         error: action.payload.message
      }
   },

   [initChats]: (state, action) => {
      return {
         items: action.payload.data,
         isLoading: false, 
         error: null 
      }
   },
   [sendMessage]: (state, action) => {
      
      const { id, name, content } = action.payload;
      return {
         ...state,
         items: {
            ...state.items,
            [id]: {
               ...state.items[id],
               messages: [
                  ...state.items[id].message,
                  { name, content }
               ]
            }
         }
      };
   },
   [createChat]: (state, action) => {
      const { id, name } = action.payload;
      return {
         ...state,
         items: {
            ...state.items,
            [id]: {
               name,
               messages: [],
            }
         }
      }
   }
}, initialState)