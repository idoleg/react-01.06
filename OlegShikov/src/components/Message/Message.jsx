import './Message.css';

import React from 'react';
import PropTypes from 'prop-types';
// import { ROBOT_NAME } from '../../containers/ChatContainer';

export const Message = ({ name, content }) => {

    const isRobot = name === 'Robot' ? ' message--is-robot' : '';

    return (<li className={'message' + isRobot}><strong>{name}:</strong> {content}</li>);
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}
