import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import company from '../assets/company.jpg';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "Srijan Spectrum Pvt. Ltd",
    icon: company,
    iconBg: "#383E56",
    date: "Feb 2024 - Oct Present",
    points: [
      "Collaborated across teams for responsive UI implementation, ensuring optimal performance.",
      "Crafted seamless user experiences through responsive interface design collaboration.",
      "Proficiently developed web applications end-to-end using Angular, PHP, CSS, and JavaScript.",
      "Contributed to the full-stack development of web applications with expertise in Angular, PHP, CSS, and JavaScript.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tata Power DDL",
    icon: company,
    iconBg: "#383E56",
    date: "Aug 2021 - Oct 2021",
    points: [
      "Developing and maintaining web applications using .Net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fiverr Shop",
    description:
      "Discover an online shopping paradise! Explore and buy your beloved products effortlessly on our sleek e-commerce platform. Your favorite items are just a click away. Dive in and indulge today!",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: img3,
    source_code_link: "https://github.com/harsh-sangwan2003/fiverr-shop",
  },
  {
    name: "Movix App",
    description:
      "Experience a cinematic journey with this project! Explore a vast collection of movies from TMDB, curate your favorites, and enjoy seamless login and signup options. Your movie haven awaits!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdbapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: img2,
    source_code_link: "https://github.com/harsh-sangwan2003/movix-app",
  },
  {
    name: "Alan AI News App",
    description:
      "Step into the future of news! This React.js News App, fueled by AI, transforms how you engage with headlines—empowering you to control the news effortlessly, simply by using your voice.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "alan ai",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
    source_code_link: "https://github.com/harsh-sangwan2003/alan-ai-news-app",
  },
];

const featuredProjects = [
  {
    title: "Movix App",
    company_name: "React.js, Firebase, JSX, SCSS",
    icon: img4,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Utilizing TMDb API, curate movies in project, managed via React.js.",
      "Enhanced with react-router-dom, ensuring seamless navigation and interaction.",
      "CSS stylizes interface, delivering an engaging, visually appealing user experience.",
      "Effortlessly manage favorite films, offering a dynamic and intuitive platform.",
    ],
  },
  {
    title: "Portfolio Website",
    company_name: "HTML, JavaScript, SCSS",
    icon: img5,
    iconBg: "#383E56",
    date: "Sept 2023 - Oct 2023",
    points: [
      "This HTML-based site showcases projects, emphasizing creativity and clean design aesthetics.",
      "JavaScript enhances interactivity, providing smooth animations and user-friendly functionalities.",
      "SCSS elevates style with custom, modular components for a visually appealing layout",
      "The portfolio website merges HTML, SCSS, and JS for a seamless, interactive experience.",
    ],
  },
  {
    title: "File System Organizer",
    company_name: "Node.js, JavaScript",
    icon: img6,
    iconBg: "#383E56",
    date: "Aug 2023 - Sept 2023",
    points: [
      "Engineered Node.js CLI simplifies organization, offering time-saving solutions for file clutter.",
      "Node.js tool organizes files, intelligently categorizing clutter into structured folders.",
      "JavaScript streamlines file sorting, creating a neatly organized directory for users.",
      "Users save 3 hours weekly through the tool's efficient file management capabilities.",
    ],
  },
  {
    title: "Amazon Price Tracker",
    company_name: "Node.js, JavaScript",
    icon: img7,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Node.js script with Puppeteer tracks Amazon favorites, enhancing user experience seamlessly.",
      "JavaScript and NodeMailer merge for efficient notifications and personalized tracking updates.",
      "CLI tool streamlines product tracking, offering users a simplified, efficient experience.",
      "Effortlessly manage favorite films, offering a dynamic and intuitive platform.",
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, featuredProjects };
