import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import {ChatName} from '../ChatName/ChatName';
import { Link } from 'react-router-dom';
import './ChatList.css'


// export const ChatList = ({dialogs}) => {
//       return <ul className='chat-list'>
//             {dialogs.map((item, index) =>  <ChatName {... item} key={index} />)}
//          </ul>  
// }

export const ChatList = () => (
      <ul className='chat-list'>
            <li><Link to='/chats/1'>Chat 1</Link></li>
            <li><Link to='/chats/2'>Chat 2</Link></li>
            <li><Link to='/chats/3'>Chat 3</Link></li>
            <li><Link to='/chats/4'>Chat 4</Link></li>
      </ul>
)
