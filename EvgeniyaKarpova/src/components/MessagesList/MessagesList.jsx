import React, {Component} from "react";
import Message from "../Message/Message"

// export const MessagesList = ({messages}) => (
//     <ul>
//        {messages.map((item, index) => <Message {...item} key={index}/>)}
//     </ul>
// ); // ...item  =  name={item.name} content={item.content}

export default class MessagesList extends Component {
    state = {
        //messages: ["Привет!", "Как дела?"]
        messages: [
                {name: 'Лена', content: 'Превет!'},
                {name: 'Оля', content: 'Превет!'},
                {name: 'Лена', content: 'Как дела?'},
                {name: 'Оля', content: 'Хорошо'}
            ]
    };
 
    handleClick = () => {
        const lena = {name: 'Лена', content: 'Нормально!'};
        this.setState({ messages: [...this.state.messages, lena] });
        
    };
 
    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text } />));
 
        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    };
    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
            const robot = {name: 'Pобот', content: 'Не приставай ко мне!'};
            setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, robot ] }),
            1000);
        };
    }
 
 }
 