import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { auth } from "./auth/authSlice";
import { modals } from "./modals/modalsSlice";
import { profile } from "./profile/profileSlice";
import { util } from "./util/utilSlice";

export const rootReducer = combineReducers({ util, auth, modals, profile });

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware1) =>
    getDefaultMiddleware1({
      serializableCheck: false,
    }),
});
export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootStore.dispatch;
