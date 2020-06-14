import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import "../styles/style.css";

export default class MessageField extends React.Component {

    textInput = React.createRef();

   state = {
       messages: [{text: "Привет!", sender: 'bot'}, {text: "Как дела?", sender: 'bot'}],
       input: "",
   };

    UNSAFE_componentWillMount() {
        // console.log('MessageField componentWillMount');
    }

    componentDidMount() {
        // console.log('MessageField componentDidMount');
        this.textInput.current.focus();
    }

    componentDidUpdate() {
        // console.log('MessageField componentDidUpdate');

        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, {text:"I'm robot", sender:"bot"} ] }), 1000);
        }
    }

   handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, {text: this.state.input, sender:"me"} ],
        input: "" 
    });
   };

   handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
   };

   handleKeyUp = (e) => {
       if (e.keyCode == 13) {
        this.handleClick();
       }
   };

   render() {
    // console.log("MessageField render");
       const messageElements = this.state.messages.map((text, index) => (
           <Message key={ index } text={ text.text } sender={text.sender} />));

       return (
            <div className="wrap-message-field">
                <div className="message-field">
                    { messageElements }
                </div>
                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                    hintText="Hint Text"
                    fullWidth={true}
                    name="input"
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={this.handleKeyUp}
                    ref={this.textInput}
                    />
                    <FloatingActionButton onClick={ this.handleClick}>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
       )
   }
}