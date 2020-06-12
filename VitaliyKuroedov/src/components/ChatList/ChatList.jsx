import React, {Component, Fragment} from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

export default class ChatList extends Component {
    render() {
        return(
            <aside className="chat-list">
                <List>
                    <Subheader>Последние Чаты</Subheader>
                    <Link to='/1' className='link'>
                        <ListItem
                            primaryText="Сушист"
                            leftAvatar={<Avatar src="https://v0.material-ui.com/images/ok-128.jpg"/>}
                            rightIcon={<CommunicationChatBubble />}/>
                    </Link>
                    <Link to='/2' className='link'>
                        <ListItem
                            primaryText="Визажист"
                            leftAvatar={<Avatar src="https://v0.material-ui.com/images/kolage-128.jpg"/>}
                            rightIcon={<CommunicationChatBubble />}/>
                    </Link>
                    <Link to='/3' className='link'>
                        <ListItem
                            primaryText="Бухгалтер"
                            leftAvatar={<Avatar src="https://v0.material-ui.com/images/raquelromanp-128.jpg"/>}
                            rightIcon={<CommunicationChatBubble />}/>
                    </Link>
                    <Link to='/4' className='link'>
                        <ListItem
                            primaryText="Качок"
                            leftAvatar={<Avatar src="https://v0.material-ui.com/images/kerem-128.jpg"/>}
                            rightIcon={<CommunicationChatBubble />}/>
                    </Link>               
                </List>

            </aside>
        )
    }
}