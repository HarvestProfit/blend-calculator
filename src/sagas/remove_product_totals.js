import { call, put, take } from 'redux-saga/effects';

import { DELETE_PRODUCT } from '../actions/products';
import { REMOVE_PRODUCT_TOTAL } from '../actions/product_totals';

function* removeProductTotal(product) {
  yield put({ type: REMOVE_PRODUCT_TOTAL, payload: product });
}

export default function* remove() {
  while (true) {
    const action = yield take(DELETE_PRODUCT);
    yield call(removeProductTotal, action.payload);
  }
}
