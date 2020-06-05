import React, { createElement } from 'react';
import { Message} from "../Message/Message";

export class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textAreaValue: ''}
        this.messages = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let message = this.state.textAreaValue;
        this.messages.push(message);
        console.log(this.messages);
    }


   handleChange(event){
       this.setState({ textAreaValue: event.target.value });
        console.log(event.target.value)
   }

    render() {
        return (
            <div>
                <p>Enter your message here:</p>
                <textarea name="message" id="textarea-message" value={this.state.textAreaValue} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Send</button>
            </div>
        );
    }
}
//<input type="text" value={this.state.value} onChange={this.handleChange}/>
