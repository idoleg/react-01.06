import React, {Component, Fragment, useState} from 'react'
import MessageList from '../MessageList/MessageList'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Profile from '../Profile/Profile'
import '../../css/style.css'

export default class App extends Component {
    
     
    state = {
        text: 'GB React lesson 4',
        title: "React GB",
        test: 'test',
        chats: {
            1: {
                name: 'Сушист',
                avatar: 'https://v0.material-ui.com/images/ok-128.jpg',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                    {name: 'Vitalii' , content: 'Hola', author: true},
                    {name: 'Oleg' , content: 'Shalom', author: true},
                ]
            },
            2: {
                name: 'Визажист',
                avatar: 'https://v0.material-ui.com/images/kolage-128.jpg',
                messages: [
                    {name: 'Vitalii' , content: 'Hola', author: true},
                    {name: 'Oleg' , content: 'Shalom', author: true},
                ]
            },
            3: {
                name: 'Бухгалтер',
                avatar: 'https://v0.material-ui.com/images/raquelromanp-128.jpg',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                ]
            },
            4: {
                name: 'Качок',
                avatar: 'https://v0.material-ui.com/images/kerem-128.jpg',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                ]
            },
        }
    }
    // 

    addChat = () => {
        let counter = 1
        for (let id in this.state.chats) {
           counter++
        }
        this.setState( state => ({
            ...state,
            chats: { ...state.chats, [counter]: {avatar: `https://randomuser.me/api/portraits/med/men/${counter}.jpg`}}
        }))
    }

    addMessage = (id, input) => {
        this.setState( state => ({
            ...state,
            chats: { ...state.chats, [id]: { ...input} }
        }) )
    }
    
    render() {
        return (
            <Fragment>
                <Header title={this.state.title} addChat={this.addChat}/>   
                <BrowserRouter>
                    <main>
                        <Switch>
                            <Route path='/profile' exact component={ Profile }></Route>
                            <Route path='/'>
                                <Switch>
                                    <Route path='/' exact render={(props) => <MessageList {...props} {...this.state} addMessage={this.addMessage} />}></Route>
                                    <Route path='/:id' exact render={(props) => <MessageList {...props} {...this.state} addMessage={this.addMessage} />}></Route>
                                    <Route path='/:id'>Not Found</Route>
                                    <Route path='/'>Not Found</Route>
                                </Switch>
                                <ChatList chats={this.state.chats}/>
                            </Route>
                        </Switch>

                    </main>
                </BrowserRouter>
            </Fragment>
        )
    }
}
