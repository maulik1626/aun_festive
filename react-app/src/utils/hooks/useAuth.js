import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "@store/selectors/authSelectors";

export const useAuth = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  return useMemo(() => ({ isAuthenticated, user }), [isAuthenticated, user]);
};
