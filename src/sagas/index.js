import { all, fork } from 'redux-saga/effects';

import calculate from './calculate_total_product';
import remove from './remove_product_totals';

export default function* root() {
  yield all([
    fork(calculate),
    fork(remove),
  ])
}
