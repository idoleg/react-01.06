import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer'

const reducer = combineReducers({
    chats: chatReducer
})
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export function initStore(preloadedState = undefined) {
    return createStore(reducer, preloadedState, devTools);
}