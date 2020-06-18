import {createStore, combineReducers} from 'redux';
import chatReducer from './chatReducer'
import messagesReducer from './messagesReducer';

let reducers = combineReducers({
	chatReducer: chatReducer,
	messagesReducer: messagesReducer
})

export function initStore(){
	const innitialStore = {};
	return createStore(reducers, innitialStore)
}