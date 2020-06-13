import React from 'react';
import { ChatList } from './components/ChatList/ChatList'
import { ChatContainer } from './containers/ChatContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// StaticRouter
// MemoryRouter - 
// HashRouter - www.test.com#/about
// BrowserRouter - www.test.com/about

export const App = () => (
    <BrowserRouter>

        <Switch>
            <Route path="/" exact>It's main page</Route>

            <Route path="/chats">
                <ChatList />
                <Switch>
                    <Route path="/chats" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
                </Switch>
            </Route>

            <Route path="/about">It's about page</Route>
            <Route path="/contacts">It's contacts page</Route>
            <Route path="/contacts/how">It's contacts page</Route>
            <Route path="/">It's 404 page</Route>
        </Switch>
    </BrowserRouter>
)

// <ChatContainer />

/*<Route path="/chats">
            </Route> */