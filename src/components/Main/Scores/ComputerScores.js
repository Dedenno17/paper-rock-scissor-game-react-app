import MediaCard from "../../UI/MediaCard";

const ComputerScores = (props) => {
  return (
    <MediaCard className="p-3 bg-primaryPurple text-center border-2 border-[#363cff]">
      <h2 className="text-sm text-slate-200 font-semibold">Computer</h2>
      <p className="text-3xl text-slate-200 font-bold">20</p>
    </MediaCard>
  );
};

export default ComputerScores;
