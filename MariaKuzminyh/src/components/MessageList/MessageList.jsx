import React from 'react';

import { Message } from '../Message/Message';

export function MessageList(props) {
  const { messages } = props;

  const renderMessageList = messages =>
    messages.map(item => <Message key={item.id} { ...item} />);

  return (
    <ul>
      { renderMessageList(messages) }
    </ul>
  );
}