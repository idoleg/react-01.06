import { sendMessage, createChat } from './chatActions';

export const ROBOT_NAME = "Робот";
const timeoutIds = {};

export default store => next => action => {
  next(action);

  if (action.type === sendMessage.toString()) {
    const { name, id } = action.payload;

    if (name !== ROBOT_NAME) {
      clearTimeout(timeoutIds[id]);
      timeoutIds[id] = setTimeout(generateRobotAnswer, 3000, store, id, name);
    }
  } else if (action.type === createChat.toString()) {
    const { id } = action.payload;
    generateRobotMessageInNewChat(store, id);
  }
};

function generateRobotAnswer(store, id, name) {
  const chatName = store.getState().chats[id].name;
  const content = `Привет, ${ name }. Отвечаю в чат с ${ chatName }`;
  store.dispatch(sendMessage(id, ROBOT_NAME, content));
};

function generateRobotMessageInNewChat(store, id) {
  const chatName = store.getState().chats[id].name;
  const content = `Привет) Я робот в чате "${chatName}"`;
  store.dispatch(sendMessage(id, ROBOT_NAME, content));
};

/* export default function(store) {
  return function(next) {
    return function(action) {
      next(action);
      console.log(store, next, action);
    };
  };
}; */