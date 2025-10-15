import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./reducers/favorites";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState") as string)
  : {};

const store = configureStore({
  reducer: {
    fav: favReducer,
  },
  preloadedState: {
    fav: persistedState.fav,
  },
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
