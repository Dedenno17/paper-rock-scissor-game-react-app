import { configureStore } from "@reduxjs/toolkit";

// reducer
import showModalNavbarReducer from "../features/showModalNavbar";
import playerChoicesReducer from "../features/playerChoices";
import computerChoicesReducer from "../features/computerChoices";
import playerScoreReducer from "../features/playerScore";
import computerScoreReducer from "../features/computerScore";

export const store = configureStore({
  reducer: {
    computerChoices: computerChoicesReducer,
    computerScore: computerScoreReducer,
    playerChoices: playerChoicesReducer,
    playerScore: playerScoreReducer,
    showModalNavbar: showModalNavbarReducer,
  },
});
