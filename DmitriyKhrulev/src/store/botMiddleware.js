import { sendMessage, createChat } from './chatActions';
import { sendMessageToBot } from './chatOperations';


export const ROBOT = 'Robot';
let timeoutIds = {};

export default store => next => action => {
   next(action);

   if (action.type === sendMessage.toString()) {
      const { name, id, content } = action.payload;

      if (name !== ROBOT) {
         store.dispatch(sendMessageToBot(ROBOT, id, content));
         // clearTimeout(timeoutIds[id]);
         // timeoutIds[id] = setTimeout(generateRobotAnswer, 3000, store, id, name);
      }
   } else if (action.type === createChat.toString()) {
      const { name, id } = action.payload;
      store.dispatch(sendMessageToBot(ROBOT, id, 'Привет'));
      // generateRobotMessageInNewChat(store, id)
   }
}

function generateRobotAnswer(store, id, name) {
   const chatName = store.getState().chats.items[id].name;
   const content = `Hello ${name}, I'am Robot in chat ${chatName}`;

   store.dispatch(sendMessage(id, ROBOT, content))
}

function generateRobotMessageInNewChat(store, id) {
   const chatName = store.getState().chats.items[id].name;
   const content = `Hello, I'am Robot in new chat ${chatName}`;

   store.dispatch(sendMessage(id, ROBOT, content))
}