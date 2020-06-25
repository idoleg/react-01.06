import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import '../containers/ChatContainer.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/chatActions'


// export const ROBOT = 'Robot'
// class ChatContainer extends Component {
   // state = {
   //    chats: {
   //       1: {
   //          name:'Chat 1',
   //          messages: [
   //             { name: 'Ivan', content: 'Hello' },
   //             { name: 'Gref', content: 'Hi' },
   //          ],
   //       },
   //       2: {
   //          name: 'Chat 2',
   //          messages: [
   //             // { name: 'Ivan', content: 'Hello' },
   //             // { name: 'Gref', content: 'Hi' },
   //             { name: 'Pupu', content: 'Good day' },
   //             { name: 'Medved', content: 'Ola' },
   //          ],
   //       },
   //       3: {
   //          name: 'Chat 3',
   //          messages: [],
   //       }
   //    },
      
      
   // }
   // timeoutId = null;

   // componentDidUpdate(prevProps, prevState) {
   //    handleRobotAnswer = () =>{
   //    const {id} = this.props.match.params;

   //    if (id && this.state.chats[id]) {
   //       const currentMessages = this.state.chats[id].messages;
   //       const lastMessage = currentMessages[currentMessages.length - 1];

         // if(prevState.chats[id].messages.length === currentMessages.length) return;

   //       if (lastMessage && lastMessage.name !== ROBOT) {
   //          clearTimeout(this.timeoutId);
   //          this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
   //                name: ROBOT,
   //                content: `Ola ${lastMessage.name}`
   //             }), 1000);
   //          }
   //       }
   //    }
      
      
      
  
//    // handleSendMessage = (id) => (message) => {
//    //    this.props.sendMessage(id, message.name, message.content)
//    // }
//    render() {
//       // const {id} = this.props.match.params;
//       // const messages = id && this.props.chats[id] ? this.props.chats[id].messages: null;
//       // console.log(this.props);
//       // const {id} = this.props.match.params;
//       return <div className='chat-field'>
//          <Chat messages={this.props.messages} onSendMessage={this.props.onSendMessage} /> 
//       </div>
//    }
// }

const mapStateToProps = (store, props) => {
   const {id} = props.match.params;
   const chat = id && store.chats && store.chats[id]  ? store.chats[id] : undefined;
   // console.log(id);
   return {
      messages: chat ? chat.messages : undefined,
   }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
   const {id} = ownProps.match.params;

   const onSendMessage = (message) => {
      dispatchProps.sendMessage(id, message.name, message.content);
   }
   return {
      ...stateProps,
      onSendMessage,
   }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat)

{/* <ChatList dialogs={this.state.dialogs}/> */}
// dialogs: [
//    {name: "Conversation1", theme: 'Theme1', num: 'chats/1'},
//    {name: "Conversation2", theme: 'Theme2', num: 'chats/2'},
//    {name: "Conversation3", theme: 'Theme3', num: 'chats/3'},
//    {name: "Conversation4", theme: 'Theme4', num: 'chats/4'},
//    {name: "Conversation5", theme: 'Theme5', num: 'chats/5'},
// ]