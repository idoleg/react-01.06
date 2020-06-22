import './Header.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

class Header extends Component{
    static propTypes = {
        chatId: PropTypes.number,
        userData: PropTypes.object.isRequired
    };
    static defaultProps = {
        chatId:1,
    };
    render(){
        const {userData} = this.props;
        return<header className="header">
            <span style={{fontSize: '20px'}}>Chat {this.props.chatId}</span>
            <Link to="/profile/">{userData.name}</Link>
        </header>
    }
}

const mapStateToProps = ({userReducer})=>({
    userData: userReducer.userData
});

export default connect(mapStateToProps)(Header);