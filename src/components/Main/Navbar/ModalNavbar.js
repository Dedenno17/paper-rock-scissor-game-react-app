import ModalCard from "../../UI/ModalCard";

const ModalNavbar = (props) => {
  return (
    <ModalCard className="p-4 w-full relative">
      <span className="flex justify-center items-center absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white font-semibold cursor-pointer">
        X
      </span>
      <button className="w-full border-b-2 border-b-secondaryPurple py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer">
        Help
      </button>
      <button className="w-full border-b-2 border-b-secondaryPurple py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer">
        Reset
      </button>
      <button className="w-full py-3 text-lg text-slate-700 font-semibold outline-none cursor-pointer">
        Quit
      </button>
    </ModalCard>
  );
};

export default ModalNavbar;
