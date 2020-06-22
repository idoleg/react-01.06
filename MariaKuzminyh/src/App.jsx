import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { initStore } from './store';

import Header from './components/Header/Header';
import ChatListContainer from './containers/ChatListContainer';
import ChatContainer from './containers/ChatContainer';
import { Profile } from './components/Profile/Profile';

import { initChats } from './store/chatActions';
import { initProfile } from './store/profileActions';

const store = initStore();
store.dispatch(initChats());
store.dispatch(initProfile());

export const App = () => (
  <Provider store={ store}>
    <BrowserRouter>
      <Header />
      <Route path="/profile" exact component={ Profile } />
      <Switch>
        <Route path="/" exact>Главная страница</Route>
        <Route path="/chats">
          <ChatListContainer />
          <Switch>
            {/* <Route path="/chats" exact component={ ChatContainer } /> */}
            <Route path="/chats/:id" exact component={ ChatContainer } />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);