import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
export default class Header extends Component {
    constructor(props){
        super(props)
    }

    state = {
        open: false,
        input: '',
    }

    setOpen (value) {
        this.setState({open: value})
    }

    handleClickOpen = () => {
        this.setOpen(true)
    }

    handleClose = () => {
        this.setOpen(false)
    }

    handleAddChat =() => {

        if(this.state.input.length > 0){
            this.props.addChat(this.state.input)
            this.handleClose()
        }
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }
 
    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            if(this.state.input.length > 0){
                this.props.addChat(this.state.input)
                this.handleClose()
            }
        }
    }

    render(){

        let title = ''
        if (this.props.currentChatName.length > 0 || !this.props.currentChatName === undefined) {
            title = this.props.currentChatName 
        } else {
            title = this.props.title
        }
        

        return(
            <header className="header">
                <AppBar position="static">
                    <Toolbar variant="dense" className="header">
                        <Typography variant="h6" className="header__title">
                            {title}
                        </Typography>
                        <Link to='/' className='link'>
                            <Button color="inherit" variant="outlined">
                                Чаты
                            </Button>
                        </Link>
                        <Link to='/profile' className='link'>
                            <Button color="inherit" variant="outlined">
                                Профиль
                            </Button>
                        </Link>
                        <Link to='/' className='link'>
                            <Button variant="outlined" color="inherit" onClick={this.handleClickOpen}>
                                Новый Чат
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Новый чат</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Введите имя собеседника
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя Собеседнка"
                        onChange= {this.handleChange} 
                        value= {this.state.input} 
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={this.handleAddChat} color="primary">
                        Сохранить
                    </Button>
                    </DialogActions>
                </Dialog>
            </header>
        )
    }
}




