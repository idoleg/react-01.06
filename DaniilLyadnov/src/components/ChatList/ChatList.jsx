import './ChatList.css'
import React from 'react';
import {Link} from "react-router-dom";

export const ChatList = ({chats}) => (
    <div className={'chat-list'}>
        <ul>
            <li>
                <Link to="/chats/1">
                    <p>
                        <span>Chat 1</span>
                    </p>
                </Link>
            </li>
            <li>
                <Link to="/chats/2">
                    Chat 2
                </Link>
            </li>
            <li>
                <Link to="/chats/3">
                    Chat 3
                </Link>
            </li>
            <li>
                <Link to="/chats/4">
                    Chat 4
                </Link>
            </li>
        </ul>
    </div>
);