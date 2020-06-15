import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import './MessageList.css'

export const MessageList = ({ messages }) => (
   <ul className='message-list'>
      {messages.lenght == 0 && <strong>Empty chat</strong>}
      {messages.map((item,index) => <Message {... item} key={index}/>)}
   </ul>
);

MessageList.propTypes = {
   messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}