import React, {Component, Fragment} from 'react'
import Message from '../Message/Message'
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class MessageList extends Component {
    constructor(props){
        super(props)
        
    }
    state = {
        input: '',
        messages: [
            {name: 'Ivan' , content: 'Hello'},
            {name: 'Petr' , content: 'Hi'},
            {name: 'Vitalii' , content: 'Hola'},
            {name: 'Oleg' , content: 'Shalom'},
        ],
        chats: {
            1: {
                name: 'Сушист',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                    {name: 'Vitalii' , content: 'Hola', author: true},
                    {name: 'Oleg' , content: 'Shalom', author: true},
                ]
            },
            2: {
                name: 'Визажист',
                messages: [
                    {name: 'Vitalii' , content: 'Hola', author: true},
                    {name: 'Oleg' , content: 'Shalom', author: true},
                ]
            },
            3: {
                name: 'Бухгалтер',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                ]
            },
            4: {
                name: 'Качок',
                messages: [
                    {name: 'Ivan', content: 'hello', author: true},
                    {name: 'Petr' , content: 'Hi', author: true},
                ]
            },
        }
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
                                }]    
                        }
                    }
                })), 1000);
        }
    }
 
    handleClick = (message) => {
        const { id } = this.props.match.params
        this.sendMessage(id, message)
    };
 
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
 
    handleKeyUp = (event, message) => {
        const { id } = this.props.match.params
        if (event.keyCode === 13) { // Enter
            this.sendMessage(id, message)
        }
    };
   
    sendMessage = (id, message) => {
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
        this.setState(this.state.input = '')
    };

    render() {
        const { id } = this.props.match.params
        const messageElements = id && this.state.chats[id] ? 
            this.state.chats[id].messages.map((item, index) => <Message {...item} key={index}/>) : 
            null
        return(
            <div className="container">
                <div className="message-list">
                    { messageElements }
                </div>
                <div className="message__action">
                    <TextField
                        name="input"
                        fullWidth={true}
                        hintText="Введите сообщение"
                        className="message-text__input"
                        onChange= {this.handleChange} 
                        value= {this.state.input} 
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                        />
                    <FloatingActionButton 
                        onClick={ () => this.handleClick(this.state.input) }>
                        <SendIcon/>
                    </FloatingActionButton>
                </div>
             </div> 
        )
    }
}