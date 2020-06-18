import React from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export const App = () => (
    
    <BrowserRouter>
    
        <Route path="/chats">
        
            
            <Switch>
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
            </Switch>
            
        </Route>
       
    </BrowserRouter>

    // <div>
    //      <Header/>
    //     <ChatContainer/>
    // </div>
   
)