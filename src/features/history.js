import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { history: [] };

export const historySlice = createSlice({
  name: "history",
  initialState: initialStateValue,
  reducers: {
    addHistory: (state, action) => {
      const newHistory = [...state.history];
      const addedHistory = {
        player: action.payload.player,
        computer: action.payload.computer,
        result: action.payload.result,
      };
      newHistory.push(addedHistory);

      state.history = newHistory;
    },
    resetHistory: (state) => {
      state.history = initialStateValue.history;
    },
  },
});

export const historyActions = historySlice.actions;

export default historySlice.reducer;
