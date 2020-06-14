import React from 'react'

export default class Child extends React.Component{
    render() {
        return (
        <h1>Counter: {this.props.counter}</h1>
        )
    }
}