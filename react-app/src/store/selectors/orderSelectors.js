import { createSelector } from "reselect";

const selectOrders = (state) => state.orders;
export const selectOrdersList = createSelector([selectOrders], (o) => o.list);
export const selectOrdersStatus = createSelector([selectOrders], (o) => o.status);
