import { createSlice } from "@reduxjs/toolkit";
interface IInitState {
  modal?: ModalsEnum;
  text?: string;
}
const initialState: IInitState = {};
const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (_, { payload }) => payload,
    closeModal: () => initialState,
  },
  // extraReducers: (builder) => {},
});
export const modals = modalsSlice.reducer;
export const { openModal, closeModal } = modalsSlice.actions;

export enum ModalsEnum {
  WRONG_DATA = "WRONG_DATA",
}
