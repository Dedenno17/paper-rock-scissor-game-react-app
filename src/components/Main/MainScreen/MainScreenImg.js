import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resultActions } from "../../../features/result";
import { chooseActions } from "../../../features/wasChoose";

const MainScreenImg = (props) => {
  const playerChoices = useSelector((state) => state.playerChoices.choices);
  const playerChoicesImg = useSelector((state) => state.playerChoices.img);

  const compChoices = useSelector((state) => state.computerChoices.choices);
  const compChoicesImg = useSelector((state) => state.computerChoices.img);

  const wasChoose = useSelector((state) => state.wasChoose.wasChoose);
  const isRandomImgTime = useSelector(
    (state) => state.randomImgTime.isRandomImgTime
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if ((!playerChoices && !compChoices) || !wasChoose) {
      return;
    }

    if (wasChoose) {
      dispatch(
        resultActions.getTheWinner({
          player: playerChoices,
          comp: compChoices,
        })
      );
      dispatch(chooseActions.toggle());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerChoices, compChoices, wasChoose, dispatch]);

  return (
    <div className="flex w-full items-center justify-around h-40 md:h-[200px]">
      <img
        src={playerChoicesImg}
        alt="Player choice"
        className={`w-[35%] md:w-[25%] ${
          isRandomImgTime ? "animate-bounceSide" : ""
        }`}
      />
      <img
        src={compChoicesImg}
        alt="Computer choice"
        className={`w-[35%] md:w-[25%] ${
          isRandomImgTime ? "animate-bounceOppositeSide" : ""
        }`}
      />
    </div>
  );
};

export default MainScreenImg;
