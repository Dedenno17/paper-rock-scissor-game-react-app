import { useEffect } from "react";
import { useSelector } from "react-redux";

import playerChoiceImg from "../../../assets/images/player-rock.png";
import computerChoice from "../../../assets/images/comp-rock.png";

const MainScreenImg = (props) => {
  const playerChoices = useSelector((state) => state.playerChoices.choices);
  const hasClick = useSelector((state) => state.playerChoices.hasClick);

  useEffect(() => {
    if (!hasClick) {
      return;
    }
    console.log(playerChoices);
  }, [playerChoices, hasClick]);

  return (
    <div className="flex w-full items-center justify-around">
      <img
        src={playerChoiceImg}
        alt="Player choice"
        className="w-[35%] md:w-[25%]"
      />
      <img
        src={computerChoice}
        alt="Computer choice"
        className="w-[35%] md:w-[25%]"
      />
    </div>
  );
};

export default MainScreenImg;
