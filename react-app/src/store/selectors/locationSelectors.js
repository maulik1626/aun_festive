import { createSelector } from "reselect";

const selectLocation = (state) => state.location;
export const selectCoords = createSelector([selectLocation], (l) => l.coords);
export const selectPermission = createSelector(
  [selectLocation],
  (l) => l.permission
);
export const selectLocationStatus = createSelector(
  [selectLocation],
  (l) => l.status
);
export const selectLocationSource = createSelector(
  [selectLocation],
  (l) => l.source
);
