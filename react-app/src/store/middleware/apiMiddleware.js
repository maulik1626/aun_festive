export default function apiMiddleware() {
  return (next) => (action) => next(action);
}
