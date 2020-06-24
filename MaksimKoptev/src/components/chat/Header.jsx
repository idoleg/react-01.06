import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <header>
                <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}