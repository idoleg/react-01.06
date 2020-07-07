import React from 'react';
import {ChatContainer} from './containers/ChatContainer/ChatContainer';
import {ChatList} from './components/ChatList/ChatList'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header'

import {BrowserRouter,Switch, Route} from 'react-router-dom'


export const App = () =>{
   //<ChatContainer/>
   
return    <BrowserRouter>

    <Switch>
        <Route path="/chats">
            <Header />
            <ChatList  />
            <Switch>
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
            </Switch>
        </Route>
        <Route path="/about">About</Route>
        <Route path="/contacts">Contact us</Route>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/">404</Route>
    </Switch>
</BrowserRouter>
}
