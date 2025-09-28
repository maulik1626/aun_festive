import { createSelector } from "reselect";

const selectLocation = (state) => state.location;
export const selectCoords = createSelector([selectLocation], (l) => l.coords);
export const selectPermission = createSelector(
  [selectLocation],
  (l) => l.permission
);
