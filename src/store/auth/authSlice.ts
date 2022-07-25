import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear();
      return initialState;
    },
  },
  // extraReducers: (builder) => {},
});
export const auth = authSlice.reducer;
export const { logout } = authSlice.actions;
