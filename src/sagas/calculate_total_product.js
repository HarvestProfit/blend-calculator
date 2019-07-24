import { debouce, select } from 'redux-saga/effects';

import { getProducts } from '../reducers/products';
import { getProductTotals, getTotals } from '../reducers/totals';

function* calculateTotalProductUsage() {
  yield console.log('implement me');
}

export default function* calculate() {
  yield debouce(500, [], calculateTotalProductUsage);
}
