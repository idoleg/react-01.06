import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatContainer from './containers/ChatContainer';
import ChatListContainer from './containers/ChatListContainer';
import { Provider } from 'react-redux';
import { initStore, history } from './store';
import { fetchChats } from './store/chatAsyncActions';
import { ConnectedRouter } from 'connected-react-router';


const store = initStore();
store.dispatch(fetchChats());


export const App = () => (
    <Provider store = { store }>
    <ConnectedRouter history = { history }>
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
    </ConnectedRouter>
    </Provider>
)