import React, { Component, Fragment } from 'react';


export class Counter extends Component {

    // state = {
    //     count: 0
    // } 

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }        
    // }

    handleClick = (event) => {
        this.props.onCount(1);
        // console.log(event);
        // const count = this.state.count + 1;
        // this.setState({ count });
    }

    componentDidMount() {
        console.log('Did Mount')
    }

    componentWillUnmount() {
        console.log('componentWillUnMount')
    }

    render() {
        console.log('render this');
        return (
            <>
                <button onClick={this.handleClick}>-1</button>
                <strong style={{margin: '10px'}}>{ this.props.count }</strong>
                <button onClick={this.handleClick}>+1</button>
            </>
            
        );
    }
}