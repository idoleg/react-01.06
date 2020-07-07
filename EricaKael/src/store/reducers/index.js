import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    chatReducer,
    messageReducer,
    userReducer
});