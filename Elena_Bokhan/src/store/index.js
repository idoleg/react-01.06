import {createStore, combineReducers} from 'redux';
import chatReducer from './chatReducer';


let reducers = combineReducers({
	chatReducer: chatReducer,	
})

export function initStore(){
	const innitialStore = {};
	return createStore(reducers, innitialStore)
}