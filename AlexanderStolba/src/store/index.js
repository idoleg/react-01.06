import { createStore, combineReducers, applyMiddleware } from 'redux';
import chatReducer  from './chatReducer';
import { botMiddleware } from './botMiddleware';
import {createBrowserHistory} from 'history'
import {routerMiddleware, connectRouter} from 'connected-react-router'


export const history = createBrowserHistory();

const reducer = combineReducers({
    chats: chatReducer,
    router: connectRouter(history),
})



export function initStore(preloadedStore = undefined) {
    return createStore(reducer, preloadedStore, applyMiddleware(
        botMiddleware,
        routerMiddleware(history),
    ))
}