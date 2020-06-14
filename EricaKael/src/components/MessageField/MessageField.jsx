import './MessageField.css';

import React, { Component } from 'react';

import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message';

export default class MessageField extends Component{
    /*constructor(props){
        super(props);
        this.textInput = React.createRef();
    }*/

    state = {
        messages: [{ 
            name: 'Tanya',
            text: 'How are you?'
        },
        { 
            name: 'Vlad',
            text: 'Hi, friend!'
        },
        { 
            name: 'Julia',
            text: 'Hello'
        },
        ],
        input: '',
    };

    /*componentDidMount(){
        this.textInput.current.focus();
    }*/

    handleClick = (message)=>{
        this.sendMessage(message)
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }
    handleKeyUp=(e, message)=>{
        if(e.keyCode === 13){
            this.sendMessage(message);
        }
    }
    sendMessage = (message)=>{
        this.setState({messages:[...this.state.messages, {'name':'me', 'text':message}]});
        this.state.input = '';
    }

    componentDidUpdate(){
        const lastMessage = this.state.messages[this.state.messages.length - 1].name;

        if(lastMessage === 'me'){
            setTimeout(()=>{
                this.setState({
                    messages:[...this.state.messages, {'name':'Robot', 'text':'I`m robot'}]
                })
            }, 1000);
        }
    }

    render(){
        const messageELements = this.state.messages.map((item, index)=>(
            <Message {...item} key={index} />
        ));
        return <div className='layout'>
            <div className='message-field'>
                {messageELements}
            </div>
            <div style={{width: '100%', display: 'flex'}}>
                <TextField 
                    /*ref={this.textInput}*/
                    name="input"
                    fullWidth={true}
                    hintText="Write a message"
                    style={{fontSize: '12px'}}
                    onChange={this.handleChange}
                    value={this.state.input} 
                    onKeyUp={(e)=>this.handleKeyUp(e, this.state.input)} 
                />
                <FloatingActionButton onClick={()=>this.handleClick(this.state.input)}>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        </div>
    }
}