import ComputerScores from "./ComputerScores";
import PlayerScores from "./PlayerScores";

const Scores = (props) => {
  return (
    <div className="w-full flex flex-col justify-evenly shadow-lg bg-slate-600 py-2 sm:flex-row md:bg-transparent">
      <PlayerScores />
      <ComputerScores />
    </div>
  );
};

export default Scores;
