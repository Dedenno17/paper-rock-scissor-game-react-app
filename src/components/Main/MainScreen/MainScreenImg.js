import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resultActions } from "../../../features/result";

const MainScreenImg = (props) => {
  const playerChoices = useSelector((state) => state.playerChoices.choices);
  const playerChoicesImg = useSelector((state) => state.playerChoices.img);

  const compChoices = useSelector((state) => state.computerChoices.choices);
  const compChoicesImg = useSelector((state) => state.computerChoices.img);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!playerChoices && !compChoices) {
      return;
    }

    const timeout = setTimeout(() => {
      dispatch(
        resultActions.getTheWinner({
          player: playerChoices,
          comp: compChoices,
        })
      );
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [playerChoices, compChoices, dispatch]);

  return (
    <div className="flex w-full items-center justify-around h-40">
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
