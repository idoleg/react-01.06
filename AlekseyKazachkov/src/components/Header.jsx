import React from 'react';

export default class Header extends React.Component {
    UNSAFE_componentWillMount() {
        // console.log('Header componentWillMount');
    }

    componentDidMount() {
        // console.log('Header componentDidMount');
    }

    componentDidUpdate() {
        // console.log('Header componentDidMount');
    }
    
    render() {
        // console.log("Header render");
    
        return (
            <div className="header">
                <h1>Head</h1>
            </div>
        )
    }
}