import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Message.css'
import { ROBOT } from '../../store/botMiddleware'

export const Message = ({ name, content }) => {
   
   const isRobot = name === ROBOT ? 'message--is-robot' : '';
   return (<li className={'message ' + isRobot}><strong>{name}:</strong> {content}</li>);
};
Message.propTypes = {
   name: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
}