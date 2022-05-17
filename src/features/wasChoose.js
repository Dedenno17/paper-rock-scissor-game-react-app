import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { wasChoose: 0 };

export const chooseSlice = createSlice({
  name: "choose",
  initialState: initialStateValue,
  reducers: {
    increase: (state) => {
      state.wasChoose += 1;
    },
  },
});

export const chooseActions = chooseSlice.actions;

export default chooseSlice.reducer;
