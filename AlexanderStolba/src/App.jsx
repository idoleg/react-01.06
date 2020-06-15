import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChatContainer } from './containers/ChatContainer'
import { ChatList } from './components/Chat/ChatList/ChatList'

export const App = () => (
    <BrowserRouter>
        <Switch>
        
            <Route path="/chats">
            <ChatList />
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
)

//<ChatContainer />
