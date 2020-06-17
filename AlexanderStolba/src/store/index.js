import { createStore, combineReducers } from 'redux';
import chatReducer  from './chatReducer';

const reducer = combineReducers({
    chats: chatReducer
})



export function initStore(preloadedStore = undefined) {
    return createStore(reducer, preloadedStore)
}