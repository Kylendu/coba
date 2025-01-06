import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const menu = [
    {
      title: "_Hello",
      link: "/",
    },
    {
      title: "_About-me",
      link: "/about",
    },
    {
      title: "_Projects",
      link: "/project",
    },
  ];

  const router = useRouter();

  return (
    <div className="hidden justify-between items-center w-full text-lynch-600 md:flex">
      <ul className="flex items-center gap-10">
        {menu.map((item, index) => (
          <li key={index} className="relative">
            <Link
              href={item.link}
              className={`hover:text-lynch-200 transition-all duration-300 ${
                router.pathname === item.link ? "text-lynch-200" : ""
              }`}
            >
              {item.title}
            </Link>
            {router.pathname === item.link && (
              <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-lynch-400"></div>
            )}
          </li>
        ))}
      </ul>

      <div className="hover:text-lynch-200 transition-all duration-300">
        <Link href={"/contact"}>_Contact-me</Link>
      </div>
    </div>
  );
};

export default Menu;
