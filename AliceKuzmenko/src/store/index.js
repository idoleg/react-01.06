import {createStore, combineReducers,compose,  applyMiddleware} from 'redux';
import chatReducer from './chatReducer'
import botMiddleware from './botMiddleware'
import chatMiddleware from './chatMiddleware'

import {createBrowserHistory} from 'history'
import {routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';

import ReduxThunk from 'redux-thunk'

export const history=createBrowserHistory()

const reducer =combineReducers({
    chats: chatReducer,
    router: connectRouter(history),
});

export function initStore (preloadedState = undefined){
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(reducer,preloadedState,composeEnhancers(applyMiddleware(ReduxThunk, routerMiddleware(history), botMiddleware, chatMiddleware)))
}