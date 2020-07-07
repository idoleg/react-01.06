import { sendMessage, createChat } from './chatActions';
import { ROBOT_NAME } from '../containers/ChatContainer';
import { sendMessageToBot } from './chatAsyncActions'

//const timeoutIds = {};

export const botMiddleware = (store) => (next) => (action) => {
    next(action);

    if(action.type === sendMessage.toString()) {
        const { id, name, content } = action.payload;

        if (name !== ROBOT_NAME) {
            store.dispatch(sendMessageToBot(ROBOT_NAME, id, content));
            //clearTimeout(timeoutIds);
            //timeoutIds[id] = setTimeout(generateRobotAnswers, 2000, store, id, name);
        }
    }
    
    else if (action.type === createChat.toString()) {
        const { id, name } = action.payload;
        //generateRobotGreetings(store, id);
    }
}

/* function generateRobotAnswers(store, id, name) {
    const chatName = store.getState().chats.items[id].name;
    const content = `Hello, ${name}, my name is ${ROBOT_NAME}, now we are in the ${chatName}`;
    store.dispatch(sendMessage(id, ROBOT_NAME, content))
}

function generateRobotGreetings(store, id) {
    const chatName = store.getState().chats.items[id].name;
    const content = `Hello, user, my name is ${ROBOT_NAME}, and that's your new "${chatName}"`;
    store.dispatch(sendMessage(id, ROBOT_NAME, content))
} */