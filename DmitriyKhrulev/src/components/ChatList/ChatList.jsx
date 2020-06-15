import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import {ChatName} from '../ChatName/ChatName'


export const ChatList = ({dialogs}) => {
      return <ul className='chat-list'>
            {dialogs.map((item, index) =>  <ChatName {... item} key={index} />)}
         </ul>  
}
