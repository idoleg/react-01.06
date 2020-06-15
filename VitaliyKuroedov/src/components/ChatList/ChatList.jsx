import React, { Component } from 'react'
import { List, ListSubheader } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'

export default class ChatList extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const chatsElements = []
        for (let [key, value] of Object.entries(this.props.chats)) {
            chatsElements.push(value)
          }

        return(
            <aside className="chat-list">
                <List>
                    <ListSubheader>Последние Чаты</ListSubheader>
                    {chatsElements.map(  (item) => <ChatListItem key={item.id} data={item} handleCurrentChatName={this.props.handleCurrentChatName}/>)}
                </List>
            </aside>
        )
    }
}