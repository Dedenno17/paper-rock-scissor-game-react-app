import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { wasChoose: false };

export const chooseSlice = createSlice({
  name: "choose",
  initialState: initialStateValue,
  reducers: {
    toggle: (state) => {
      state.wasChoose = !state.wasChoose;
    },
  },
});

export const chooseActions = chooseSlice.actions;

export default chooseSlice.reducer;
