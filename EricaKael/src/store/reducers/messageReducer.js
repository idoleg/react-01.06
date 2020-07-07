import update from 'react-addons-update';
import {ADD_MESSAGE} from '../actions/messageActions';

const initialStore = {
    messages:{
        1:{text:"Hi", name: "Robot"},
        2:{text:"HOw are you?", name:"Robot"}
    },
};

export default function messageReducer(store = initialStore, action){
    switch(action.type){
        case ADD_MESSAGE:{
            const messageId = Object.keys(store.messages).length + 1;
            return update(store, {
                messages: { $merge: {
                   [messageId]: {
                        text: action.text, name: action.name
               } } },
            }); 
        }
        default:
            return store;
    }
}