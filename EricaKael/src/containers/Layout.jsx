import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import ChatList from '../containers/ChatList/ChatList';
import Header from '../containers/Header/Header';
import MessageField from '../containers/MessageField/MessageField';
import {sendMessage} from '../store/actions/messageActions';

class Layout extends Component{
    static propTypes ={
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    };
    static defaultProps = {
        chatId:1,
    };

    state = {
        messages: {
            1:{text:"Hi", name: "Robot"},
            2:{text:"HOw are you?", name:"Vlad"}
        },
    };

    componentDidUpdate(prevProps, prevState){
        const {messages} = this.state;
        const lastMessage = Object.values(messages)[Object.values(messages).length-1].name;

        if(Object.keys(prevState.messages).length < Object.keys(messages).length && lastMessage === 'me'){
            setTimeout(()=>{
                this.sendMessage('I`m a robot', 'Robot')
            }, 1000);
        }
    }

    sendMessage = (message, name)=>{
        const {messages}=this.state;
        const {chatId}=this.props;

        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages:{...messages, [messageId]:{text:message, name: name}},
        });
        this.props.sendMessage(messageId, message, name, chatId);
    };

    /*addChat = (title) =>{
        const {chats} = this.state;

        const chatId = Object.keys(chats).length + 1;
        this.setState({
            chats: {...chats,
            [chatId]:{title:title, messageList:[]},
            }
        })
    };*/

    render(){
        return <div>
            <Header chatId={this.props.chatId} />
            <div style={{display: 'flex'}}>
                <ChatList />,
                <MessageField 
                    chatId={this.props.chatId}
                    messages={this.state.messages}
                    sendMessage={this.sendMessage}
                />
            </div>
        </div>
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);