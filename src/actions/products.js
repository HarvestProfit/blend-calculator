import _ from 'lodash';

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function createProduct() {
  return {
    type: CREATE_PRODUCT,
    payload: {
      id: _.uniqueId(),
      name: '',
      nitrogen: '0',
      phosphorous: '0',
      potassium: '0',
      sulfur: '0',
    }
  };
}

export function deleteProduct(product) {
  return { type: DELETE_PRODUCT, payload: product };
}

export function updateProduct(product) {
  return { type: UPDATE_PRODUCT, payload: product };
}
