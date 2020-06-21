import {combineReducers, createStore} from 'redux';
import chatReducer from './chatReducer'

const reducer = combineReducers({
    chats: chatReducer
});

export function initStore(preloadState = undefined) {
    return createStore(reducer, preloadState);
}