import './ChatList.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const ChatList = () => {
    
    return (<div className="chatList">
        <ul>
            <li><Link to="/chats/1">Чат 1</Link></li>
            <li><Link to="/chats/2">Чат 2</Link></li>
            <li><Link to="/chats/3">Чат 3</Link></li>
            <li><Link to="/chats/4">Чат 4</Link></li>
        </ul>
    </div>)
}