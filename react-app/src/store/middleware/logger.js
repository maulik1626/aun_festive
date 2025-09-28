export default function logger(storeAPI){
  return (next) => (action) => {
    return next(action);
  };
}
