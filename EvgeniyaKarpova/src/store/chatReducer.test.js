import chatReducer from './chatReducer';
import { initChats } from './chatAction';
import {loadingChats, sendMessage} from './chatAction';

describe('chatReducer', () => {

    it('loadingChats', () => {
        const store = {isloading: false};
        const action = loadingChats();

        expect(chatReducer(store, action)).toMatchObject({isloading: true})
    });

    it('sendMessage', () => {
        const name = 'Оля';
        const content = 'Привет!';
        const store = { items: { 1: { messages: [] } } };
        const action = sendMessage(1, name, content);

        expect(chatReducer(store, action)).toMatchObject(
            { items: { 1: { messages: [{ name, content }] } } }
        )
    });

    it('sendMessage add message to end of message array', () => {
        const testMessage = { name: 'Лена', content: 'Test message' };
        const name = 'Оля';
        const content = 'Привет!';
        const store = { items: { 1: { messages: [testMessage] } } };
        const action = sendMessage(1, name, content);

        expect(chatReducer(store, action)).toMatchObject(
            { items: { 1: { messages: [testMessage, { name, content }] } } }
        )
    });
})