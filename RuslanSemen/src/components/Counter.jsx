import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        onCount: PropTypes.func.isRequired,
    };

    // state = {
    //     count: 0,
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //     }
    // }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentDidCatch() {
        console.log('componentDidCatch')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    handleClick = (event) => {
        console.log("Counter -> handleClick -> event", Number(event.target.value))
        this.props.onCount(Number(event.target.value));
    }

    render() {
        console.log("Render is called")
        return (
            <>
                <button value="-10" onClick={this.handleClick}>Удалить 10 пунктов</button>
                <button value="-1" onClick={this.handleClick}>-1</button>
                <strong  style={{margin: '10px'}}>{this.props.count}</strong>
                <button value="1" onClick={this.handleClick}>+1</button>
                <button value="10" onClick={this.handleClick}>+10</button>
            </>
        );
    }
}