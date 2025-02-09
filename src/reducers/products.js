import _ from 'lodash';
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/products';

const initialState = [
  { id: 'default_1', name: 'Urea', nitrogen: '46', phosphorous: '0', potassium: '0', sulfur: '0' },
  { id: 'default_2', name: 'Map', nitrogen: '11', phosphorous: '52', potassium: '0', sulfur: '0' },
  { id: 'default_3', name: 'POTASH', nitrogen: '0', phosphorous: '0', potassium: '60', sulfur: '0' },
  { id: 'default_4', name: 'AMS', nitrogen: '21', phosphorous: '0', potassium: '0', sulfur: '24' },
];

export function getProducts(state) {
  return state.products;
}

export function productNumber(product) {
  return {
    ...product,
    nitrogen: _.toNumber(product.nitrogen),
    phosphorous: _.toNumber(product.phosphorous),
    potassium: _.toNumber(product.potassium),
    sulfur: _.toNumber(product.sulfur),
  }
}

export function getNitrogenProduct(state) {
  const product = getProducts(state).find(p => _.toNumber(p.nitrogen) > 0 && _.toNumber(p.phosphorous) === 0 && _.toNumber(p.potassium) === 0 && _.toNumber(p.sulfur) === 0);
  if (product) {
    return productNumber(product);
  }
  return null;
}

export function getPhosphorousProduct(state) {
  const product = getProducts(state).find(p => _.toNumber(p.phosphorous) > 0 && _.toNumber(p.potassium) === 0 && _.toNumber(p.sulfur) === 0);
  if (product) {
    return productNumber(product);
  }
  return null;
}

export function getPotassiumProduct(state) {
  const product = getProducts(state).find(p => _.toNumber(p.potassium) > 0 && _.toNumber(p.sulfur) === 0);
  if (product) {
    return productNumber(product);
  }
  return null;
}

export function getSulfurProduct(state) {
  const product = getProducts(state).find(p => _.toNumber(p.sulfur) > 0);
  if (product) {
    return productNumber(product);
  }
  return null;
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
