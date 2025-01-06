import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { title: "_hello", link: "/" },
    { title: "_about-me", link: "/about" },
    { title: "_projects", link: "/project" },
    { title: "_contact-me", link: "/contact" },
  ];

  return (
    <>
      <div className="flex md:hidden text-lynch-600 z-50">
        <Hamburger
          size={24}
          rounded
          duration={0.5}
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#011627] text-lynch-300 z-40 flex flex-col p-6 transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-500`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lynch-600 text-xl flex items-center gap-1">
            Imamgg <FaCode size={16} />
          </h1>
        </div>

        <ul className="flex flex-col gap-6 text-lg">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="group relative inline-block"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3 text-lynch-600 hover:text-lynch-400 transition-all duration-300">
                  {item.title}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lynch-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
