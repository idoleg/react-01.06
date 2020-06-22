import {createStore, combineReducers, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import botAnswer from './BotMiddleware';


let reducers = combineReducers({
	chatReducer: chatReducer,	
})

export function initStore(){
	const innitialStore = {};
	return createStore(reducers, innitialStore, applyMiddleware(botAnswer))
}