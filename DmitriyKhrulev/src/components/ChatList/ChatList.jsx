import React from 'react';
import { Link } from 'react-router-dom';
import './ChatList.css'
import useInput  from '../../hooks/useInput'


export const ChatList = ({chats, createChat}) => {
      const [name, setName, setNameState] = useInput('')
      const handleClick = () => {
            setNameState('');
            createChat(new Date().valueOf(), name)
      }
      const handleKeyUp = (e) => {
            if (e.keyCode === 13) {
               e.preventDefault();
               setNameState('');
               createChat(new Date().valueOf(), name);
               
            }
      }
      return (
            <ul className='chat-list'>
                  {chats.map(({id, name}) => (<li key={id}><Link to={'/chats/' + id}>{name}</Link></li>))}
            <li>
                  <input 
                  placeholder="Type name of Chat" 
                  onChange={setName}
                  onKeyUp={e => handleKeyUp(e, name)}
                  value={name}/>
                  <button onClick={handleClick}>"Add new chat"</button>      
            </li>      
            </ul>
      ) 
}
