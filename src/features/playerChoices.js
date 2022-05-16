import { createSlice } from "@reduxjs/toolkit";

// images
import paper from "../assets/images/player-paper.png";
import rock from "../assets/images/player-rock.png";
import scissor from "../assets/images/player-scissors.png";

const images = { paper: paper, rock: rock, scissor: scissor };

const initialStateValue = { choices: "", img: rock };

export const playerChoicesSlice = createSlice({
  name: "playerChoices",
  initialState: initialStateValue,
  reducers: {
    setPlayerChoices: (state, action) => {
      state.choices = action.payload;
      state.img = images[action.payload];
    },
  },
});

export const playerChoicesActions = playerChoicesSlice.actions;

export default playerChoicesSlice.reducer;
