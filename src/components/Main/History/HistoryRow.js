const HistoryRow = (props) => {
  return (
    <tr>
      <td className="text-slate-800 border-slate-700 border-[1px] text-center">
        {props.player}
      </td>
      <td className="text-slate-800 border-slate-700 border-[1px] text-center">
        {props.computer}
      </td>
      <td className="text-slate-800 border-slate-700 border-[1px] text-center">
        {props.result}
      </td>
    </tr>
  );
};

export default HistoryRow;
