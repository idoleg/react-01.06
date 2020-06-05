 import React, { Component, Fragment } from 'react';

export class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //     }
    // }
    state = {
        count: 0,
    }

    setState(state, callback) {
        super.setState(state, callback);
    }

    handleClick = (event) => {
        const count = this.state.count + 1;
        this.setState({count});
    }

    render() {


        return (
            <>
                <strong>{this.state.count}</strong>
                <button onClick={this.handleClick}>+1</button>
            </>
        )
        ;
    }
}