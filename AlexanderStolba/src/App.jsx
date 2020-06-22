import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatContainer from './containers/ChatContainer';
import ChatListContainer from './containers/ChatListContainer';
import { Provider } from 'react-redux';
import { initStore } from './store';
import { initChats, sendMessage } from './store/chatActions';

const store = initStore();
store.dispatch(initChats());

export const App = () => (
    <Provider store = { store }>
    <BrowserRouter>
        <Switch>
        
            <Route path="/chats">
            <ChatListContainer />
                <Switch>
                    <Route path="/chats" exact component = { ChatContainer }/>
                    <Route path="/chats/:id" exact component = { ChatContainer }/>
                </Switch>
            </Route>

            <Route path="/" exact>Main page</Route>
            <Route path="/contacts">It's our contacts page</Route>
            <Route path="/about">About us</Route>
            <Route path="/">Error 404</Route>
        </Switch>
    </BrowserRouter>
    </Provider>
)

//<ChatContainer />
