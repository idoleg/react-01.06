import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from './chatActions';

const initialState = {};

export default handleActions({
  [initChats]: (state, action) => {
    return {
      1: {
        name: 'Ivan',
        messages: [
          {
            id: 0,
            name: 'Мария',
            content: 'Привет)'
          },
          {
            id: 1,
            name: 'Мария',
            content: 'Как у тебя дела?'
          },
          {
            id: 2,
            name: 'Иван',
            content: 'Привет) На карантине скучно. Хочется погулять'
          },
          {
            id: 3,
            name: 'Иван',
            content: 'Как ты?'
          }
        ],
      },
      2: {
        name: 'Tatyana',
        messages: [
          {
            id: 0,
            name: 'Татьяна',
            content: 'Привет)'
          },
          {
            id: 1,
            name: 'Татьяна',
            content: 'Как у тебя дела?'
          }
        ],
      },
      3: {
        name: 'Lidia',
        messages: [],
      },
    };
  },
  [sendMessage]: (state, action) => {
    const { id, name, content } = action.payload;

    return {
      ...state,
      [id]: {
        ...state[id],
        messages: [
          ...state[id].messages,
          { name, content }
        ]
      }
    };
  },
}, initialState);