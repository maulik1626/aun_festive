import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@store/sagas/rootSaga";
import { rootReducer } from "@store/rootReducer";
import logger from "@store/middleware/logger";
import errorHandler from "@store/middleware/errorHandler";
import apiMiddleware from "@store/middleware/apiMiddleware";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => {
    const base = getDefault({ serializableCheck: false }).concat(
      logger,
      errorHandler,
      apiMiddleware
    );
    return base.concat(sagaMiddleware);
  },
  devTools: import.meta.env.MODE !== "production",
});

export const AppDispatch = store.dispatch;

sagaMiddleware.run(rootSaga);
