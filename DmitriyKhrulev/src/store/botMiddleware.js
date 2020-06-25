import { sendMessage, createChat } from './chatActions'

// export default function (store) {
//    return function(next) {
//       return function(action) {
//          next(action)
//          console.log(store, next, action);
//       }
//    }
// }

export const ROBOT = 'Robot';
let timeoutIds = {};

export default store => next => action => {
   next(action)

   if (action.type === sendMessage.toString()) {
      const { name, id } = action.payload;

      if (name !== ROBOT) {
         clearTimeout(timeoutIds[id]);
         timeoutIds[id] = setTimeout(generateRobotAnswer, 3000, store, id, name);
      }
   } else if (action.type === createChat.toString()) {
      const { name, id } = action.payload;
      generateRobotMessageInNewChat(store, id)
   }
}

function generateRobotAnswer(store, id, name) {
   const chatName = store.getState().chats[id].name;
   const content = `Hello ${name}, I'am Robot in chat ${chatName}`;

   store.dispatch(sendMessage(id, ROBOT, content))
}

function generateRobotMessageInNewChat(store, id) {
   const chatName = store.getState().chats[id].name;
   const content = `Hello, I'am Robot in new chat ${chatName}`;

   store.dispatch(sendMessage(id, ROBOT, content))
}