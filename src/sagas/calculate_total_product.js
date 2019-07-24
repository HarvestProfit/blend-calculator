import { debounce, select } from 'redux-saga/effects';

import { UPDATE_PRODUCT } from '../actions/products';
import { SET_TOTALS } from '../actions/totals';
import { getProducts } from '../reducers/products';
import { getProductTotals, getTotals } from '../reducers/totals';

function* calculateTotalProductUsage() {
  yield console.log('implement me');
}

export default function* calculate() {
  yield debounce(500, [UPDATE_PRODUCT, SET_TOTALS], calculateTotalProductUsage);
}
