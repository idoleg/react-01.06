import {createStore, combineReducers,compose,  applyMiddleware} from 'redux';
import chatReducer from './chatReducer'
import botMiddleware from './botMiddleware'
import chatMiddleware from './chatMiddleware'

import {createBrowserHistory} from 'history'
import {routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';

export const history=createBrowserHistory()

const reducer =combineReducers({
    chats: chatReducer,
    router: connectRouter(history),
});

export function initStore (preloadedState = undefined){
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(reducer,preloadedState,composeEnhancers(applyMiddleware(routerMiddleware(history), botMiddleware, chatMiddleware)))
}