import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

// import PropTypes from 'prop-types';

export const Header = () => {
   return <div className='header'>
            Messenger react 06.2020 GEEK <br/>
            <Link to='/profile'>Profile</Link>
         </div>
}