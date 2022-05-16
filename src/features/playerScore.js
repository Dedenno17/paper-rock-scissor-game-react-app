import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { score: 0 };

export const playerScoreSlice = createSlice({
  name: "playerScore",
  initialState: initialStateValue,
  reducers: {
    increaseScore: (state) => {
      state.score += 1;
    },
  },
});

export const playerScoreActions = playerScoreSlice.actions;

export default playerScoreSlice.reducer;
