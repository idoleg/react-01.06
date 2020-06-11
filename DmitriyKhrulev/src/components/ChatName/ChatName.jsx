import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

export const ChatName = ({ name, theme }) => {
   
   
   return (<li className='chat-name'>
      <strong>{name}:</strong> 
      <i>{theme}</i>
      </li>);
}