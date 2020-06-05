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
        ]
    }
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].name === 'Я') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {content: 'Не приставай ко мне, я робот!', name: 'bot'} ] }),
                1000);
        }
    }
 
    handleClick = (message) => {
        this.sendMessage(message)
    };
 
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
 
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };
   
    sendMessage = (message) => {
        this.setState({ messages: [ ...this.state.messages, {content: message, name: 'Я'} ] });
        this.setState(this.state.input = '')
    };



    render() {
        const messageElements = this.state.messages.map((item, index) => <Message {...item} key={index}/> )
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