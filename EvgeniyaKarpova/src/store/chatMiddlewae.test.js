import chatMiddlewae from './chatMiddlewae';
import { createChat } from './chatAction';
import { push } from 'connected-react-router';

describe('chatMiddlewae', () => {
    it('createChat', () => {
        const id = 1;
        const name = 'Test chat';
        const action = createChat(id, name);
        const store = {
            dispatch: jest.fn(),
        }
        const next = jest.fn();

        chatMiddlewae(store)(next)(action);

        expect(store.dispatch).toHaveBeenCalledTimes(1)
        expect(store.dispatch).toHaveBeenCalledWith(push('/chats/' + id))
    })
    });