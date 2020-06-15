import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'


export default class ChatListItem extends Component{

    render(){
        return(
            <Link to={'/'+this.props.data.id} className='link' onClick={() => {this.props.handleCurrentChatName(this.props.data.name)}} >
                <ListItem
                    primaryText={this.props.data.name}
                    leftAvatar={<Avatar src={this.props.data.avatar}/>}
                    rightIcon={<CommunicationChatBubble />}/>
            </Link>
        )
    }
}