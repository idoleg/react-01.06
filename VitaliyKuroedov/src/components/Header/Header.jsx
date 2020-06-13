import React, {Component, Fragment} from 'react'
import { Button } from '@material-ui/core'

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="header">
                <h2 className="header__title">{this.props.title}</h2>
                <Button variant="contained" color="primary" onClick={this.props.addChat}>Новый чать</Button>
            </header>
        )
    }
}