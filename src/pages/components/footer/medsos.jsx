import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
const socialLinks = [
  {
    href: "https://x.com/404imam",
    icon: <FaTwitter size={18} />,
  },
  {
    href: "https://www.instagram.com/0ximam/",
    icon: <FaInstagram size={18} />,
  },
];

const Medsos = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <p className="text-lynch-300">find me in:</p>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            className="text-lynch-600 hover:text-lynch-300 transition"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div>
        <a
          href="https://github.com/Imamgg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-lynch-600 hover:text-lynch-300 transition"
        >
          <FaGithub size={18} />
          <span>@Imamgg</span>
        </a>
      </div>
    </>
  );
};

export default Medsos;