import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainScreen from "../components/Main/MainScreen/MainScreen";
import ModalNavbar from "../components/Main/Navbar/ModalNavbar";
import Navbar from "../components/Main/Navbar/Navbar";
import PlayerChoiceButton from "../components/Main/PlayerChoiceButton/PlayerChoiceButton";
import Scores from "../components/Main/Scores/Scores";
import History from "../components/Main/History/History";
import HistoryHorizontal from "../components/Main/History/HistoryHorizontal";
import ModalHelp from "../components/Help/ModalHelp";
import { compChoicesActions } from "../features/computerChoices";
import { computerScoreActions } from "../features/computerScore";
import { historyActions } from "../features/history";
import { playerChoicesActions } from "../features/playerChoices";
import { playerScoreActions } from "../features/playerScore";
import { resultActions } from "../features/result";
import { showModalHelpActions } from "../features/showModalHelp";
import { showModalNavbarActions } from "../features/showModalNavbar";

const Main = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isShowModalNavbar = useSelector(
    (state) => state.showModalNavbar.isShow
  );

  const isShowModalHelp = useSelector((state) => state.showModalHelp.isShow);

  const resetHandler = () => {
    dispatch(playerChoicesActions.resetChoice());
    dispatch(compChoicesActions.resetChoice());
    dispatch(resultActions.resetResult());
    dispatch(playerScoreActions.resetScore());
    dispatch(computerScoreActions.resetScore());
    dispatch(historyActions.resetHistory());
    dispatch(showModalNavbarActions.setIsShowModalNavbar(false));
  };

  const showModalHelpHandler = () => {
    dispatch(showModalHelpActions.setIsShowModalHelp(true));
    dispatch(showModalNavbarActions.setIsShowModalNavbar(false));
  };

  const quitHandler = () => {
    resetHandler();
    navigate("/opening");
  };

  return (
    <div className="w-full bg-primaryPurple lg:pb-5 lg:bg-gradient-to-b lg:from-primaryPurple lg:to-secondaryPurple">
      <Navbar
        onReset={resetHandler}
        onShowModalHelp={showModalHelpHandler}
        onQuit={quitHandler}
      />
      <Scores />
      <main className="flex flex-col lg:flex-col-reverse">
        <PlayerChoiceButton />
        <MainScreen />
      </main>
      <History />
      <HistoryHorizontal />
      {isShowModalNavbar && (
        <ModalNavbar
          onReset={resetHandler}
          onShowModalHelp={showModalHelpHandler}
          onQuit={quitHandler}
        />
      )}
      {isShowModalHelp && <ModalHelp />}
    </div>
  );
};

export default Main;
