import './Header.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    static propTypes = {
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId:1,
    };
    render(){
        return<header className="header">
            <span style={{fontSize: '20px'}}>Chat {this.props.chatId}</span>
            <Link to="/profile/">Profile</Link>
        </header>
    }
}