import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'
import ChatBubbleRounded from '@material-ui/icons/ChatBubbleRounded'

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });
class ChatListItem extends Component{
    
    render(){
        const { classes } = this.props
        return(
            <Link to={'/'+this.props.data.id} className='link' onClick={() => {this.props.handleCurrentChatName(this.props.data.name)}} >
                <ListItem className={classes.root}>
                    <ListItemAvatar>
                        <Avatar src={this.props.data.avatar}/>
                    </ListItemAvatar>
                    <ListItemText primary={this.props.data.name}/>
                    <ListItemIcon>
                        <IconButton edge="end" aria-label="comments">
                          <ChatBubbleRounded />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            </Link>
        )
    }
}
ChatListItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ChatListItem);