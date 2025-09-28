import { useCallback } from "react";

export const useErrorHandler = (onError) => {
  return useCallback(
    (err) => {
      if (typeof onError === "function") onError(err);
      // TODO: integrate with LoggingService / Sentry in Step 11/17
      console.error(err);
    },
    [onError]
  );
};
