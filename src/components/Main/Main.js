import { useSelector } from "react-redux";
import ModalNavbar from "./Navbar/ModalNavbar";
import Navbar from "./Navbar/Navbar";

const Main = (props) => {
  const isShowModalNavbar = useSelector(
    (state) => state.showModalNavbar.isShow
  );

  return (
    <div>
      <Navbar />
      {isShowModalNavbar && <ModalNavbar />}
    </div>
  );
};

export default Main;
