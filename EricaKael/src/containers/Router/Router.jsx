import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from '../Layout';
import Profile from '../Profile/Profile'

export default class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Layout} />
                <Route 
                    exact 
                    path='/chat/:chatId/' 
                    render={obj=><Layout chatId={Number(obj.match.params.chatId)}/>}
                />
                <Route exact path='/profile/' component={Profile} />
            </Switch>
        )
    }
}