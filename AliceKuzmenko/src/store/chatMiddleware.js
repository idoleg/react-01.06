import {sendMessage, addChat} from './chatActions'
import {push} from 'connected-react-router'
export default store => next => action=>{
    next(action)
    if(action.type === addChat.toString()){
        console.log (action.payload.id)
        store.dispatch(push("/chats/"+action.payload.id))

    }
}