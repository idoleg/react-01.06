import React, {Component} from "react";
import {Message} from "../Message/Message";


export class MessageField extends Component {

    handleSendMessage = (event) => {
        event.preventDefault();
        this.props.addMessage(document.getElementById('message-author').value, document.getElementById('message-text').value);
    };

    render() {
        return (
            <>
                <div className="message-wrapper">
                    <div className="message-field">
                        <ul>
                            {this.props.messages.map((item, index) => <Message {...item} key={index}/>)}
                        </ul>
                    </div>

                    <div className="message-form">
                        <form onSubmit={this.handleSendMessage}>
                            <div className="message-input">
                                <label htmlFor="message-author">
                                    <p>Укажите ваше Имя</p>
                                    <input type="text" name="message-author" id="message-author"/>
                                </label>
                                <br/>
                                <br/>
                                <label htmlFor="message-text">
                                <textarea name="message-text" id="message-text" cols={25} rows={5}
                                          placeholder="Сообщение"/>
                                </label>
                            </div>

                            <br/>

                            <input type="submit" value="Отправить сообщение" />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}