export default function errorHandler(){
  return (next) => (action) => {
    try {
      return next(action);
    } catch (err) {
      // no-op placeholder
      throw err;
    }
  };
}
