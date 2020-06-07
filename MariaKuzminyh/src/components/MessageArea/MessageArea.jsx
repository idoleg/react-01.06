import React, { useState } from 'react';

import { MessageList } from '../MessageList/MessageList';
import { MessageBox } from '../MessageBox/MessageBox';

export function MessageArea(props) {
  const { messages } = props;
  const [lastId, setLastId] = useState(messages.length);

  return (
    <div className="message-area">
      <MessageList messages={ messages } />
      <MessageBox messages={ messages } lastId={ lastId } setLastId={ setLastId } />
    </div>
  );
}