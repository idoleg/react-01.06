import React from 'react';
import { Link } from 'react-router-dom';
import './ChatList.css'

export const ChatList = () => {
    return (
    <div className="parent">
    <ul className="list">
        <li className="list-item"><Link className="link" to="/chats/1">Chat 1</Link></li>
        <li className="list-item"><Link className="link" to="/chats/2">Chat 2</Link></li>
        <li className="list-item"><Link className="link" to="/chats/3">Chat 3</Link></li>
        <li className="list-item"><Link className="link" to="/chats/4">Chat 4</Link></li>
        <li className="list-item"><Link className="link" to="/chats/5">Chat 5</Link></li>
    </ul>
    </div>
    )
}