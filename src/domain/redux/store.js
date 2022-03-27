import { configureStore } from "@reduxjs/toolkit";

import AppSlicer from "./appSlicer";

export const store = configureStore({
  reducer: {
    app: AppSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
