import { sendMessage, createChat } from './chatActions';
import { sendMessageToBot } from './chatOperations';
// export default function (store) {
//     return function (next) {
//         return function (action) {
//             next(action)
//         }
//     }
// }

export const ROBOT_NAME = "Robot";
const timeoutIds = {};

export default store => next => action => {
    next(action);

    if (action.type === sendMessage.toString()) {
        const { name, id, content } = action.payload;

        if (name !== ROBOT_NAME) {
            store.dispatch(sendMessageToBot(ROBOT_NAME, id, content));
            // clearTimeout(timeoutIds[id]);
            // timeoutIds[id] = setTimeout(generateRobotAnswer, 3000, store, id, name);
        }
    } else if (action.type === createChat.toString()) {
        const { id } = action.payload;
        store.dispatch(sendMessageToBot(ROBOT_NAME, id, 'Привет!'));
        // generateRobotMessageInNewChat(store, id)
    }
}

function generateRobotAnswer(store, id, name) {
    const chatName = store.getState().chats.items[id].name;
    const content = `Hello ${name}, I'm Robot in chat ${chatName}`;
    store.dispatch(sendMessage(id, ROBOT_NAME, content))
}

function generateRobotMessageInNewChat(store, id) {
    const chatName = store.getState().chats.items[id].name;
    const content = `Hello everyone!, I'm Robot in new chat ${chatName}! It's awesome =)`;
    store.dispatch(sendMessage(id, ROBOT_NAME, content))
}
