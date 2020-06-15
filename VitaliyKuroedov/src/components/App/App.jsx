import React, { Component, Fragment } from 'react'
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
        currentChatName: '',
        chats: {
            1: {
                id: 1,
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
                id: 2,
                name: 'Визажист',
                avatar: 'https://v0.material-ui.com/images/kolage-128.jpg',
                messages: [
                    {name: 'Vitalii' , content: 'Hola', author: true},
                    {name: 'Oleg' , content: 'Shalom', author: true},
                ]
            },
            3: {
                id: 3,
                name: 'Бухгалтер',
                avatar: 'https://v0.material-ui.com/images/raquelromanp-128.jpg',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                ]
            },
            4: {
                id: 4,
                name: 'Качок',
                avatar: 'https://v0.material-ui.com/images/kerem-128.jpg',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                ]
            },
        }
    }
    handleCurrentChatName = (value) => {
        this.setState({currentChatName: value})
    }

    addChat = (chatName) => {
        let counter = 1
        for (let id in this.state.chats) {
           counter++
        }
        
        this.setState( state => ({
            ...state,
            chats: { ...state.chats, 
                    [counter]: {
                        avatar: `https://randomuser.me/api/portraits/med/men/${counter}.jpg`,
                        name: chatName,
                        id: counter,
                        messages: []
                    }}
        }))
    }

    addMessage = (id, input) => {
        console.log(input)
        this.setState( state => ({
            ...state,
            chats: { ...state.chats, [id]: input }
        }) )
    }
    
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header title={this.state.title} addChat={this.addChat} currentChatName={this.state.currentChatName}/>   
                    <main>
                        <Switch>
                            <Route path='/profile' exact component={ Profile }></Route>
                            <Route path='/'>
                                <Switch>
                                    <Route path='/' exact render={(props) => <MessageList {...props} {...this.state} addMessage={this.addMessage} />}></Route>
                                    <Route path='/:id' exact render={(props) => <MessageList {...props} {...this.state} addMessage={this.addMessage} />}></Route>
                                    <Route path='/:id'>Not Found</Route>
                                </Switch>
                                <ChatList chats={this.state.chats} handleCurrentChatName={this.handleCurrentChatName}/>
                            </Route>
                        </Switch>
                    </main>
                </BrowserRouter>
            </Fragment>
        )
    }
}
