import { useSelector } from "react-redux";
import ModalNavbar from "../components/Main/Navbar/ModalNavbar";
import Navbar from "../components/Main/Navbar/Navbar";
import PlayerChoiceButton from "../components/Main/PlayerChoiceButton/PlayerChoiceButton";
import Scores from "../components/Main/Scores/Scores";

const Main = (props) => {
  const isShowModalNavbar = useSelector(
    (state) => state.showModalNavbar.isShow
  );

  return (
    <div className="w-full h-full lg:bg-gradient-to-b lg:from-primaryPurple lg:to-secondaryPurple">
      <Navbar />
      <Scores />
      <PlayerChoiceButton />
      {isShowModalNavbar && <ModalNavbar />}
    </div>
  );
};

export default Main;
