import { useSelector } from "react-redux";
import MainScreenImg from "./MainScreenImg";

const MainScreen = (props) => {
  const playerChoices = useSelector((state) => state.playerChoices.choices);
  const compChoices = useSelector((state) => state.computerChoices.choices);

  return (
    <div className="w-full bg-slate-200 py-4 lg:bg-transparent">
      <div className="flex items-center justify-around">
        <p className="text-sm text-slate-800 lg:text-slate-200 lg:text-2xl">
          You Played {playerChoices}
        </p>
        <p className="text-sm text-slate-800 lg:text-slate-200 lg:text-2xl">
          Computer Played {compChoices}
        </p>
      </div>
      <MainScreenImg />
      <h2 className="text-center text-2xl font-semibold lg:text-slate-200 lg:hidden">
        You Win!
      </h2>
    </div>
  );
};

export default MainScreen;
