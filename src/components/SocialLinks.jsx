import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useResumeModal } from "../context/ResumeModalContext";

const links = [
  {
    id: 1,
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/aichouch-mehdi/",
    label: "LinkedIn",
    style: "rounded-tr-lg",
  },
  {
    id: 2,
    icon: <FaGithub size={20} />,
    href: "https://github.com/mehdiaichouch2002",
    label: "GitHub",
  },
  {
    id: 3,
    icon: <HiOutlineMail size={20} />,
    href: "mailto:mehdi2002aichouch@gmail.com",
    label: "Email",
  },
  {
    id: 4,
    icon: <BsFillPersonLinesFill size={20} />,
    label: "Resume",
    style: "rounded-br-lg",
    isResume: true,
  },
];

const SocialLinks = () => {
  const { open } = useResumeModal();

  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`group relative flex items-center w-[52px] hover:w-32 h-12 bg-gray-900 border border-gray-700/60 hover:border-cyan-500/40 hover:bg-gray-800 transition-all duration-300 overflow-hidden ${link.style ?? ""}`}
          >
            {link.isResume ? (
              <button
                onClick={open}
                className="flex items-center gap-3 w-full h-full px-3.5 text-gray-400 group-hover:text-cyan-400 bg-transparent border-none cursor-pointer transition-colors duration-300"
                aria-label={link.label}
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
                  {link.label}
                </span>
              </button>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 w-full h-full px-3.5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                aria-label={link.label}
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
                  {link.label}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
