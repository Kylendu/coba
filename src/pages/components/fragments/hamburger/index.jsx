import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";

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
          <h1 className="text-lynch-600 text-2xl">Imamgg</h1>
        </div>

        <ul className="flex flex-col gap-6 text-lg">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="hover:text-lynch-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
