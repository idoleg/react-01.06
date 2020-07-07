import {SEND_MESSAGE, sendMessage, addMessage} from '../actions/messageActions';

export default store => next => (action) =>{
    switch(action.type){
        case SEND_MESSAGE:
            if(action.name === 'me'){
                setTimeout(
                    ()=>{store.dispatch(
                        addMessage( 'I`m a Robot', 'Robot')
                    );
                    setTimeout(()=>store.dispatch(
                        sendMessage(Object.keys(store.getState().messageReducer.messages).length, 'I`m a Robot', 'Robot', action.chatId)
                    ),1000)
                },
                1000);
            }
    }
    return next(action)
}