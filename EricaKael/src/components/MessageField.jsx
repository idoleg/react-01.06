import React, { Component } from 'react';
import Message from './Message';

export default class MessageField extends Component{
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
        ]
    };

    handleClick = ()=>{
        this.setState({messages:[...this.state.messages, {'name':'user', 'text':'Ok'}]});
    }

    componentDidUpdate(){
        if(this.state.messages.length % 2 !==1){
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
        return <div>
            {messageELements}
            <button onClick={this.handleClick}>Send message</button>
        </div>
    }
}