import { contact, github, javascript, linkedin, mongodb, mysql } from "../assets/icons";
import react from "../assets/react.svg";
import portfolioPreview from "../assets/images/project-1.webp";
import matlabLogo from "../assets/matlab/matlablogo.png";
import ciscoLogo from "../assets/cisco/ciscologo.png";

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
    category: "Team Project",
    items: [
      {
        name: "Severino Online Shop WebApp",
        description:
          "A webapp for online ordering of Severino perfume products.",
        image: portfolioPreview,
        liveUrl: "https://severino-webapp-shop.vercel.app",
        sourceCode: "https://github.com/andrewjrlimpiada34-afk",
      },
    ],
  },
  {
    category: "MATLAB Experiments",
    items: [
      {
        name: "Activity 1: 3D Wave & Sine Wave",
        description: "3D wave visualization and sine wave generation using MATLAB.",
        image: matlabLogo,
        pdfUrl: "/src/assets/matlab/MATLAB_Limpiada_Activity_No.1.pdf",
      },
      {
        name: "Activity 2: RGB Color Space",
        description: "RGB color space manipulation and image processing techniques.",
        image: matlabLogo,
        pdfUrl: "/src/assets/matlab/MATLAB_Limpiada_Activity_No.2.pdf",
      },
      {
        name: "Activity 3: Histogram & Grayscale",
        description: "Image histogram analysis and grayscale conversion methods.",
        image: matlabLogo,
        pdfUrl: "/src/assets/matlab/MATLAB_Limpiada_Activity_No.3.pdf",
      },
      {
        name: "Activity 4: Face & Person Detector",
        description: "Computer vision implementation for detecting faces and persons.",
        image: matlabLogo,
        pdfUrl: "/src/assets/matlab/MATLAB_Limpiada_Activity_No.4.pdf",
      },
    ],
  },
  {
    category: "CISCO Experiments",
    items: [
      {
        name: "Activity 1: File Sharing using LAN Cable",
        description: "Network fundamentals: file sharing over LAN connections.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.1 (File Sharing using LAN Cable) (1).pdf",
      },
      {
        name: "Activity 2: File Sharing using WiFi",
        description: "Wireless network configuration for file sharing.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.2 (File Sharing using WiFi).pdf",
      },
      {
        name: "Activity 3: Pinging",
        description: "Network diagnostics and connectivity testing using ping.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.3 (Pinging).pdf",
      },
      {
        name: "Activity 4: DHCP IPv4",
        description: "Dynamic Host Configuration Protocol for IPv4 networks.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.4 (DHCP IPv4).pdf",
      },
      {
        name: "Activity 5: DHCP IPv6-Auto",
        description: "IPv6 automatic configuration using DHCP.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.5 (DHCP IPv6-Auto).pdf",
      },
      {
        name: "Activity 6: FTP",
        description: "File Transfer Protocol implementation and usage.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.6 (FTP).pdf",
      },
      {
        name: "Activity 7: HTTP-Importing Image",
        description: "HTTP protocol and web resource importing techniques.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.7 (HTTP-Importing Image).pdf",
      },
      {
        name: "Activity 8: DNS",
        description: "Domain Name System configuration and resolution.",
        image: ciscoLogo,
        pdfUrl: "/src/assets/cisco/Limpiada_Activity_No.8 (DNS).pdf",
      },
    ],
  },
];
