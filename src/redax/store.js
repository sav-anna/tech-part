import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersApi } from "./services/users-api";

const persistConfig = {
  key: "page",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersApi.reducer);

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    usersApi.middleware,
  ],
});

export const persistor = persistStore(store);
