import { configureStore } from "@reduxjs/toolkit";

// reducer
import showModalNavbarReducer from "../features/showModalNavbar";
import playerChoicesReducer from "../features/playerChoices";
import computerChoicesReducer from "../features/computerChoices";

export const store = configureStore({
  reducer: {
    computerChoices: computerChoicesReducer,
    playerChoices: playerChoicesReducer,
    showModalNavbar: showModalNavbarReducer,
  },
});
