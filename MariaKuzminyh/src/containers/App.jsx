import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from '../components/Header/Header';

import { ChatList } from '../components/ChatList/ChatList';
import { ChatContainer } from './ChatContainer';
import { Profile } from '../components/Profile/Profile';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Route path="/profile" exact component={ Profile } />
    <Switch>
      <Route path="/" exact>Главная страница</Route>
      <Route path="/chats">
        <ChatList />
        <Switch>
          {/* <Route path="/chats" exact component={ ChatContainer } /> */}
          <Route path="/chats/:id" exact component={ ChatContainer } />
        </Switch>
      </Route>
    </Switch>
  </BrowserRouter>
);