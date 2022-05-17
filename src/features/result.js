import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { result: "", resultId: 0 };

export const resultSlice = createSlice({
  name: "result",
  initialState: initialStateValue,
  reducers: {
    getTheWinner: (state, action) => {
      if (action.payload.player === action.payload.comp) {
        state.result = "I'ts Draw!";
        state.resultId += 1;
      } else {
        if (action.payload.player === "paper") {
          if (action.payload.comp === "rock") {
            state.result = "Player Win!";
            state.resultId += 1;
          } else if (action.payload.comp === "scissor") {
            state.result = "Computer Win!";
            state.resultId += 1;
          }
        } else if (action.payload.player === "rock") {
          if (action.payload.comp === "scissor") {
            state.result = "Player Win!";
            state.resultId += 1;
          } else if (action.payload.comp === "paper") {
            state.result = "Computer Win!";
            state.resultId += 1;
          }
        } else if (action.payload.player === "scissor") {
          if (action.payload.comp === "paper") {
            state.result = "Player Win!";
            state.resultId += 1;
          } else if (action.payload.comp === "rock") {
            state.result = "Computer Win!";
            state.resultId += 1;
          }
        }
      }
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice.reducer;
