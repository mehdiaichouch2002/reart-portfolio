import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aichouch-mehdi/",
      style: "rounded-tr-md",
    },
      {
        id: 2,
        child: (
          <>
             <FaGithub size={30} />
          </>
        ),
        href: "https://github.com",
      },
      {
        id: 3,
        child: (
          <>
            <HiOutlineMail size={30} />
          </>
        ),
        href: "mailto:mehdi2002aichouch@mail.com",
      },
      {
        id: 4,
        child: (
          <>
            <BsFillPersonLinesFill size={30} />
          </>
        ),
        href: "/mehdi-aichouch.pdf",
        style: "rounded-br-md",
        download : true,
      },
  ];
  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={"flex justify-between items-center w-20 h-14 px-4 ml-[-30px] hover:ml-[-25px] hover:rounded-md duration-300 bg-gray-500 " + link?.style}
            >
              <a
                href={link.href}
                className="flex justify-between items-center w-full text-white ml-5"
                download={link?.download}
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
