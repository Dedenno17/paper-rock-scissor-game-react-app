import { useDispatch } from "react-redux";
import { showModalNavbarActions } from "../../../features/showModalNavbar";
import ModalCard from "../../UI/ModalCard";

const ModalNavbar = (props) => {
  const dispatch = useDispatch();

  const hideModalNavbarHandler = () => {
    dispatch(showModalNavbarActions.setIsShowModalNavbar(false));
  };

  return (
    <ModalCard className="p-4 w-3/4">
      <span
        className="flex justify-center items-center absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-500 text-white font-semibold cursor-pointer"
        onClick={hideModalNavbarHandler}
      >
        X
      </span>
      <button className="w-full border-b-[1px] border-b-secondaryPurple py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer">
        Help
      </button>
      <button className="w-full border-b-[1px] border-b-secondaryPurple py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer">
        Reset
      </button>
      <button className="w-full py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer">
        Quit
      </button>
    </ModalCard>
  );
};

export default ModalNavbar;
