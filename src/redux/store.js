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
import { tweetsApi } from "./services/users-api";

const persistConfig = {
  key: "users",
  storage,
};

const persistedReducer = persistReducer(persistConfig, tweetsApi.reducer);

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    tweetsApi.middleware,
  ],
});

export const persistor = persistStore(store);
