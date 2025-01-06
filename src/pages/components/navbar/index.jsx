import { FaCode } from "react-icons/fa";
import HamburgerMenu from "../hamburger";
import Menu from "./menu";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[60px] flex items-center gap-x-48 px-6 justify-between">
        <h1 className="text-lynch-600 text-xl flex items-center gap-1">
          Imamgg <FaCode size={16} />
        </h1>
        <Menu />
        <HamburgerMenu />
      </nav>
    </>
  );
};

export default Navbar;
