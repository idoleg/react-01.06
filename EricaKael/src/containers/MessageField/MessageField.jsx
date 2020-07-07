import './MessageField.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';

import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../../components/Message';


class MessageField extends Component{
    static propTypes={
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };
    
    state={
        input: '',
    }
    
    /*constructor(props){
        super(props);
        this.textInput = React.createRef();
    }*/

    /*state = {
        chats:{
            1:{title: 'Chat 1', messageList:[1]},
            2:{title:'Chat 2', messageList:[2]},
            3:{title:'Chat 3', messageList:[]}
        },
        messages: {
            1:{text:"Hi", name: "Robot"},
            2:{text:"HOw are you?", name:"Vlad"}
        },
        input: '',
    };*/

    /*componentDidMount(){
        this.textInput.current.focus();
    }*/

    handleClick = ()=>{
        //this.sendMessage(message)
        this.handleSendMessage(this.state.input, 'me')
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }
    handleKeyUp=(e)=>{
        if(e.keyCode === 13){
            this.handleSendMessage(this.state.input, 'me')
        }
    };
    handleSendMessage = (message, name)=>{
        if(this.state.input.length > 0 || name === 'Robot'){
            this.props.sendMessage(message, name);
        }
        if(name === 'me'){
            this.setState({input: ''});
        }
    };
    /*sendMessage = (message)=>{
        this.setState({messages:[...this.state.messages, {'name':'me', 'text':message}]});
        this.state.input = '';
    }*/

    /*componentDidUpdate(prevProps, prevState){
        const {messages} = this.state;
        const lastMessage = Object.values(messages)[Object.values(messages).length-1].name;

        if(Object.keys(prevState.messages).length < Object.keys(messages).length && lastMessage === 'me'){
            setTimeout(()=>{
                this.handleSendMessage('I`m a robot', 'Robot')
            }, 1000);
        }
    }*/

    render(){
        //const {messages, chats}=this.state;
        const{chatId, messages, chats}=this.props;
        const messageELements = chats[chatId].messageList.map(messageId =>(
            <Message
                key={messageId}
                text={messages[messageId].text}
                name={messages[messageId].name}
            />
        ));
        return[
        <div className='layout'>
            <div key='messageELements' className='message-field'>
                {messageELements}
            </div>
            <div key='textInput' style={{width: '100%', display: 'flex'}}>
                <TextField 
                    /*ref={this.textInput}*/
                    name="input"
                    fullWidth={true}
                    hintText="Write a message"
                    style={{fontSize: '12px'}}
                    onChange={this.handleChange}
                    value={this.state.input} 
                    onKeyUp={this.handleKeyUp} 
                />
                <FloatingActionButton onClick={()=>this.handleClick()}>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        </div>
        ] 
    }
}

const mapStateToProps = ({chatReducer})=>({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);