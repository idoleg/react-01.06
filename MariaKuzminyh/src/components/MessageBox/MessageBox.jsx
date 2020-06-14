import React, { useEffect } from 'react';

export function MessageBox(props) {
  const { messages, lastId, setLastId } = props;

  const possibleAnswers = [
    { id: lastId, name: 'Мария', content: 'Тоже устала сидеть дома(' },
    { id: lastId, name: 'Иван', content: 'Идём в WoW?' }
  ];

  const getRandomInt = (max) =>  {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const indexOfPossibleAnswers = getRandomInt(2);
  const thisMessage = possibleAnswers[indexOfPossibleAnswers];

  useEffect(() => {
    return () => {
      const messageFromRobot = { id: messages.length, name: 'Робот', content: `${thisMessage.name}, тоже хочу с вами пообщаться)` };

      messages.length % 2 !== 0 && sendMessage(messageFromRobot);
    }
  }, [lastId])

  const sendMessage = (message) => {
    messages.push(message);
    setLastId(messages.length);
  };

  return (
    <div className="message-box">
      <button type="button" onClick={ () => sendMessage(thisMessage) }>Отправить</button>
    </div>
  );
}