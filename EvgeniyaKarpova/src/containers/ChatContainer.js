//import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/chatAction';



export const ROBOT_NAME = "Robot";
//  class ChatContainer extends Component {
//     // state = {
//     //     chats: {
//     //         1: {
//     //             name: 'Chat 1',
//     //             messages: [
//     //                 {name: 'Лена', content: 'Превет!'},
//     //                 {name: 'Оля', content: 'Превет!'},
//     //                 {name: 'Лена', content: 'Как дела?'},
//     //                 {name: 'Оля', content: 'Хорошо'}
//     //             ]
//     //         },
//     //         2: {
//     //             name: 'Chat 2',
//     //             messages: [
//     //                 {name: 'Вася', content: 'Превет! Как дела'},
//     //                 {name: 'Петя', content: 'Нормально!'},
                    
//     //             ]
//     //         },
//     //         3: {
//     //             name: 'Chat 3',
//     //             messages: []
//     //         },
//     //     }
                
//     // }
           
// //     timeoutId = null;        

// //    //componentDidUpdate(prevProps, prevState) {
// //        hendleRobotAnswer = () => {
// //         const {id} = this.props.match.params;

// //         if(id && this.state.chats[id]){
// //             const currenMessages = this.state.chats[id].messages;
// //             const lastMessage = currenMessages[currenMessages.length - 1];

// //            // if(prevState.chats[id].messages.length === currenMessages.length) return;

// //             if (lastMessage && lastMessage.name !== ROBOT_NAME) {
// //                 clearTimeout(this.timeoutId);
// //                 this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
// //                     name: ROBOT_NAME,
// //                     content: `Привет ${lastMessage.name}, я Робот`,
// //                 }), 1000);
// //             }

// //         }
// //     }        

//     //  handleSendMessage = (id) => (message) => {
//         //  this.props.sendMessage(id, message.name, message.content);
//     //       this.setState(state => ({
//     //           ...state,
//     //           chats: {
//     //               ...state.chats,
//     //               [id]: {
//     //                   ...state.chats[id],
//     //                   messages: [...state.chats[id].messages, message],
//     //               }
//     //           }
//     //       }), this.hendleRobotAnswer);  



//         // this.setState(state => ({
//         //     messages: [...state.messages, message],
//         // }))
//     // }
    

//     render() {
//        // console.log(this.props);
//         // const {id} = this.props.match.params;
//         // const messages = id && this.props.chats[id] ? this.props.chats[id].messages : null;
//         //const charId = this.props.match.params.id; 
        
//         return (<Chat messages={this.props.messages} onSendMessage={this.props.onSendMessage} charId={this.props.charId}/>)
        
        
//     }
    
// }

const mapStateToProps = (store, props) => {
    const { id } = props.match.params;
    const chat = id && store.chats.items && store.chats.items[id] ? store.chats.items[id] : undefined;
    const chatsNameId = store.chats.items[id];
    const chatsName = {... chatsNameId};
    const chatName = chatsName.name;
    
    return {
        isloading: store.chats.isloading,
        error: store.chats.error,
        messages: chat ? chat.messages : undefined,
        charId: chatName,
        
    }
}

const mapDispatchToProps = (dispatch) => 
 bindActionCreators({sendMessage}, dispatch);

const mergeProps = ( stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;
    const onSendMessage = (message) => {
        dispatchProps.sendMessage(id, message.name, message.content)
    }
    return{
        
        ... stateProps,
        onSendMessage,
      
    }
}
    export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
