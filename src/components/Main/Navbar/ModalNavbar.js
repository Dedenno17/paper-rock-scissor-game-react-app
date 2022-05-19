import { useDispatch } from "react-redux";
import { compChoicesActions } from "../../../features/computerChoices";
import { computerScoreActions } from "../../../features/computerScore";
import { historyActions } from "../../../features/history";
import { playerChoicesActions } from "../../../features/playerChoices";
import { playerScoreActions } from "../../../features/playerScore";
import { resultActions } from "../../../features/result";
import { showModalHelpActions } from "../../../features/showModalHelp";
import { showModalNavbarActions } from "../../../features/showModalNavbar";
import ModalCard from "../../UI/ModalCard";

const ModalNavbar = (props) => {
  const dispatch = useDispatch();

  const hideModalNavbarHandler = () => {
    dispatch(showModalNavbarActions.setIsShowModalNavbar(false));
  };

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
  };

  return (
    <ModalCard className="p-4 w-3/4">
      <span
        className="flex justify-center items-center absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-500 text-white font-semibold cursor-pointer"
        onClick={hideModalNavbarHandler}
      >
        X
      </span>
      <button
        className="w-full border-b-[1px] border-b-secondaryPurple py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer"
        onClick={showModalHelpHandler}
      >
        Help
      </button>
      <button
        className="w-full border-b-[1px] border-b-secondaryPurple py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer"
        onClick={resetHandler}
      >
        Reset
      </button>
      <button
        className="w-full py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer"
        onClick={quitHandler}
      >
        Quit
      </button>
    </ModalCard>
  );
};

export default ModalNavbar;
