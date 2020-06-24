import { sendMessage } from "./chatActions";

// export default function (store) {
//     return function (next) {
//         return function (action) {
//             next(action)
//         }
//     }
// }

export  const BOT_NAME = 'bot';

const timeoutIds = {};

export default store => next => action => {
    next(action);

    if(action.type === sendMessage.toString()) {
        const {name, id} = action.payload;

        if (name !== BOT_NAME) {
            clearTimeout(timeoutIds[id]);
            timeoutIds[id] = setTimeout(generateBotAnswer, 3000, store, id, name);
        }
    }
}

function generateBotAnswer (store, id, name) {
    const chatName = store.getState().chats[id].name;
    const content = `Hey, ${name}, I'm a bot in chat ${chatName}`;
    store.dispatch(sendMessage(id, BOT_NAME, content));
}