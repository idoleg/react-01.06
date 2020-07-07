import React from 'react';
import ChatContainer from '../containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Profile} from "./Profile/Profile";
import {Provider} from 'react-redux';
import {initStore} from "../store";

import {initChats} from "../store/chatActions";
const store = initStore();
store.dispatch(initChats());

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>It's main page</Route>

                <Route path="/chats">
                    <Switch>
                        <Route path="/chats" exact component={ChatContainer}/>
                        <Route path="/chats/:id" exact component={ChatContainer}/>
                    </Switch>
                </Route>

                <Route path="/profile">
                    <Switch>
                        <Route path="/profile" exact component={Profile}/>
                    </Switch>
                </Route>

                <Route path="/about">It's about page</Route>
                <Route path="/contacts">It's contacts page</Route>
                <Route path="/">It's 404 page</Route>
            </Switch>
        </BrowserRouter>
    </Provider>

);

//  <ChatContainer />