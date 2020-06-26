import React from 'react';
import { Link } from "react-router-dom";
import useInput from '../../hooks/useInput';

export const ChatList = ({ isLoading, chats, createChat }) => {
    const [name, setName, setNameState] = useInput("");

    if (isLoading) {
        return <strong>Подождоите, чаты грузятся.</strong>
    }
    const handleClick = () => {
        createChat(new Date().valueOf(), name);
        setNameState('');
    }
    return (
        <ul>
            {chats.map(({ id, name }) => (<li key={id}><Link to={"/chats/" + id}>{name}</Link></li>))}
            <li>
                <input
                    placeholder="Type name of chat"
                    onChange={setName}
                    value={name}
                />
                <button onClick={handleClick}>Add new chat</button>
            </li>
        </ul>
    )
}