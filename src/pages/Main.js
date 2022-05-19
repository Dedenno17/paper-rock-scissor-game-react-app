import { useSelector } from "react-redux";
import MainScreen from "../components/Main/MainScreen/MainScreen";
import ModalNavbar from "../components/Main/Navbar/ModalNavbar";
import Navbar from "../components/Main/Navbar/Navbar";
import PlayerChoiceButton from "../components/Main/PlayerChoiceButton/PlayerChoiceButton";
import Scores from "../components/Main/Scores/Scores";
import History from "../components/Main/History/History";
import HistoryHorizontal from "../components/Main/History/HistoryHorizontal";

const Main = (props) => {
  const isShowModalNavbar = useSelector(
    (state) => state.showModalNavbar.isShow
  );

  return (
    <div className="w-full bg-primaryPurple lg:pb-5 lg:bg-gradient-to-b lg:from-primaryPurple lg:to-secondaryPurple">
      <Navbar />
      <Scores />
      <main className="flex flex-col lg:flex-col-reverse">
        <PlayerChoiceButton />
        <MainScreen />
      </main>
      <History />
      <HistoryHorizontal />
      {isShowModalNavbar && <ModalNavbar />}
    </div>
  );
};

export default Main;
