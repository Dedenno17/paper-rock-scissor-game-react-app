import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerScoreActions } from "../../../features/playerScore";
import { computerScoreActions } from "../../../features/computerScore";
import ComputerScores from "./ComputerScores";
import PlayerScores from "./PlayerScores";

const Scores = (props) => {
  const result = useSelector((state) => state.result.result);
  const wasChoose = useSelector((state) => state.wasChoose.wasChoose);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wasChoose) {
      return;
    }

    if (result.includes("Player")) {
      dispatch(playerScoreActions.increaseScore());
    } else if (result.includes("Computer")) {
      dispatch(computerScoreActions.increaseScore());
    }
  }, [result, wasChoose, dispatch]);

  return (
    <div className="w-full flex flex-col justify-evenly shadow-lg bg-slate-600 py-2 sm:flex-row lg:bg-transparent lg:shadow-none pt-[52px]">
      <PlayerScores />
      <ComputerScores />
    </div>
  );
};

export default Scores;
