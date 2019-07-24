import _ from 'lodash';
import {
  SET_TOTALS,
} from '../actions/totals';

const initialState = {
  units: 'lbs',
  nitrogen: '0',
  phosphorous: '0',
  potassium: '0',
  sulfur: '0',
}

export function getTotals(state) {
  return state.totals;
}

export function getTotalsAsNumbers(state) {
  const totals = getTotals(state);
  return {
    nitrogen: _.toNumber(totals.nitrogen),
    phosphorous: _.toNumber(totals.phosphorous),
    potassium: _.toNumber(totals.potassium),
    sulfur: _.toNumber(totals.sulfur),
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOTALS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
