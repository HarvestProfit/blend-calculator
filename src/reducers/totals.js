import {
  SET_TOTALS,
  SET_PRODUCT_TOTAL,
} from '../actions/totals';

const initialState = {
  units: 'lbs',
  nitrogen: '0',
  phosphorous: '0',
  potassium: '0',
  sulfur: '0',
  products: [],
}

export function getTotals(state) {
  return state.totals;
}

export function getProductTotals(state) {
  return state.totals.products;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOTALS:
      return {
        ...state,
        ...action.payload,
      }
    case SET_PRODUCT_TOTAL: {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          action.payload,
          ...state.products.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}
