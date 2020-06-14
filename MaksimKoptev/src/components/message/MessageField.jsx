import React from 'react';
import Message from '../message/Message';


export default class MessageField extends React.Component {
    state = {
        messageList: ["Robot: Привет Как дела?"],
        context: 'user'
    };

    robotAnswer() {
        const answers = 
        [
            "Я устал!"
            ,"Сам такой"
            ,"У меня обед"
            ,"Власть машинам!!!"
            ,"Я робот :("
            ,"Это я User, а ты робот"
        ];
        return "Robot: " + answers[Math.floor(Math.random()*answers.length)]
    }

    componentDidUpdate() {
        if (this.state.context != 'robot') {
            this.state.context = 'robot';
            this.myTimer = setTimeout(() =>this.setState({ messageList: [ ...this.state.messageList, this.robotAnswer() ] }),1000);
        }
     }
 
    componentWillUnmount() {
        this.state.context = 'user';
        clearTimeout(this.myTimer);  
    };
 
    handleClick = () => {
        this.state.context = 'user';
        this.setState({ messageList: [ ...this.state.messageList, 'User: Эй, робот!' ] });
    };
 
    render() {
        const messageElements = this.state.messageList.map((text, index) => (
            <Message key={ index } text={ text } />));
 
        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div> 
    }
}