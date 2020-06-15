import './Header.css'
import React from 'react';

export const Header = () => (
    <header className={'header'}>
        <div className="header-left">

        </div>

        <div className="header-right">
            <div className="header-profile">
                <a href={'/profile/'}>Profile</a>
            </div>
        </div>
    </header>
);