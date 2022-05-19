import { configureStore } from "@reduxjs/toolkit";

// reducer
import showModalNavbarReducer from "../features/showModalNavbar";
import playerChoicesReducer from "../features/playerChoices";
import computerChoicesReducer from "../features/computerChoices";
import playerScoreReducer from "../features/playerScore";
import computerScoreReducer from "../features/computerScore";
import resultReducer from "../features/result";
import wasChooseReducer from "../features/wasChoose";
import randomImgTimeReducer from "../features/randomImgTime";
import historyReducer from "../features/history";
import showModalHelpReducer from "../features/showModalHelp";

export const store = configureStore({
  reducer: {
    computerChoices: computerChoicesReducer,
    computerScore: computerScoreReducer,
    history: historyReducer,
    playerChoices: playerChoicesReducer,
    playerScore: playerScoreReducer,
    randomImgTime: randomImgTimeReducer,
    result: resultReducer,
    showModalHelp: showModalHelpReducer,
    showModalNavbar: showModalNavbarReducer,
    wasChoose: wasChooseReducer,
  },
});
