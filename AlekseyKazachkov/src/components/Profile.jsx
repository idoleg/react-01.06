import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/style.css";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div>Name: Alexander</div>
                <div>Age: 27</div>
                <Link to="/">
                    <div>Back</div>
                </Link>
            </div>
        )
    }
}