import { call, debounce, put, select } from 'redux-saga/effects';

import { UPDATE_PRODUCT } from '../actions/products';
import { SET_PRODUCT_TOTAL, REMOVE_PRODUCT_TOTAL } from '../actions/product_totals';
import { SET_TOTALS } from '../actions/totals';
import { getNitrogenProduct, getPhosphorousProduct, getPotassiumProduct, getSulfurProduct } from '../reducers/products';
import { getTotalsAsNumbers } from '../reducers/totals';

const chemicals = ['nitrogen', 'potassium', 'phosphorous', 'sulfur'];

function productTotalsForAmount(originalProduct, amount, chemical) {
  const product = {
    id: originalProduct.id,
    name: originalProduct.name,
    amount,
    [chemical]: amount,
  };
  for (let index = 0; index < chemicals.length; index += 1) {
    const chemicalName = chemicals[index];
    product[chemicalName] = (originalProduct[chemicalName] / 100) * amount;
  }
  return product;
}

function subtractProductFromTotal(total, productTotal) {
  return {
    nitrogen: total.nitrogen - productTotal.nitrogen,
    phosphorous: total.phosphorous - productTotal.phosphorous,
    potassium: total.potassium - productTotal.potassium,
    sulfur: total.sulfur - productTotal.sulfur,
  }
}

function* getProductForRemainingTotal(originalTotal, product, chemical) {
  if (!product) {
    return originalTotal;
  }

  const amount = product[chemical] > 0 ? originalTotal[chemical] / (product[chemical] / 100) : 0;
  const productTotal = yield call(productTotalsForAmount, product, amount, chemical);
  yield put({ type: SET_PRODUCT_TOTAL, payload: productTotal });

  const total = yield call(subtractProductFromTotal, originalTotal, productTotal);
  return total;
}

function* calculateTotalProductUsage() {
  let remainingTotals = yield select(getTotalsAsNumbers);

  const sulfurProduct = yield select(getSulfurProduct);
  remainingTotals = yield call(getProductForRemainingTotal, remainingTotals, sulfurProduct, 'sulfur');

  const potassiumProduct = yield select(getPotassiumProduct);
  remainingTotals = yield call(getProductForRemainingTotal, remainingTotals, potassiumProduct, 'potassium');

  const phosphorousProduct = yield select(getPhosphorousProduct);
  remainingTotals = yield call(getProductForRemainingTotal, remainingTotals, phosphorousProduct, 'phosphorous');

  const nitrogenProduct = yield select(getNitrogenProduct);
  yield call(getProductForRemainingTotal, remainingTotals, nitrogenProduct, 'nitrogen');
}

export default function* calculate() {
  yield debounce(500, [UPDATE_PRODUCT, SET_TOTALS, REMOVE_PRODUCT_TOTAL], calculateTotalProductUsage);
}
