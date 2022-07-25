import { createSlice } from "@reduxjs/toolkit";

import { getProfilePhotos } from "./profileRequests";

interface IInitState {
  data: any[];
  status: boolean;
  groupOne: boolean;
  groupTwo: boolean;
}

const initialState: IInitState = {
  data: [],
  status: false,
  groupOne: true,
  groupTwo: true,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setOneGroup: (state) => {
      state.groupOne = !state.groupOne;
    },
    setTwoGroup: (state) => {
      state.groupTwo = !state.groupTwo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfilePhotos.fulfilled, (state, { payload }) => {
      state.status = false;
      state.data = payload.data.map((item: any, index: number) => ({
        elem: index,
        group: index % 2 === 0 ? 2 : 1,
      }));
    });
  },
});
export const profile = profileSlice.reducer;
export const { setOneGroup, setTwoGroup } = profileSlice.actions;
