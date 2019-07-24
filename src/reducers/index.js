import { combineReducers } from 'redux';

import products from './products';
import totals from './totals';

export default combineReducers({
  products,
  totals,
});
