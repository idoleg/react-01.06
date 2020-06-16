import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer'

const reducer = combineReducers({
    chats: chatReducer
});

export function initStore(preloadedState = undefined) {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(reducer, preloadedState, devTools);
}