import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/products';

const initialState = [];

export function getProducts(state) {
  return state.products;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_PRODUCT: {
      const index = state.findIndex(p => p.id === action.payload.id);
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1),
      ];
    }
    case DELETE_PRODUCT: {
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
