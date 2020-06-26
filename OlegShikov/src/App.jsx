import React from 'react';
import ChatListContainer from './containers/ChatListContainer'
import ChatContainer from './containers/ChatContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore, history } from './store'
import { ConnectedRouter } from 'connected-react-router'

// StaticRouter
// MemoryRouter - 
// HashRouter - www.test.com#/about
// BrowserRouter - www.test.com/about
import { fetchChats } from './store/chatOperations';
const store = initStore();
console.log("store", store.getState())
store.dispatch(fetchChats())

export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route path="/" exact>It's main page</Route>

                    <Route path="/chats">
                        <ChatListContainer />
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
            </>
        </ConnectedRouter>
    </Provider>
)

// <ChatContainer />

/*<Route path="/chats">
            </Route> */