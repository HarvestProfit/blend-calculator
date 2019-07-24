export const SET_TOTALS = 'SET_TOTALS';
export const SET_PRODUCT_TOTAL = 'SET_PRODUCT_TOTAL';

export function setTotals(totals ) {
  return { type: SET_TOTALS, payload: totals };
}
