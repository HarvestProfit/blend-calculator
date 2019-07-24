import {
  SET_PRODUCT_TOTAL,
  REMOVE_PRODUCT_TOTAL,
} from '../actions/product_totals';

const initialState = []

export function getProductTotals(state) {
  return state.product_totals;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_TOTAL: {
      const index = state.findIndex(p => p.id === action.payload.id);
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1),
      ];
    }
    case REMOVE_PRODUCT_TOTAL: {
      const index = state.findIndex(p => p.id === action.payload.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
}
