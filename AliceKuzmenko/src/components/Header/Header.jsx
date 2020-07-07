import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';
export const Header = () => {
    
return <header><h1>ReactChat</h1> <Link to="/profile">Your profile</Link></header>
}