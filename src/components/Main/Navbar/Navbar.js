import NavbarHamburger from "./NavbarHamburger";
import help from "../../../assets/images/circle-exclamation-solid.svg";
import quit from "../../../assets/images/right-from-bracket-solid.svg";
import reset from "../../../assets/images/rotate-solid.svg";

const Navbar = (props) => {
  return (
    <div className="w-full py-3 px-6 fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-primaryPurple to-secondaryPurple flex justify-end items:center lg:bg-gradient-to-b lg:from-transparent lg:to-transparent lg:bg-[rgba(0,0,0,.2)] ">
      <ul className="hidden w-1/4 lg:flex lg:items-center lg:justify-center">
        <li className="inline-block mr-8 cursor-pointer">
          <img
            src={help}
            alt="exclamation mark"
            className="w-6 h-6 to-bleach"
          />
        </li>
        <li className="inline-block text-2xl font-semibold text-slate-200 mr-8 cursor-pointer hover:text-slate-400">
          <img src={reset} alt="rotate arrow" className="w-6 h-6 to-bleach" />
        </li>
        <li className="inline-block text-2xl font-semibold text-slate-200 mr-8 hover:text-slate-400">
          <a href="/">
            <img src={quit} alt="door" className="w-6 h-6 to-bleach" />
          </a>
        </li>
      </ul>
      <NavbarHamburger />
    </div>
  );
};

export default Navbar;
