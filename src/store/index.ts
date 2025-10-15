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
import favReducer from "./reducers/favorites";

// Config do persist
const persistConfig = {
  key: "root",
  storage,
};

// Persistir apenas o reducer de favoritos
const persistedReducer = persistReducer(persistConfig, favReducer);

const store = configureStore({
  reducer: {
    fav: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
