import React from 'react';
import { ROBOT_NAME } from '../../containers/ChatContainer/ChatContainer';
import {ROBOT_API_NAME} from '../../store/botMiddleware'
export const Message = ({ name, content }) => {
    const isRobot = name === ROBOT_NAME ? ' robots-msg' : '';
    const isRobotAPI = name === ROBOT_API_NAME ? ' robots-api-msg' : '';
    const isMe = name === 'Me' ? ' my-msg' : '';
    
return <li className={'message' + (isRobot) + (isMe) + (isRobotAPI)}><strong>{name}:</strong> {content}</li>
}