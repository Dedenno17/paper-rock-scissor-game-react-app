import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isRandomImgTime: false };

export const randomImgTimeSlice = createSlice({
  name: "randomImgTime",
  initialState: initialStateValue,
  reducers: {
    setRandomImgTime: (state, action) => {
      state.isRandomImgTime = action.payload;
    },
  },
});

export const randomImgTimeActions = randomImgTimeSlice.actions;

export default randomImgTimeSlice.reducer;
