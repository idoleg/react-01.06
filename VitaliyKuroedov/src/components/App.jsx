
import React from 'react'
import MessageList from './MessageList.jsx'
import Header from './Header.jsx'
import ChatList from './ChatList.jsx'

import '../css/style.css'

export default class App extends React.Component {
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
        console.log('render');
        return (
            <div>
                <Header title={this.state.title}/>
                <main>
                    <MessageList/>
                    <ChatList chats={this.state.chats}/>
                </main>
            </div>
        )
    }
}
