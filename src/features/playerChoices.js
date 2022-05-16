import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { choices: "", hasClick: false };

export const playerChoicesSlice = createSlice({
  name: "playerChoices",
  initialState: initialStateValue,
  reducers: {
    setPlayerChoices: (state, action) => {
      state.choices = action.payload;
      state.hasClick = true;
    },
  },
});

export const playerChoicesActions = playerChoicesSlice.actions;

export default playerChoicesSlice.reducer;
