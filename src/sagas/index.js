import { all, fork } from 'redux-saga/effects';

import calculate from './calculate_total_product';

export default function* root() {
  yield all([
    fork(calculate),
  ])
}
