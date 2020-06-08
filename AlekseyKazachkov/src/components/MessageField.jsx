import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
        state = {
            messages: [{
                text: "Привет!",
                sender: 'bot'
            }, {
                text: "Как дела?",
                sender: 'bot'
            }],
        };

        UNSAFE_componentWillMount() {
            console.log('MessageField componentWillMount');
        }

        componentDidMount() {
            console.log('MessageField componentDidMount');
        }

        componentDidUpdate() {
            console.log('MessageField componentDidUpdate');

            if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
                setTimeout(() =>
                    this.setState({
                        messages: [...this.state.messages, {
                            text: "I'm robot",
                            sender: "bot"
                        }]
                    }), 1000);
            }
        }

        handleClick = () => {
            this.setState({
                messages: [...this.state.messages, {
                    text: "Нормально",
                    sender: "me"
                }]
            });
        };

        render() {
                console.log("MessageField render");
                const messageElements = this.state.messages.map((text, index) => ( <
                        Message key = {
                            index
                        }
                        text = {
                            text.text
                        }
                        sender = {
                            text.sender
                        }
                        />));

                        return ( <
                            div >
                            <
                            h1 > Messages < /h1> {
                                messageElements
                            } <
                            button onClick = {
                                this.handleClick
                            } > Отправить сообщение < /button> <
                            /div>
                        )
                    }
                }
