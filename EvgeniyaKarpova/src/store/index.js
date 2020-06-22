import { createStore, combineReducers} from 'redux';
import handleActions from './chatReducer';

const reducer = combineReducers({
    chats: handleActions,
});

export function initStore(preloadedState = undefined) {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };
    return createStore(reducer, preloadedState, devTools);
}