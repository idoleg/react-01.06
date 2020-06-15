import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Profile from './Profile';
import "../styles/style.css";

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    }; 
    static defaultProps = {
        chatId: 1,
    }; 
    render() { 
        return (
            <div className="header">
                <div>
                    <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
                </div>
                <div>
                    <Link to="/profile/">
                        <div onClick={() => <Profile /> }>
                            profile
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}