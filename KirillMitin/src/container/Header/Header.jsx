import React from 'react'

import './Header.css'
import { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                {/* <img src="https://material-ui.com/static/logo_raw.svg" alt="logo"/> */}
                <span>Profile</span>
            </div>
        )
    }
}

export default Header