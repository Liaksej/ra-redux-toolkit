import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "@/redux/app/slices";
import { omdbApi } from "@/redux/service/omdbApi";
import { posterApi } from "@/redux/service/posterApi";

export const store = configureStore({
  reducer: {
    [omdbApi.reducerPath]: omdbApi.reducer,
    [posterApi.reducerPath]: posterApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([omdbApi.middleware, posterApi.middleware]),
});
