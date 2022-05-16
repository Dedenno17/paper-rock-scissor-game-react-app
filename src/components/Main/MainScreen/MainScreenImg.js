import { useEffect } from "react";
import { useSelector } from "react-redux";

const MainScreenImg = (props) => {
  const playerChoices = useSelector((state) => state.playerChoices.choices);
  const playerChoicesImg = useSelector((state) => state.playerChoices.img);

  const compChoices = useSelector((state) => state.computerChoices.choices);
  const compChoicesImg = useSelector((state) => state.computerChoices.img);

  useEffect(() => {
    if (!playerChoices && !compChoices) {
      return;
    }
    console.log(playerChoices);
    console.log(compChoices);
  }, [playerChoices, compChoices]);

  return (
    <div className="flex w-full items-center justify-around">
      <img
        src={playerChoicesImg}
        alt="Player choice"
        className="w-[35%] md:w-[25%]"
      />
      <img
        src={compChoicesImg}
        alt="Computer choice"
        className="w-[35%] md:w-[25%]"
      />
    </div>
  );
};

export default MainScreenImg;
