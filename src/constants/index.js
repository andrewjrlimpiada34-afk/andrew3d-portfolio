import { contact, github, javascript, linkedin, mongodb, mysql } from "../assets/icons";
import react from "../assets/react.svg";
import portfolioPreview from "../assets/images/project-1.webp";

export const experiences = [
  {
    title: "1st Year B.O.D.",
    company: "Student Leadership Experience",
    type: "Campus Involvement",
    duration: "First Year",
    description:
      "Served as a member of the Board of Directors during my first year, building experience in leadership, teamwork, and responsibility within the student community.",
  },
];

export const skills = [
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JS",
    type: "Programming",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/andrewjrlimpiada34-afk",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/limpiada-andrew-jr-b-3299513b7",
  },
];

export const projects = [
  {
    name: "3D Portfolio Website",
    description:
      "An interactive personal portfolio built with React and Three.js to introduce who I am, share my background, and present my learning journey in Computer Engineering.",
    image: portfolioPreview,
    sourceCode: "https://github.com/andrewjrlimpiada34-afk",
  },
];
