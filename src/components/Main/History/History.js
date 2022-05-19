import { useSelector } from "react-redux";
import HistoryRow from "./HistoryRow";

const History = (props) => {
  const history = useSelector((state) => state.history.history);

  return (
    <div className="w-full bg-slate-200 px-4">
      <table className="m-auto w-full text-sm">
        <thead>
          <tr>
            <th className="w-[30%] bg-primaryPurple text-slate-200 border-slate-700 border-[1px] p-1">
              Your Chioce
            </th>
            <th className="w-[30%] bg-primaryPurple text-slate-200 border-slate-700 border-[1px] p-1">
              Computer's Choice
            </th>
            <th className="w-[40%] bg-primaryPurple text-slate-200 border-slate-700 border-[1px] p-1">
              Win
            </th>
          </tr>
        </thead>
        {history && (
          <tbody>
            {history.map((item, i) => (
              <HistoryRow
                key={i}
                player={item.player}
                computer={item.computer}
                result={item.result}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default History;
