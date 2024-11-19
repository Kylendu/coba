import HamburgerMenu from "../hamburger";
import Menu from "./menu";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[60px] flex items-center gap-x-48 px-6 justify-between">
        <h1 className="text-lynch-600">Imamgg</h1>
        <Menu />
        <HamburgerMenu />
      </nav>
    </>
  );
};

export default Navbar;
