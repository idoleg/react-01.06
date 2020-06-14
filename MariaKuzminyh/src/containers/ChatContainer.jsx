import React, { useState, useEffect } from 'react';

import { Chat } from '../components/Chat/Chat';

const messages = [
  {
    id: 0,
    name: 'Мария',
    content: 'Привет)'
  },
  {
    id: 1,
    name: 'Мария',
    content: 'Как у тебя дела?'
  },
  {
    id: 2,
    name: 'Иван',
    content: 'Привет) На карантине скучно. Хочется погулять'
  },
  {
    id: 3,
    name: 'Иван',
    content: 'Как ты?'
  }
];
let isRobotResponse = false;

export const ROBOT_NAME = "Робот";

export const ChatContainer = () => {
  const [lastId, setLastId] = useState(messages.length);

  const handleSendMessage = (message) => {
    messages.push(message);
    setLastId(messages.length);
  };

  useEffect(() => {
    return () => {
      const lastMessage = messages[messages.length - 1];

      if (!isRobotResponse && lastMessage.name !== ROBOT_NAME) {
        setTimeout(() => handleSendMessage({
          id: messages.length,
          name: ROBOT_NAME,
          content: `${lastMessage.name}, я робот`
        }), 1000);
        isRobotResponse = true;
      } 
    };
  });

  return (
    <Chat messages={ messages } 
      lastId={ lastId } setLastId={ setLastId }
      onSendMessage={ handleSendMessage } />
  );
}