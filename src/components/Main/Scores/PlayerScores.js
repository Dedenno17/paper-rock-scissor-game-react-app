import MediaCard from "../../UI/MediaCard";

const PlayerScores = (props) => {
  return (
    <MediaCard className="flex flex-row justify-between items-center py-2 px-7 bg-primaryPurple text-center border-2 border-[#363cff] sm:flex-col sm:px-16 lg:bg-slate-700">
      <h2 className="text-lg text-slate-200 font-semibold">You</h2>
      <p className="text-3xl text-slate-200 font-bold">20</p>
    </MediaCard>
  );
};

export default PlayerScores;
