import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer';

const reducer = combineReducers({
   chats: chatReducer
})

export function initStore(preloadedState = undefined) {
   
   return createStore(
      reducer,
      preloadedState,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
      )
}