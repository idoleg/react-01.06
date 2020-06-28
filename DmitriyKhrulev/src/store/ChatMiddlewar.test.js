import ChatMiddlewar from './ChatMiddlewar';
import { createChat } from './chatActions';
import { push } from 'connected-react-router';

describe('ChatMiddleWare', () => {
   it('', () => {
      const id = 1;
      const name = 'test chat'
      const action = createChat(id, name);
      const store = {
         dispatch: jest.fn()
      }
      const next = jest.fn()

      ChatMiddlewar(store)(next)(action)

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(push('/chats/' + id))
   })
})