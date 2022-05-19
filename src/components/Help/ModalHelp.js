import { useDispatch } from "react-redux";
import { showModalHelpActions } from "../../features/showModalHelp";
import Button from "../UI/Button";
import ModalCard from "../UI/ModalCard";

const ModalHelp = (props) => {
  const dispatch = useDispatch();

  const hideModalHelpHandler = () => {
    dispatch(showModalHelpActions.setIsShowModalHelp(false));
  };

  return (
    <ModalCard className="p-3 w-full">
      <h1 className="text-2xl font-bold text-primaryPurple text-center">
        Rule of the Game
      </h1>
      <div className="w-full p-5 mt-2 border-t-2 border-t-secondaryPurple flex flex-col justify-evenly items-center">
        <p className="text-lg text-slate-700 mb-5 text-center">
          You will choose between 3 options.{" "}
          <span className="text-xl text-primaryPurple font-semibold">
            Paper
          </span>
          ,{" "}
          <span className="text-xl text-primaryPurple font-semibold">Rock</span>{" "}
          and{" "}
          <span className="text-xl text-primaryPurple font-semibold">
            Scissors
          </span>
          . And the computer will choose randomly. let's see if you can beat the
          computer?!
        </p>
        <Button onClick={hideModalHelpHandler}>OK</Button>
      </div>
    </ModalCard>
  );
};

export default ModalHelp;
