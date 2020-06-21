import React from 'react';
import { ROBOT_NAME } from '../../containers/ChatContainer/ChatContainer';

export const Message = ({ name, content }) => {
    const isRobot = name === ROBOT_NAME ? ' robots-msg' : '';
    const isMe = name === 'Me' ? ' my-msg' : '';
    
return <li className={'message' + (isRobot) + (isMe)}><strong>{name}:</strong> {content}</li>
}