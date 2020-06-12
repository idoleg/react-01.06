import React, {Component, Fragment} from 'react'
import MessageList from '../MessageList/MessageList'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../../css/style.css'

export default class App extends Component {
    
     
    state = {
        text: 'GB React lesson 3',
        title: "React GB",
    }
   
    render() {
        return (
            <Fragment>
                <Header title={this.state.title}/>
                <BrowserRouter>
                    <main>
                        <Switch>
                            <Route path='/'>
                                <Switch>
                                    <Route path='/' exact component={ MessageList } ></Route>
                                    <Route path='/:id' exact component={ MessageList }></Route>
                                    <Route path='/:id'>Not Found</Route>

                                </Switch>
                            </Route>
                        </Switch>
                        <ChatList chats={this.state.chats}/>

                    </main>
                </BrowserRouter>
            </Fragment>
        )
    }
}
