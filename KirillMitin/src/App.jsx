import React from 'react';
import { ChatList } from './container/ChatList/ChatList'
import { Header } from './container/Header/Header'
import { ChatContainer } from './container/ChatContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export const App = () => (
    <BrowserRouter>
    <Header/>
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
)