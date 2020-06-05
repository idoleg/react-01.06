import React from 'react';
import ReactDOM from 'react-dom';

const messages = [
  {
    id: 1,
    name: 'Мария',
    content: 'Привет)'
  },
  {
    id: 2,
    name: 'Мария',
    content: 'Как у тебя дела?'
  },
  {
    id: 3,
    name: 'Иван',
    content: 'Привет) На карантине скучно. Хочется погулять'
  },
  {
    id: 4,
    name: 'Иван',
    content: 'Как ты?'
  }
];

function Message(props) {
  const { name, content } = props;
  return <li><strong>{ name }:</strong> {content}</li>
}

function MessageList(props) {
  const { messages } = props;

  const renderMessageList = messages =>
    messages.map(item => <Message key={item.id} { ...item} />);

  return (
    <ul>
      { renderMessageList(messages) }
    </ul>
  );
}

function MessageBox(props) {
  let text = 'Тоже устала сидеть дома(';
  let lastId = ++messages.length;
  let sendMessage = () => {
    messages.push({ id: lastId, name: 'Мария', content: text });
    ReactDOM.render(<MessageArea />, mountPoint)
  };

  return (
    <div className="message-box">
      <button type="button" onClick={ sendMessage }>Отправить</button>
    </div>
  );
}

function MessageArea(props) {
  return (
    <div className="message-area">
      <MessageList messages={ messages } />
      <MessageBox />
    </div>
  );
}

const mountPoint = document.querySelector("#root");
ReactDOM.render(<MessageArea />, mountPoint)