import { createSlice } from "@reduxjs/toolkit";

//images
import paper from "../assets/images/comp-paper.png";
import rock from "../assets/images/comp-rock.png";
import scissor from "../assets/images/comp-scissors.png";

const images = { paper: paper, rock: rock, scissor: scissor };

const initialStateValue = { choices: "", img: rock };

export const computerChoicesSlice = createSlice({
  name: "computerChoices",
  initialState: initialStateValue,
  reducers: {
    setCompChoices: (state) => {
      const random = Math.round(Math.random() * (6 - 1));
      if (random >= 1 && random < 3) {
        state.choices = "paper";
        state.img = images[state.choices];
      }

      if (random >= 3 && random < 5) {
        state.choices = "rock";
        state.img = images[state.choices];
      }

      if (random >= 5 && random < 7) {
        state.choices = "scissor";
        state.img = images[state.choices];
      }
    },
  },
});

export const compChoicesActions = computerChoicesSlice.actions;

export default computerChoicesSlice.reducer;
