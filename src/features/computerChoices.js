import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { choices: "" };

export const computerChoicesSlice = createSlice({
  name: "computerChoices",
  initialState: initialStateValue,
  reducers: {
    setCompChoices: (state) => {
      const random = Math.round(Math.random() * (6 - 1));
      if (random >= 1 && random < 3) {
        state.choices = "paper";
      }

      if (random >= 3 && random < 5) {
        state.choices = "rock";
      }

      if (random >= 5 && random < 7) {
        state.choices = "scissor";
      }
    },
  },
});

export const compChoicesActions = computerChoicesSlice.actions;

export default computerChoicesSlice.reducer;
