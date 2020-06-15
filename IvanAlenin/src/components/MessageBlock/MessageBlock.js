import React from "react";
import PropTypes from "prop-types";

import './css/styles.css';

export const MessageBlock = ({name, content, position, color, avatarUrl, date}) => {

    // Styling background with color or image
    const Avatar = () => {
        if (avatarUrl !== "false") {
            return (
                <p className="rounded-circle text-monospace" style={{background: 'url(' + avatarUrl + ')'}}/>);
        } else
            return (
                <p className="rounded-circle text-monospace" style={{background: color}}>
                    {name.substr(0, 1).toUpperCase()}
                </p>);
    };


    return (
        position === "left"
            ?
            <div className="media w-75 mb-3">
                <Avatar/>
                <div className="media-body ml-3">
                    <div className="bg-light rounded px-3 py-2 shadow-lg">
                        <p className="mb-0 text-muted">{content}</p>
                        <p className="mb-0 small text-muted text-right">{name},&nbsp; {date.toLocaleString("ru", options)}</p>
                    </div>
                </div>
            </div>
            :
            <div className="media ml-auto w-75 mb-3">
                <div className="media-body ml-3">
                    <div className="bg-success rounded px-3 py-2 shadow-lg">
                        <p className="mb-0 text-light ">{content}</p>
                        <p className="mb-0 small text-light text-right">{name},&nbsp; {date.toLocaleString("ru", options)}</p>
                    </div>

                </div>
            </div>
    );
};

MessageBlock.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
    color: function (props, propName, componentName) {
        // #(?:[0-9a-f]{2}){2,4} Match #ARGB, #RRGGBB, or #AARRGGBB
        const st = new RegExp('^(#(?:[0-9a-f]{2}){2,4})');
        if (!st.test(props[propName])) {
            return new Error('Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.');
        }
    },
    avatarUrl: PropTypes.string,
    date: PropTypes.instanceOf(Date)
};

MessageBlock.defaultProps = {
    avatarUrl: 'false',
    color: '#5462a8'
};

const options = {
    hour: 'numeric',
    minute: 'numeric',
    // era: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
    // timezone: 'UTC',
    // second: 'numeric'
};