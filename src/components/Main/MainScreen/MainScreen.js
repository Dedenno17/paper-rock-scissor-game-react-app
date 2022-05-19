import { useSelector } from "react-redux";
import MainScreenImg from "./MainScreenImg";

const MainScreen = (props) => {
  const playerChoices = useSelector((state) => state.playerChoices.choices);
  const compChoices = useSelector((state) => state.computerChoices.choices);
  const result = useSelector((state) => state.result.result);

  return (
    <div className="w-full bg-slate-200 py-4 lg:bg-transparent lg:py-0 lg:pt-6 lg:pb-0">
      <div className="flex items-center justify-around">
        <p className="text-sm text-slate-800 lg:text-slate-200 lg:text-2xl">
          You Played {playerChoices}
        </p>
        <p className="text-sm text-slate-800 lg:text-slate-200 lg:text-2xl">
          Computer Played {compChoices}
        </p>
      </div>
      <MainScreenImg />
      <div className="w-full h-7">
        <h2
          className={`text-center text-2xl font-semibold lg:text-slate-200 lg:hidden ${
            result.includes("Player")
              ? "text-green-500"
              : result.includes("Computer")
              ? "text-red-500"
              : "text-orange-400"
          }`}
        >
          {result}
        </h2>
      </div>
    </div>
  );
};

export default MainScreen;
