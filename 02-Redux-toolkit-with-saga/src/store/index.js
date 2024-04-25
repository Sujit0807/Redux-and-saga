import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./slices";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const getMiddlewares = (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: false,
    thunk: false,
  }).concat(sagaMiddleware);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getMiddlewares(getDefaultMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
