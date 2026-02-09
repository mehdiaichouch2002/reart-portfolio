import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ResumeLanguageModal from "./ResumeLanguageModal";

const iconMap = {
  linkedin: <FaLinkedin size={30} />,
  github: <FaGithub size={30} />,
  email: <HiOutlineMail size={30} />,
  resume: <BsFillPersonLinesFill size={30} />,
};

const links = [
  {
    id: 1,
    icon: "linkedin",
    href: "https://www.linkedin.com/in/aichouch-mehdi/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    icon: "github",
    href: "https://github.com/mehdiaichouch2002",
  },
  {
    id: 3,
    icon: "email",
    href: "mailto:mehdi2002aichouch@mail.com",
  },
  {
    id: 4,
    icon: "resume",
    style: "rounded-br-md",
    isResume: true,
  },
];

const SocialLinks = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  return (
    <>
      <div className="hidden xl:flex flex-col top-[35%] left-0 fixed z-10">
        <ul>
          {links.map((link) => (
            <li
              key={link.id}
              className={
                "flex justify-between items-center w-20 h-14 px-4 ml-[-30px] hover:ml-[-25px] hover:rounded-md duration-300 bg-gray-500 " +
                (link.style || "")
              }
            >
              {link.isResume ? (
                <button
                  onClick={handleResumeClick}
                  className="flex justify-between items-center w-full text-white ml-5 bg-transparent border-none cursor-pointer"
                  aria-label="Download Resume"
                >
                  {iconMap[link.icon]}
                </button>
              ) : (
                <a
                  href={link.href}
                  className="flex justify-between items-center w-full text-white ml-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  {iconMap[link.icon]}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <ResumeLanguageModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </>
  );
};

export default SocialLinks;
