import { useDispatch } from "react-redux";

import { showModalNavbarActions } from "../../../features/showModalNavbar";

const NavbarHamburger = (props) => {
  const dispatch = useDispatch();

  const showModalNavbarHandler = () => {
    dispatch(showModalNavbarActions.setIsShowModalNavbar(true));
  };

  return (
    <div
      className="w-10 h-10 flex flex-col justify-around"
      onClick={showModalNavbarHandler}
    >
      <span className="block w-full h-[20%] bg-white"></span>
      <span className="block w-full h-[20%] bg-white"></span>
      <span className="block w-full h-[20%] bg-white"></span>
    </div>
  );
};

export default NavbarHamburger;
