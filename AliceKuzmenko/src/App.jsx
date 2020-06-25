import React from 'react';
import  ChatContainer from './containers/ChatContainer/ChatContainer';
import ChatListContainer from './containers/ChatListContainer/ChatListContainer'
import {ChatList} from './components/ChatList/ChatList'
import { Profile } from './components/Profile/Profile'
import { Header } from './components/Header/Header'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import { initStore, history } from './store'

import {initChats, sendMessage} from './store/chatActions'

import { ConnectedRouter } from 'connected-react-router' 

const store = initStore();

store.dispatch(initChats());
//store.dispatch(sendMessage(1,'Lorem',"New"))
//store.dispatch(sendMessage(1,'Lorem',"New"))
// store.dispatch({type:'COUNT',payload:{number:1}})
// store.dispatch({type:'COUNT',payload:{number:2}})
// store.dispatch({type:'COUNT',payload:{number:10}})
// store.dispatch({type:'COUNT',payload:{number:-12}})
export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" exact component={ChatList} />
            <Switch>
                <Route path="/chats">
                    <Header />
                    <ChatListContainer />
                    <Switch>
                        <Route path="/chats" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                    </Switch>
                </Route>
                <Route path="/about">About</Route>
                <Route path="/contacts">Contact us</Route>
                <Route path="/profile" exact component={Profile} />
                <Route path="/">404</Route>
            </Switch>
        </ConnectedRouter>
    </Provider>
)


