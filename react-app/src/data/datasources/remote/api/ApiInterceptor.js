export function setupInterceptors(
  instance,
  { getAuthToken, maxRetries = 0, retryDelayMs = 0 }
) {
  instance.interceptors.request.use((config) => {
    const token = getAuthToken?.();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config, response } = error || {};
      if (!config) throw error;

      // Retry on 500s with simple linear backoff
      const status = response?.status;
      config.__retryCount = config.__retryCount || 0;
      if (status >= 500 && config.__retryCount < maxRetries) {
        config.__retryCount += 1;
        await new Promise((r) => setTimeout(r, retryDelayMs));
        return instance(config);
      }
      throw error;
    }
  );
}
