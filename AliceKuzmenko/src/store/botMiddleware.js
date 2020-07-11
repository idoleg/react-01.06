import {sendMessage, addChat} from './chatActions'
import {sendMessageToBotAPI} from './chatOperations'

import {ROBOT_NAME} from '../containers/ChatContainer/ChatContainer'
const timeoutIds = {};
const ROBOT_API_NAME = "Robot API"
export default store => next => action=>{
            //console.log(store, action, next)
            next(action)
            if(action.type === sendMessage.toString()) {
                const {name, id, content} = action.payload;
        
                if((name !== ROBOT_NAME)&&(name !== ROBOT_API_NAME)){
                   clearTimeout(timeoutIds[id]);
                   store.dispatch(sendMessageToBotAPI(ROBOT_API_NAME,id,content))
                   timeoutIds[id] = setTimeout(genRobotAnswer, 3000, store, id, name);
                   //console.log("robot!")
                }
            } else if(action.type === addChat.toString()) {
                const {id} = action.payload;
                genRobotMsgInNewChat(store, id)
            }
        }
        function genRobotAnswer(store, id, name) {
            const chatName = store.getState().chats.items[id].name;
            const content = `${name}, Не приставай ко мне, я робот!`;
            store.dispatch(sendMessage(id, ROBOT_NAME, content))
        }
        
        function genRobotMsgInNewChat(store, id) {
            const chatName = store.getState().chats.items[id].name;
            const content = `Hello in new chat ${chatName}!`;
            store.dispatch(sendMessage(id, ROBOT_NAME, content))
        }