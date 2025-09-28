import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;
export const selectUser = createSelector([selectAuth], (auth) => auth.user);
export const selectIsAuthenticated = createSelector(
  [selectAuth],
  (auth) => Boolean(auth.token)
);
