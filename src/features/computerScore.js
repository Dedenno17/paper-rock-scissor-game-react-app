import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { score: 0 };

export const computerScoreSlice = createSlice({
  name: "computerScore",
  initialState: initialStateValue,
  reducers: {
    increaseScore: (state) => {
      state.score += 1;
    },
  },
});

export const computerScoreActions = computerScoreSlice.actions;

export default computerScoreSlice.reducer;
