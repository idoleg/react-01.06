import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 

import { ROBOT_NAME } from '../../containers/ChatContainer';
import './message.css';

export const Message = ({ name, content }) => {
  const classNameRobot = name === ROBOT_NAME ? 'message_robot' : '';
  const classes = classNames('message', classNameRobot);

  return (<li className={ classes }><strong>{ name }:</strong> {content}</li>);
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}