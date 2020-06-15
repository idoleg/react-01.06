import React, {Component } from 'react'
import Message from '../Message/Message'
import { TextField, IconButton } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
export default class MessageList extends Component {
    constructor(props){
        super(props)
    }
    state = {
        input: '',
        chats: this.props.chats,
        timeoutId: null
    }
    
    handleBotMessage = (id) => {
        if (id && this.state.chats[id]) {
            const currentMessage = this.state.chats[id].messages
            const lastMessage = currentMessage[currentMessage.length -1]

            if (lastMessage && lastMessage.name !== 'Я') {
                clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(() => this.handleSendMessage(id,{
                    content: `Не приставай ко мне, я ${this.state.chats[id].name}`, 
                    name: this.props.chats[id].name, 
                    author: false
                }), 1000)
            }
        }
    }
 
    handleClick = (value) => {
        const { id } = this.props.match.params
        this.handleSendMessage(id, {content: value, name: 'Я', author: true})
    };
 
    handleChange = (event) => {
        const { id } = this.props.match.params
        if(id === undefined) return
        this.setState({ input: event.target.value });
    };
 
    handleKeyUp = (event, value) => {
        const { id } = this.props.match.params
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(id, {content: value, name: 'Я', author: true})
        }
    };
    
    handleSyncChat = () => {
        this.state.chats = this.props.chats
    }

    handleSendMessage = (id, value) => {
        if (id === undefined) return
        
        console.log(this.state.chats[id])

        if (this.state.chats[id] === undefined) {
            this.handleSyncChat()
        }

        this.setState(state => ({
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    messages: [ ...this.state.chats[id].messages, value ]
                }
            }
        }), this.handleBotMessage(id))

        this.setState({input : ''})
        this.props.addMessage(id, this.state.chats[id])
        
    };

    render() {
        const { id } = this.props.match.params
        const messageElements = id && this.props.chats[id] ? 
            this.props.chats[id].messages.map((item, index) => <Message {...item} key={index}/>) : 
            <strong>Выберите чат</strong>
       
        
        return(
            <div className="container">
                <div className="message-list">
                    { messageElements }
                </div>
                <div className="message__action">
                    <TextField
                        name="input"
                        fullWidth={true}
                        label="Введите сообщение"
                        className="message-text__input"
                        onChange= {this.handleChange} 
                        value= {this.state.input} 
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                        />
                        <IconButton  onClick={() => this.handleClick(this.state.input)}>
                            <SendRoundedIcon color="primary"/>
                        </IconButton>
                    {/* <Fab color='primary'
                        >
                        
                    </Fab> */}
                </div>
             </div> 
        )
    }
}