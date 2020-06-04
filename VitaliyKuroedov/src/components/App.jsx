
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
        title: "React GB"
    }
   
    render() {
        console.log('render');
        return (
            <div>
                <Header title={this.state.title}/>
                <main>
                    <MessageList/>
                    <ChatList/>
                </main>
            </div>
        )
    }
}
