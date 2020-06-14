import React from 'react';
import ReactDOM from 'react-dom';

import { Message } from '../Message/Message'

const mountPoint = document.getElementById('root')

export class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Me', content: 'Hello!', id: 1 },
                { name: 'You', content: 'Hi!', id: 2 },
                { name: 'Me', content: 'How are you?', id: 3 },
                { name: 'You', content: 'Fine', id: 4 },
            ],
            value: ''

        };
        this.addMsg = this.addMsg.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    addMsg() {
        let messages = this.state.messages;
        messages.push({ name: 'Me (default)', content: "it is good", id: (this.state.messages.length + 1) });
        this.setState(messages)
        //console.log(this.state.messages)
        ReactDOM.render(
            <MessageList messages={this.state.messages} />,
            mountPoint
        );
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //alert('Отправленное имя: ' + this.state.value);
        let messages = this.state.messages;
        messages.push({ name: 'Me', content: this.state.value, id: (this.state.messages.length + 1) });
        this.setState(messages)

        event.preventDefault();

    }
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].name != 'ROBOT') {//ответ только если последнее сообщение не от робота

            setTimeout(() => {
                //alert('robot')
                this.setState({
                    messages: [...this.state.messages, { name: 'ROBOT', content: 'Не приставай ко мне, я робот!', id: (this.state.messages.length + 1) }]
                })
            },1000);
        }
    }

render() {
    return (
        <>
            <ul>
                {this.state.messages.map((item, index) => <Message {...item} key={item.id} />)}
            </ul>
            <button onClick={this.addMsg}>Add default message</button>
            <form onSubmit={this.handleSubmit}>

                <label>
                    New message:
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Send" />
            </form>
        </>
    );
}
}