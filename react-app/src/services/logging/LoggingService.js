export const LoggingService = {
  info(msg, meta) {
    if (import.meta.env.DEV) console.info(msg, meta);
  },
  warn(msg, meta) {
    console.warn(msg, meta);
  },
  error(err, meta) {
    console.error(err, meta);
  },
};
