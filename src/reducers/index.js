import { combineReducers } from 'redux';
import products from './productsReducer';
import orders from './ordersReducer';

export default combineReducers({
  products,
  orders,
});
