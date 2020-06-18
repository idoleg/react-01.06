import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';

import {Link} from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import {TextField} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add'
import ContentSend from 'material-ui/svg-icons/content/send';
import {addChat} from '../../store/actions/chatActions';

import PropTypes from 'prop-types';

class ChatList extends Component{
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired
    };

    state={
        input: '',
    };

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    };

    handleKeyUp=(e)=>{
        if(e.keyCode === 13){
            this.handleAddChat();
        }
    };

    handleAddChat = ()=>{
        if(this.state.input.length > 0){
            this.props.addChat(this.state.input);
            this.setState({input: ''});
        }
    };

    render(){
        const {chats} = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={chatId} to={`/chat/${chatId}`}>
                <ListItem
                    primaryText={chats[chatId].title}
                    leftIcon={<ContentSend/>}
                />
            </Link>
        ));


        return <div style={{width: '30%'}}>
            <List>
                {chatElements}
                <ListItem
                    key="Add new chat"
                    leftIcon={ <AddIcon /> }
                    onClick={this.handleAddChat}
                    style={{height: '60px'}}
                    children={
                        <TextField
                            key="textField"
                            fullWidth
                            name="input"
                            hintText="Add new chat"
                            onChange={this.handleChange}
                            value={this.state.input}
                            onKeyUp={this.handleKeyUp}
                        />
                    }
                />
            </List>
        </div>
    }
}

const mapStateToProps = ({chatReducer})=>({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);