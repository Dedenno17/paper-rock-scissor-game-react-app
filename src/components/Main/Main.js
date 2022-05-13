import { useSelector } from "react-redux";
import ModalNavbar from "./Navbar/ModalNavbar";
import Navbar from "./Navbar/Navbar";
import Scores from "./Scores/Scores";

const Main = (props) => {
  const isShowModalNavbar = useSelector(
    (state) => state.showModalNavbar.isShow
  );

  return (
    <div className="w-full h-full lg:bg-gradient-to-b lg:from-primaryPurple lg:to-secondaryPurple">
      <Navbar />
      <Scores />
      {isShowModalNavbar && <ModalNavbar />}
    </div>
  );
};

export default Main;
