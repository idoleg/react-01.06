import React, {Component, Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Dialog from '../Dialog/Dialog'
export default class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header className="header">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" className="button" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="header__title">
                            {this.props.title}
                        </Typography>
                        <Button color="inherit" variant="outlined" href='/'>Чаты</Button>
                        <Button color="inherit" variant="outlined" onClick={this.props.addChat}>Новый чать</Button>
                        <Button color="inherit" variant="outlined" href='/profile'>Профиль</Button>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}




