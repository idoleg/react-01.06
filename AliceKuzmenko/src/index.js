import React from 'react';
import ReactDOM from 'react-dom';
const messages = [
    { name: 'Me', content: 'Hello!', id:1 },
    { name: 'You', content: 'Hi!',id:2 },
    { name: 'Me', content: 'How are you?',id:3 },
    { name: 'You', content: 'Fine', id:4 },
]

const Message = ({ name, content }) => <li><strong>{name}:</strong> {content}</li>
const MessageList = ({ messages }) => (
    <div>
        <ul>
            {messages.map((item, index) => <Message {...item} key={item.id} />)}
        </ul>
        <button onClick={addMsg}>Add default message</button>
    </div>
);
function addMsg() {
    messages.push({name:'Me', content: "it is good", id: (messages.length+1) });
    console.log(messages)
    // ReactDOM.render(
    //     <MessageList  messages={messages}/>,
    //     mountPoint
    //   );
    ReactDOM.render(
        <MessageForm  messages={messages}/>,
        mountPoint
      );
}
const mountPoint = document.getElementById('root')
//ReactDOM.render(<MessageList messages={messages} />, mountPoint)



class MessageForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('Отправленное имя: ' + this.state.value);
      messages.push({name:'Me', content: this.state.value, id: (messages.length+1) });
      console.log(messages)
      event.preventDefault();
      ReactDOM.render(
        <MessageForm />,
        mountPoint
      );
    }
  
    render() {
      return (
        <div>
            <MessageList messages={messages} ></MessageList>
            
            <form onSubmit={this.handleSubmit}>

            <label>
                New message: 
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Send" />
            </form>
        </div>
      );
    }
  }
  ReactDOM.render(
    <MessageForm />,
    mountPoint
  );