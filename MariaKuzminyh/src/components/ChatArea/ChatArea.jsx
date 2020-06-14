import React from 'react';

import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer';

import './chat-area.css';

export const ChatArea = () => {
  return (
    <div className="chat-area">
      <ChatList />
      <ChatContainer />
    </div>
  );
};