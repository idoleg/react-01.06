import './MessageList.css';

import React from "react";
import {Message} from "../Message/Message";
import PropTypes from "prop-types";

export const MessagesList = ({messages}) => (
    <ul className="message-list">
        {messages.length == 0 && <strong>Здесь нет сообщений. <br/>Напиши сообщение!</strong>}
       {messages.map((item, index) => <Message {...item} key={index}/>)}
    </ul>
); // ...item  =  name={item.name} content={item.content}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}

 