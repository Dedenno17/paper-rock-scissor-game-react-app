import { useSelector } from "react-redux";
import HistoryHorizontalRow from "./HistoryHorizontalRow";

const HistoryHorizontal = (props) => {
  const history = useSelector((state) => state.history.history);

  return (
    <div className="hidden lg:flex m-auto w-[80%] rounded-xl shadow-xl h-24 my-5 border-4 border-ternaryPurple overflow-hidden">
      <div className="w-[20%] flex flex-col items-center justify-between bg-secondaryPurple">
        <p className="text-xl font-semibold text-secondaryPurple flex bg-slate-200 w-full h-[49%] justify-center items-center">
          You
        </p>
        <p className="text-xl font-semibold text-red-500 flex bg-slate-200 w-full h-[49%] justify-center items-center">
          Computer
        </p>
      </div>
      <div className="w-[80%] border-l-2 bg-slate-200 border-l-slate-800 space-nowrap overflow-x-auto">
        {history.map((item, i) => (
          <HistoryHorizontalRow
            key={i}
            playerChoice={item.player}
            computerChoice={item.computer}
            result={item.result}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryHorizontal;
