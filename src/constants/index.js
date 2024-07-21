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
import fiverr from '../assets/fiverr.png';
import disney from '../assets/disney.png';
import fileSystem from '../assets/fileSystem.png';
import admin from '../assets/admin.png';
import fashion_nest from '../assets/fashion_nest.png';
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
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
    title: "Software Engineer Intern",
    company_name: "Tata Power DDL",
    icon: company,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Architected and implemented a dynamic web platform with secure user authentication, boosting userengagement by 30% and reducing bounce rate by 25%.",
      "Leveraged ASP.NET, C#, and MVC to develop a scalable web app handling 5,000+ users and 1,000+transactions per minute.",
      "Conducted unit and integration testing, achieving 95% code coverage, and decreasing post-release bugsby 40%, ensuring high code quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Harsh is talented, smart, hard-working guy. He is always keen to learn something new, work on new projects and coming up with new ideas. He is a great young man who has got a great attitude, the skill and the will to succeed at the task in hand. He is absolutely humble in what he does and a great team player.",
    name: "Vinay Dabas",
    designation: "Senior Solution Architect",
    company: "Ping Identity",
    image: "https://www.kuppingercole.com/pics/croppedImg_202101291704.jpg",
  },
  {
    testimonial:
      "Harsh is a highly talented and dedicated software engineer with an extensive knowledge of programming languages and a stellar track record of producing enterprise level scalable applications. His commitment to producing clean, maintainable code greatly contributes to the long-term success of the projects he works on.",
    name: "Arvind Sangwan",
    designation: "Software Engineer",
    company: "CMPA",
    image: "https://media.licdn.com/dms/image/D5603AQGcVDwJnjNUoQ/profile-displayphoto-shrink_200_200/0/1673044415007?e=2147483647&v=beta&t=YiULChXOOnoQkyniByZwwnyF_y8xpmu25w-jNZPbfxg",
  },
];

const projects = [
  {
    name: "Fiverr",
    description:
      "Engineered a full-stack web application, Fiverr, achieving a Largest Contentful Paint (LCP) of less than 1second for enhanced user experience. Implemented server-side functionality with Node.js and Mongoose, maintaining 98% uptime for optimalperformance.",
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
    image: fiverr,
    source_code_link: "https://github.com/harsh-sangwan2003/fiverr",
  },
  {
    name: "Disney Flix",
    description:
      "Developed Disney Flix, a full-stack web application, enhancing load speed by 40% and achieving a 0.01 CLS score. Integrated Firebase for authentication, real-time database, and hosting to ensure seamless and secure user interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },

    ],
    image: disney,
    source_code_link: "https://github.com/harsh-sangwan2003/100-days-web-dev/tree/main/ReactJS/Projects/disney-flix",
  },
  {
    name: "File System Organizer",
    description:
      "Engineered File System Organizer, a command line tool using Node.js and JavaScript, to streamline file organization. Implemented intelligent categorization and sorting, creating a neatly structured folder system, and saved users an average of 3 hours per week.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: fileSystem,
    source_code_link: "https://github.com/harsh-sangwan2003/File-System-Organizer",
  },
];

const featuredProjects = [
  {
    title: "Fashion Nest",
    company_name: "React.js, Node.js, Express, Styled-Components",
    icon: fashion_nest,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Developed Fashion-Nest, an online e-commerce web application for clothes, using React, Node.js, and Mongoose for a seamless shopping experience.",
      "Implemented JWT authentication for secure user sessions and integrated Styled-Components for a modern, responsive design.",
      "Achieved a streamlined user interface and efficient data handling, enhancing the overall shopping experience.",
    ],
  },
  {
    title: "Admin Dashboard",
    company_name: "React.js, SCSS, Firebase, recharts",
    icon: admin,
    iconBg: "#383E56",
    date: "Sept 2023 - Oct 2023",
    points: [
      "Crafted an admin dashboard using React and Firebase, providing a comprehensive interface for managing and analyzing data.",
      "Designed a responsive and intuitive UI with SCSS, ensuring a smooth and user-friendly experience for administrators.",
      "Integrated Firebase for real-time updates and secure data handling, enhancing overall functionality and performance.",,
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
