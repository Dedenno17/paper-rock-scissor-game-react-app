import NavbarHamburger from "./NavbarHamburger";

const Navbar = (props) => {
  return (
    <div className="w-full py-3 px-6 bg-gradient-to-b from-primaryPueple to-secondaryPurple flex justify-end ">
      <NavbarHamburger />
    </div>
  );
};

export default Navbar;
