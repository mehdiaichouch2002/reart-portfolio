import AnitaImg from "../assets/projects/anita.png";
import CarharttImg from "../assets/projects/carhartt.png";
import FreespaceImg from "../assets/projects/freespace.png";
import EdwwinImg from "../assets/projects/edwin.png";
import PortfolioImg from "../assets/projects/portfolio.jpg";
import RequestifyImg from "../assets/projects/requestify.png";
import SlackBotImg from "../assets/projects/slackbot.png";
import LibraryImg from "../assets/projects/library.png";

const projects = [
  {
    id: 1,
    src: FreespaceImg,
    href: "https://github.com/mehdiaichouch2002/Freespace",
    title: "Freespace",
    hosted: false,
    category: "opensource",
    description: "A space management application",
    tech: ["PHP"],
  },
  {
    id: 2,
    src: RequestifyImg,
    href: "https://github.com/mehdiaichouch2002/Requestify",
    title: "Requestify",
    hosted: false,
    category: "opensource",
    description: "Request management system",
    tech: ["Laravel"],
  },
  {
    id: 3,
    src: CarharttImg,
    href: "https://b2b.carhartt-wip.com",
    title: "B2B Carhartt WIP",
    hosted: true,
    category: "commercial",
    description: "B2B e-commerce platform",
    tech: ["Magento 2"],
  },
  {
    id: 4,
    src: AnitaImg,
    href: "https://www.anita.com",
    title: "Anita",
    hosted: true,
    category: "commercial",
    description: "E-commerce website",
    tech: ["Magento 2"],
  },
  {
    id: 5,
    src: EdwwinImg,
    href: "https://edwin-europe.com",
    title: "Edwin",
    hosted: true,
    category: "commercial",
    description: "Fashion retail platform",
    tech: ["Magento 2"],
  },
  {
    id: 6,
    src: PortfolioImg,
    href: "https://github.com/mehdiaichouch2002/reart-portfolio",
    title: "Portfolio",
    hosted: false,
    category: "personal",
    description: "Personal portfolio website",
    tech: ["React", "Tailwind"],
  },
  {
    id: 7,
    src: SlackBotImg,
    href: "https://github.com/mehdiaichouch2002/Daily-Meeting-Host-Python-Slack-bot",
    title: "Daily Meeting Host Slack Bot",
    hosted: false,
    category: "opensource",
    description:
      "Python Slack bot that automatically hosts and manages daily stand-up meetings.",
    tech: ["Python", "Slack API"],
  },
  {
    id: 8,
    src: LibraryImg,
    href: "https://github.com/mehdiaichouch2002/library-system",
    title: "Library Management System",
    hosted: false,
    category: "opensource",
    description:
      "Dockerized system with book cataloging, user auth, and automated borrowing workflows.",
    tech: ["PHP", "MySQL", "Nginx", "Docker"],
  },
];

export default projects;
