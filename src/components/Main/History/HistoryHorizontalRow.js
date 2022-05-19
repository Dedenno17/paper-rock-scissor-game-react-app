import paper from "../../../assets/images/player-paper.png";
import rock from "../../../assets/images/player-rock.png";
import scissor from "../../../assets/images/player-scissors.png";

const HistoryHorizontalRow = (props) => {
  let pImage;
  let cImage;

  if (props.playerChoice === "paper") {
    pImage = paper;
  } else if (props.playerChoice === "rock") {
    pImage = rock;
  } else if (props.playerChoice === "scissor") {
    pImage = scissor;
  }

  if (props.computerChoice === "paper") {
    cImage = paper;
  } else if (props.computerChoice === "rock") {
    cImage = rock;
  } else if (props.computerChoice === "scissor") {
    cImage = scissor;
  }

  return (
    <div className="h-full w-16 flex flex-col justify-between bg-secondaryPurple border-r-[1px] border-r-slate-800">
      <div
        className={`w-full h-[49%] flex ${
          props.result.includes("Player") ? "bg-green-400" : "bg-slate-200"
        }`}
      >
        <img src={pImage} alt={props.playerChoice} className="w-[40%] m-auto" />
      </div>
      <div
        className={`w-full h-[49%] flex ${
          props.result.includes("Computer") ? "bg-green-400" : "bg-slate-200"
        }`}
      >
        <img
          src={cImage}
          alt={props.computerChoice}
          className="w-[40%] m-auto"
        />
      </div>
    </div>
  );
};

export default HistoryHorizontalRow;
