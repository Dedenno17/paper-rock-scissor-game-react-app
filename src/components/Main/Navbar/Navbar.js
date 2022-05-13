import NavbarHamburger from "./NavbarHamburger";

const Navbar = (props) => {
  return (
    <div className="w-full py-3 px-6 bg-gradient-to-b from-primaryPurple to-secondaryPurple flex justify-end items:center lg:bg-gradient-to-b lg:from-transparent lg:to-transparent">
      <ul className="hidden w-1/4 lg:flex">
        <li className="text-2xl font-semibold text-slate-200 mr-8 cursor-pointer hover:text-slate-400">
          Help
        </li>
        <li className="text-2xl font-semibold text-slate-200 mr-8 cursor-pointer hover:text-slate-400">
          Reset
        </li>
        <li className="text-2xl font-semibold text-slate-200 mr-8 hover:text-slate-400">
          <a href="/">Quit</a>
        </li>
      </ul>
      <NavbarHamburger />
    </div>
  );
};

export default Navbar;
