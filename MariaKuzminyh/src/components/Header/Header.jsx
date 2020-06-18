import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = (props) => (
  <div className="header">
    <ul className="menu">
      <Link to="/" className="menu-item">
        Главная
      </Link>
      <Link to="/chats" className="menu-item">
        Чаты
      </Link>
      <Link to="/profile" className="menu-item">
        { props.profileName }
      </Link>
    </ul>
  </div>
);

const mapStateToProps = (store, props) => {
  return {
    profileName: store.profileData.name,
  };
};

export default connect(mapStateToProps)(Header);