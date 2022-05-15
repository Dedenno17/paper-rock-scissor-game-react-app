import { useDispatch } from "react-redux";

import { showModalNavbarActions } from "../../../features/showModalNavbar";

const NavbarHamburger = (props) => {
  const dispatch = useDispatch();

  const showModalNavbarHandler = () => {
    dispatch(showModalNavbarActions.setIsShowModalNavbar(true));
  };

  return (
    <div
      className="w-10 h-10 flex flex-col justify-around cursor-pointer lg:hidden"
      onClick={showModalNavbarHandler}
    >
      <span className="block rounded-md w-full h-[10%] bg-white"></span>
      <span className="block rounded-md w-full h-[10%] bg-white"></span>
      <span className="block rounded-md w-full h-[10%] bg-white"></span>
    </div>
  );
};

export default NavbarHamburger;
