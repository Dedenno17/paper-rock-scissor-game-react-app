import HistoryRow from "./HistoryRow";

const History = (props) => {
  return (
    <div className="w-full bg-slate-200 py-3 px-4">
      <table className="m-auto w-full text-sm">
        <tr>
          <th className="bg-primaryPurple text-slate-200 border-slate-700 border-[1px] p-1">
            Your Chioce
          </th>
          <th className="bg-primaryPurple text-slate-200 border-slate-700 border-[1px] p-1">
            Computer's Choice
          </th>
          <th className="bg-primaryPurple text-slate-200 border-slate-700 border-[1px] p-1">
            Win
          </th>
        </tr>
        <HistoryRow />
      </table>
    </div>
  );
};

export default History;