import { useSelector } from "react-redux";
import ModalNavbar from "./Navbar/ModalNavbar";
import Navbar from "./Navbar/Navbar";

const Main = (props) => {
  const isShowModalNavbar = useSelector(
    (state) => state.showModalNavbar.isShow
  );

  return (
    <div className="w-full h-[100vh] lg:bg-gradient-to-b lg:from-primaryPurple lg:to-secondaryPurple">
      <Navbar />
      {isShowModalNavbar && <ModalNavbar />}
    </div>
  );
};

export default Main;
