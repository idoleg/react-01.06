import { createStore, combineReducers } from 'redux';

import chatReducer from './chatReducer';
import profileReducer from './profileReducer';

const reducer = combineReducers({
  chats: chatReducer,
  profileData: profileReducer,
});

export function initStore(preloadedState = undefined) {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

  return createStore(reducer, preloadedState, devTools);
};