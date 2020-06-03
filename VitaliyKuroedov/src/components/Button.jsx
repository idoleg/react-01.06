import React from 'react'

export default class Button extends React.Component{
    
    render(){
        return(
            <button className="button" onClick={this.props.cb} >{this.props.name}</button>
        )
    }
}