import React, { Component, Fragment } from 'react';
import { ChatContainer } from './containers/ChatContainer';
import { ChatList } from './components/ChatList/ChatList'
import {Header}  from './components/Header/Header.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import{ Profile } from './components/Profile/Profile';



export const App = () => (
   // <>
   // <Header />
   // <ChatContainer/> 
   // </>
   <BrowserRouter>
      <Header/>
      <ChatList/>
      <Switch>
         <Route path='/' exact>Main</Route>
         <Route path='/chats'>
            <Switch>
               <Route path='/chats' exact component={ChatContainer}/>
               <Route path='/chats/:id' exact component={ChatContainer}/>  
            </Switch>
         </Route>
         <Route path='/profile' exact component={Profile}/>
         <Route path='/about'>About</Route>
         <Route path='/contacts'>Contacts</Route>
         <Route path='/contacts/how'>Contacts how</Route>
         <Route path='/'>404</Route>


      </Switch>
   </BrowserRouter>
)