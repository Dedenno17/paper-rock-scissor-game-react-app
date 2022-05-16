import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { choices: "" };

export const playerChoicesSlice = createSlice({
  name: "playerChoices",
  initialState: initialStateValue,
  reducers: {
    setPlayerChoices: (state, action) => {
      state.choices = action.payload;
    },
  },
});

export const playerChoicesActions = playerChoicesSlice.actions;

export default playerChoicesSlice.reducer;
