import { useCallback, useState } from "react";

export const useApi = (fn) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const exec = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fn?.(...args);
      setData(res ?? null);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fn]);

  return { loading, error, data, exec };
};
