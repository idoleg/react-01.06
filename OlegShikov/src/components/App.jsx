import React, { Component } from 'react';
import { Counter } from './Counter'

export class App extends Component {

    state = {
        isShowCounter: true,
        count: 0,
    }

    handleClick = () => {
        this.setState((state) => ({ isShowCounter: !state.isShowCounter }))
    }

    handleCount = (number) => {
        this.setState((state) => ({ count: state.count + number }))
    }

    render() {
        const { isShowCounter, count } = this.state;
        return (
            <>
                {isShowCounter && <Counter count={count} onCount={this.handleCount}/>}
                <p>
                    <button onClick={this.handleClick}>
                        {isShowCounter ? "Hide counter" : "Show counter"}
                    </button>
                </p>
            </>
        );
    }
}

// count={count} onCount={this.handleCount}