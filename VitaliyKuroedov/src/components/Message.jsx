import React from 'react'

export default class Message extends React.Component{
    render(){
        return(
            <li><strong>{this.props.name}</strong>: {this.props.content}</li>
        )
    }
}