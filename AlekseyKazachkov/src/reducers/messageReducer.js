import update from 'react-addons-update';
import { SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING } from '../actions/messageActions';

const initialStore = {
    messages: {
        1: { text: "Привет!", sender: 'bot' },
        2: { text: "Здравствуйте!", sender: 'bot' },
    },
    isLoading: true,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        case START_MESSAGES_LOADING: {
           return update(store, {
                isLoading: { $set: true },
            });
       }
       case SUCCESS_MESSAGES_LOADING: {
           const messages = {};
           action.payload.forEach(message => {
               messages[message['id']] = {sender: message['sender'], text: message['text']}
           });
           return update(store, {
               messages: { $set: messages },
               isLoading: { $set: false },
            });
       }
       case ERROR_MESSAGES_LOADING: {
           return update(store, {
               isLoading: { $set: false },
           });
       }
       default:
           return store;
    }
}