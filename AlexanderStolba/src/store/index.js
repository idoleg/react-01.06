import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import chatReducer  from './chatReducer';
import { botMiddleware } from './botMiddleware';
import { chatMiddleware } from './chatMiddleware';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import ReduxThunk from 'redux-thunk' 


export const history = createBrowserHistory();

const reducer = combineReducers({
    chats: chatReducer,
    router: connectRouter(history),
})



export function initStore(preloadedStore = undefined) {
    return createStore(reducer, preloadedStore, applyMiddleware(
        ReduxThunk,
        routerMiddleware(history),
        botMiddleware,
        chatMiddleware,
    ))
}