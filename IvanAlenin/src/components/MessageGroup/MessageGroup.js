import React from "react";
import {MessageBlock} from "../MessageBlock/MessageBlock";

export class MessageGroup extends React.Component {

    constructor(props) {
        super(props);
        this.messagesEndRef = React.createRef();

        this.state = {
            date: new Date(),
            userName: "You",
            botName: "Ivan",
            isReadyForMessage: 'true',
            isRiddled: 'false',
            lastRiddleId: 0
        };

        this.state.messages = [
            {
                id: 1,
                name: this.state.botName,
                content: "Приветствую!",
                time: new Date()
            },
            {
                id: 2,
                name: this.state.botName,
                content: "Привет! Я многого не умею, но могу выполнить несколько команд: time, вывести время; riddle, загадать загадку по JS",
                time: new Date()
            },
        ];
        this.state.riddles = [
            {
                id: 1,
                riddle: "Каков результат интерпретации запроса?  > ('b'+'a'+ +'a'+'a').toLowerCase()",
                answer: "banana"
            },
            {
                id: 2,
                riddle: "Каков результат в переменной х?  > x='2'-(-2)",
                answer: "4"
            },
            {
                id: 3,
                riddle: "Каков результат в переменной х?  > x='2'+2",
                answer: "22"
            },
            {
                id: 4,
                riddle: "Каков результат в переменной х?  > x='2'-2",
                answer: "0"
            },
            {
                id: 5,
                riddle: "Каков результат интерпретации запроса?  > ('b'+'a'+ +'a'+'a').toLowerCase()",
                answer: "banana"
            }]
        this.state.answers = [
            {
                id: 1,
                answer: "Введите команду time, чтобы вывести время; команду riddle, что бы загадать загадку по JS"
            },
            {
                id: 2,
                answer: "Не правильный ввод, попробуйте еще"
            },
            {
                id: 3,
                answer: "Я вас не понимаю.."
            },
            {
                id: 4,
                answer: "Я уверен, что в следующий раз вы напишете правильно :-)"
            }]
    }

    /*Read more about scrolling chat to the bottom
    * with class and func variants
    * https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
    */
    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    }


    addUserMessage() {
        let lastId = this.state.messages.length;
        let messages = [...this.state.messages];
        messages.push({id: lastId + 1, name: this.state.userName, content: this.props.message});
        this.state.messages = messages;
        this.setState({messages});
    }

    addBotMessage(contentStr) {
        let lastId = this.state.messages.length;
        let messages = [...this.state.messages];
        messages.push({id: lastId + 1, name: this.state.botName, content: contentStr});
        this.state.messages = messages;
        this.setState({messages});
    }

    randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }


    componentDidUpdate(prevProps, prevState) {
        let msg = this.props.message;
        console.log('componentDidUpdate()' + msg);

        if (msg !== 'false' && msg.length > 0) {
            this.addUserMessage();

            msg = msg.replace(/\s/g, '');

            if (this.props.message === 'time') {
                let contentStr = 'Время в данный момент: ' + new Date().toLocaleTimeString();
                this.addBotMessage(contentStr);
            } else if (this.props.message === 'riddle') {
                let i = this.randomInteger(0, 3);
                this.addBotMessage(this.state.riddles[i].riddle);
                this.setState({isRiddled: 'true', lastRiddleId: i});
            } else {
                if (this.state.isRiddled === 'true') {
                    let contentStr;
                    let trueAnswer = this.state.riddles[this.state.lastRiddleId].answer;

                    trueAnswer === msg
                        ? contentStr = "Вы молодец!"
                        : contentStr = "Попытайтесь еще, а верный ответ: " + trueAnswer;

                    this.addBotMessage(contentStr);
                    this.setState({isRiddled: 'false'});
                } else {
                    let i = this.randomInteger(0, 3);
                    this.addBotMessage(this.state.answers[i].answer);
                }
            }
        }

        this.scrollToBottom();
    }


    render() {
        return (
            <div className="MessageGroup mb-auto">
                {this.state.messages.map((i, idx) =>
                    <MessageBlock name={i.name} content={i.content} key={idx}
                                  position={(i.name === this.state.botName) ? "left" : "right"}/>)}
                <div ref={this.messagesEndRef}/>
            </div>
        )
    }
}

