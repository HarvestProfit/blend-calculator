import { combineReducers } from 'redux';

import products from './products';
import productTotals from './product_totals';
import totals from './totals';

export default combineReducers({
  products,
  product_totals: productTotals,
  totals,
});
