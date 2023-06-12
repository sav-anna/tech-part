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
// import { followSlice } from "./followSlice";

const persistConfig = {
  key: "users",
  storage,
  // whitelist: ["follows"],
};

const persistedReducer = persistReducer(persistConfig, usersApi.reducer);

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: persistedReducer,
    // follows: persistedReducer,
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
