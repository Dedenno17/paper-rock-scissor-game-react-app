import { useDispatch, useSelector } from "react-redux";

import { compChoicesActions } from "../../../features/computerChoices";
import { playerChoicesActions } from "../../../features/playerChoices";
import { chooseActions } from "../../../features/wasChoose";
import { randomImgTimeActions } from "../../../features/randomImgTime";
import Button from "../../UI/Button";

const choices = ["Paper", "Rock", "Scissor"];

const PlayerChoiceButton = (props) => {
  const dispatch = useDispatch();

  const isRandomImgTime = useSelector(
    (state) => state.randomImgTime.isRandomImgTime
  );

  const chooseHandler = (pChoices) => {
    dispatch(randomImgTimeActions.setRandomImgTime(true));

    const timeout = setTimeout(() => {
      dispatch(chooseActions.toggle());
      dispatch(randomImgTimeActions.setRandomImgTime(false));
      console.log("firsttimeout");
      const secondTimeout = setTimeout(() => {
        dispatch(playerChoicesActions.setPlayerChoices(pChoices.toLowerCase()));
        dispatch(compChoicesActions.setCompChoices());
        console.log("secontimeout");
        clearTimeout(secondTimeout);
      }, 200);
      clearTimeout(timeout);
    }, 1500);
  };

  console.log("randomImgTime is " + isRandomImgTime);

  return (
    <div className="w-full bg-slate-200 flex flex-col items-center pt-2 lg:bg-secondaryPurple lg:py-5">
      <h1 className="text-3xl font-semibold text-slate-800 mb-3 lg:hidden">
        Choose One!
      </h1>
      <div className="w-full flex justify-evenly">
        {choices.map((item) => (
          <Button type="button" key={item} onClick={() => chooseHandler(item)}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PlayerChoiceButton;
