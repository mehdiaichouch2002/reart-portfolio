import React, { useState } from "react";
import { FaGithub, FaInstagram, FaFile, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ResumeLanguageModal from "./ResumeLanguageModal";

const iconMap = {
  facebook: <FaFacebook className="w-5 h-5" />,
  x: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: <FaInstagram className="w-5 h-5" />,
  github: <FaGithub className="w-5 h-5" />,
  email: <HiOutlineMail className="w-5 h-5" />,
  resume: <FaFile className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
};

const socialLinks = [
  {
    id: 1,
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61550802100170",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    id: 2,
    icon: "x",
    href: "https://x.com/AICHOUCHME97081",
    label: "Twitter",
    color: "hover:text-gray-100",
  },
  {
    id: 3,
    icon: "instagram",
    href: "https://www.instagram.com/mehdy.xv/",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    id: 4,
    icon: "github",
    href: "https://github.com/mehdiaichouch2002",
    label: "Github",
    color: "hover:text-gray-100",
  },
  {
    id: 5,
    icon: "email",
    href: "mailto:mehdi2002aichouch@mail.com",
    label: "Email",
    color: "hover:text-red-500",
  },
  {
    id: 6,
    icon: "resume",
    label: "Resume",
    color: "hover:text-green-500",
    isResume: true,
  },
  {
    id: 7,
    icon: "linkedin",
    href: "https://www.linkedin.com/in/aichouch-mehdi/",
    label: "Linkedin",
    color: "hover:text-blue-600",
  },
];

const Footer = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link) =>
                link.isResume ? (
                  <button
                    key={link.id}
                    onClick={handleResumeClick}
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 bg-transparent border-none cursor-pointer ${link.color}`}
                    aria-label={link.label}
                  >
                    {iconMap[link.icon]}
                  </button>
                ) : (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                    aria-label={link.label}
                  >
                    {iconMap[link.icon]}
                  </a>
                )
              )}
            </div>

            {/* Divider */}
            <div className="w-60 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Mehdi Aichouch. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>

      <ResumeLanguageModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </>
  );
};

export default Footer;
