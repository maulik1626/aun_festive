import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartItems = createSelector([selectCart], (c) => c.items);
export const selectCartCount = createSelector(
  [selectCartItems],
  (items) => items.length
);
