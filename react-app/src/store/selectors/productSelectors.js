import { createSelector } from "reselect";

const selectProducts = (state) => state.products;
export const selectProductList = createSelector(
  [selectProducts],
  (p) => p.list
);
export const selectProductsStatus = createSelector(
  [selectProducts],
  (p) => p.status
);
