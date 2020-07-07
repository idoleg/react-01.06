import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export const Header = () => (
  <div className="header">
    <Link to="/profile">
      Профиль
    </Link>
  </div>
);