import { createSlice } from "@reduxjs/toolkit";

import { getUser } from "../../helpers/getUser";
const { currentPathname } = getUser();
const initialState = {
  currentPathname,
};
const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setCurrentPathname: (state, { payload }) => {
      state.currentPathname = payload;
    },
  },
  // extraReducers: (builder) => {},
});
export const util = utilSlice.reducer;
export const { setCurrentPathname } = utilSlice.actions;
