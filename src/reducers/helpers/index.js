export function removeSingleItemByIndex(array, index) {
  if (index < 0 || index >= array.length) return array;
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
}

export function removeSingleItemById(array, item) {
  const index = array.findIndex(i => i.id === item.id);
  return removeSingleItemByIndex(array, index);
}

export function removeAllItemsByKey(array, item, key) {
  const index = array.findIndex(i => i[key] === item[key]);

  if (index >= 0) {
    return removeAllItemsByKey(removeSingleItemByIndex(array, index), item, key);
  }

  return array;
}

export function removeSingleItemByKey(array, item, key) {
  const index = array.findIndex(i => i[key] === item[key]);
  return removeSingleItemByIndex(array, index);
}

export function removeSingleItemByValue(array, item) {
  const index = array.findIndex(i => i === item);
  return removeSingleItemByIndex(array, index);
}

export function updateSingleItemByIndex(array, index, item) {
  if (index < 0 || index >= array.length) return array;

  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
}

export function updateSingleItemById(array, item) {
  const index = array.findIndex(i => i.id === item.id);
  return updateSingleItemByIndex(array, index, item);
}

export function updateSingleItemByKey(array, item, key) {
  const index = array.findIndex(i => i[key] === item[key]);
  return updateSingleItemByIndex(array, index, item);
}

/**
 * Updates a single item in an array, or adds it. Does not mutate the
 * original array.
 * @param {Object[]} array An array of items.
 * @param {Object} item The item that should be updated.
 * @param {string} key The key that should be used.
 * @return {Array} The new array.
 */
export function updateOrAddSingleItemByKey(array, item, key) {
  const index = array.findIndex(i => i[key] === item[key]);
  if (index !== -1) {
    return updateSingleItemByIndex(array, index, item);
  }
  return [
    ...array,
    item,
  ];
}

/**
 * Updates a single item in an array, or adds it. Does not mutate the
 * original array.
 * @param {{ id: number }[]} array An array of items.
 * @param {{ id: number }} item The item that should be updated.
 * @return {Array} The new array.
 */
export function updateOrAddSingleItemById(array, item) {
  return updateOrAddSingleItemByKey(array, item, 'id');
}
