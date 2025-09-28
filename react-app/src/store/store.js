import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@store/rootReducer";
import logger from "@store/middleware/logger";
import errorHandler from "@store/middleware/errorHandler";
import apiMiddleware from "@store/middleware/apiMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault({ serializableCheck: false }).concat(
      logger,
      errorHandler,
      apiMiddleware
    ),
  devTools: import.meta.env.MODE !== "production",
});

export const AppDispatch = store.dispatch;
