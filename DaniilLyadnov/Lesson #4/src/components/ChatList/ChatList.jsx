import './ChatList.css'
import React from 'react';
import {Link} from "react-router-dom";

export const ChatList = ({chats}) => (
    <div className={'chat-list'}>
        <ul>
            <li>
                <Link to="/chats/1">
                    <img src={''} alt={''} className={'chat-avatar'}/>
                    <p>
                        <span>Chat 1</span>
                        <span>{console.log(chats['1'].messages[chats['1'].messages.length - 1])}</span>
                    </p>
                </Link>
            </li>
            <li>
                <Link to="/chats/2">
                    <img src={''} alt={''} className={'chat-avatar'}/>
                    Chat 2
                </Link>
            </li>
            <li>
                <Link to="/chats/3">
                    <img src={''} alt={''} className={'chat-avatar'}/>
                    Chat 3
                </Link>
            </li>
            <li>
                <Link to="/chats/4">
                    <img src={''} alt={''} className={'chat-avatar'}/>
                    Chat 4
                </Link>
            </li>
        </ul>
    </div>
);