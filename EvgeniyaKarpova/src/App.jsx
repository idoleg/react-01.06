import React from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore, history } from './store';
import { ConnectedRouter } from 'connected-react-router';

import {initChats} from './store/chatAction';

const store = initStore();
store.dispatch(initChats());

export const App = () => (
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/chats">  
            <Switch>
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
            </Switch>    
        </Route>
    </ConnectedRouter>
</Provider>
)