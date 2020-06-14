import React, {Component, Fragment, } from 'react'
import Message from '../Message/Message'
import { TextField, Fab } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

export default class MessageList extends Component {
    constructor(props){
        super(props)
    }
    state = {
        input: '',
        chats: this.props.chats
    }

    componentDidUpdate(prevProps, prevState) {
        const { id } = this.props.match.params
        const currentMessage = this.state.chats[id].messages
        const lastMessage = currentMessage[currentMessage.length -1]

        if(prevState.chats[id].messages.length < currentMessage.length && lastMessage.author === true){

            setTimeout(() =>
                this.setState( state => ({
                    ...state,
                    chats: {
                        ...state.chats,
                        [id]: {
                            ...state.chats[id],
                            messages: [ 
                                ...this.state.chats[id].messages,
                                { 
                                    content: `Не приставай ко мне, я ${this.state.chats[id].name}`, 
                                    name: this.state.chats[id].name, 
                                    author: false
                                }
                            ]    
                        }
                    }
                }) ), 1000)
            setTimeout(() => this.props.addMessage(id, {...this.state.chats[id]}), 1100)   
        }
    }
 
    handleClick = (message) => {
        const { id } = this.props.match.params
        this.sendMessage(id, message)
    };
 
    handleChange = (event) => {
        const { id } = this.props.match.params
        if(id === undefined) return
        this.setState({ input: event.target.value });
    };
 
    handleKeyUp = (event, message) => {
        const { id } = this.props.match.params
        if (event.keyCode === 13) { // Enter
            this.sendMessage(id, message)
        }
    };
    
    sendMessage = (id, message) => {

        if (id === undefined) return
        if (message.length == 0) return

        this.setState(state => ({
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    messages: [ ...this.state.chats[id].messages, {content: message, name: 'Я', author: true} ]
                }
            }
        }))
        this.setState({input : ''})
        
    };

    render() {
        const { id } = this.props.match.params
        const messageElements = id && this.props.chats[id] ? 
            this.props.chats[id].messages.map((item, index) => <Message {...item} key={index}/>) : 
            null
        let error = ''
        if (id == undefined) error = <strong>Выберите чат</strong>
        
        return(
            <div className="container">
                <div className="message-list">
                    { messageElements }
                    { error }
                </div>
                <div className="message__action">
                    <TextField
                        name="input"
                        fullWidth={true}
                        placeholder="Введите сообщение"
                        className="message-text__input"
                        onChange= {this.handleChange} 
                        value= {this.state.input} 
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                        />
                    <Fab color='primary'
                        onClick={ () => this.handleClick(this.state.input) }>
                        <SendIcon color='inherit'/>
                    </Fab>
                </div>
             </div> 
        )
    }
}