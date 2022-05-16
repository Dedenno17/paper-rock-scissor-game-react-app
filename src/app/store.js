import { configureStore } from "@reduxjs/toolkit";

// reducer
import showModalNavbarReducer from "../features/showModalNavbar";
import playerChoicesReducer from "../features/playerChoices";

export const store = configureStore({
  reducer: {
    playerChoices: playerChoicesReducer,
    showModalNavbar: showModalNavbarReducer,
  },
});
