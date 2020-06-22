import React from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';

import {initChats} from './store/chatAction';

const store = initStore();
store.dispatch(initChats());

export const App = () => (
    <Provider store={store}>
    <BrowserRouter>
        <Route path="/chats">  
            <Switch>
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
            </Switch>    
        </Route>
    </BrowserRouter>
</Provider>
)