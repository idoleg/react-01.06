import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import botMiddleware from './botMiddleware';

const reducer = combineReducers({
  chats: chatReducer,
  profileData: profileReducer,
});

export function initStore(preloadedState = undefined) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(
    botMiddleware
  )));
};