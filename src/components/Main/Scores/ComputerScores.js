import { useSelector } from "react-redux";
import MediaCard from "../../UI/MediaCard";

const ComputerScores = (props) => {
  const computerScore = useSelector((state) => state.computerScore.score);

  return (
    <MediaCard className="flex flex-row justify-between items-center py-2 px-7 bg-primaryPurple text-center border-2 border-[#363cff] sm:flex-col sm:px-10 lg:bg-slate-700">
      <h2 className="text-lg text-slate-200 font-semibold">Computer</h2>
      <p className="text-3xl text-slate-200 font-bold">{computerScore}</p>
    </MediaCard>
  );
};

export default ComputerScores;
