import React, {Component, Fragment} from 'react'
import MessageList from '../MessageList/MessageList'
import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'

import '../../css/style.css'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
     
    state = {
        text: 'GB React lesson 3',
        title: "React GB",
        contacts: [
            {id: '1', name: 'Сушист', avatar: 'avatar'}
        ],
        chats: [
            {id: 'chatID', contact: 'idContactsItem', messageHistory: 'idMessageArray',},
            {id: 'chatID', contact: 'idContactsItem', messageHistory: 'idMessageArray',},
            {id: 'chatID', contact: 'idContactsItem', messageHistory: 'idMessageArray',}

        ]
    }
   
    render() {
        return (
            <Fragment>
                <Header title={this.state.title}/>
                <main>
                    <MessageList/>
                    <ChatList chats={this.state.chats}/>
                </main>
            </Fragment>
        )
    }
}
