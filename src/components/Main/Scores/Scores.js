import ComputerScores from "./ComputerScores";
import PlayerScores from "./PlayerScores";

const Scores = (props) => {
  return (
    <div className="w-full flex justify-evenly shadow-lg bg-slate-600 p-3">
      <PlayerScores />
      <ComputerScores />
    </div>
  );
};

export default Scores;
