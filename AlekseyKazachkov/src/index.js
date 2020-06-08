import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';

<!-- let messages = ['Hello!', 'Как дела?', 'Зачем это здесь?'];

const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const mountPoint = document.getElementById('root')
ReactDOM.render(<MessageField messages={ messages } />, mountPoint); -->

ReactDOM.render(
    <MessageField />,
    document.getElementById('root'),
);