// queryReducer.js
import { SET_QUERY } from './actionType';
import { initialState } from './initialState';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
