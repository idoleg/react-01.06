import { handleActions } from 'redux-actions';
import { initProfile } from './profileActions';

const initialState = {};

export default handleActions({
  [initProfile]: (state, action) => {
    return {
      name: 'Мария',
    };
  },
}, initialState);