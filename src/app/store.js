import { configureStore } from "@reduxjs/toolkit";

// reducer
import showModalNavbarReducer from "../features/showModalNavbar";

export const store = configureStore({
  reducer: {
    showModalNavbar: showModalNavbarReducer,
  },
});
