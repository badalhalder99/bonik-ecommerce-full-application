import cartReducer from './cart/cartReducer';
import searchReducer from './search/searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  query: searchReducer,
});

export default rootReducer;