import React, {Component} from 'react'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ChatListItem from '../ChatListItem/ChatListItem'
import Drawer from '@material-ui/core/Drawer'

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
                    <Subheader>Последние Чаты</Subheader>
                    {chatsElements.map(  (item, index) => <ChatListItem key={index} data={item}/>)}
                </List>
            </aside>
        )
    }
}