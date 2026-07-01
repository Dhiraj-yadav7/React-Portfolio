import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png';


// Experience Section Logo's
import android from './assets/company_logo/android.png';
import java from './assets/company_logo/java.png';

// Education Section Logo's
import inv from './assets/education_logo/inv.png';
import nss from './assets/education_logo/nss.png';

// Project Section Logo's
import virtuallogo from './assets/work_logo/virtualAssistant.png';
import portfolioLogo from "./assets/work_logo/portfolio.png";
import rpsLogo from "./assets/work_logo/rps.png";
import tttLogo from "./assets/work_logo/ttt.png";
import fitnessLogo from "./assets/work_logo/fitness.png";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C basics', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python basics', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
     id: 0,
  img: android,
  role: "Android Developer Intern",
  company: "EduSkills AICTE Virtual Internship",
  date: "Oct 2025 - Dec 2025",
  desc: "Successfully completed a 10-week Android Developer Virtual Internship. Gained hands-on experience in Android application development, mobile UI design, activity lifecycle management, and integrating Android development tools. Worked on building responsive and user-friendly mobile applications.",
  skills: [
    "Android",
    "Java",
    "Android Studio",
    "XML",
    "UI Design",
    "Mobile Development"
      ],
    },
    {
      id: 1,
  img: java,
  role: "Java Full Stack Developer Intern",
  company: "EduSkills AICTE Virtual Internship",
  date: "Jan 2026 - Mar 2026",
  desc: "Completed a 10-week Java Full Stack Developer Virtual Internship. Developed skills in frontend and backend development, Java programming, database management, web technologies, and full-stack application development. Learned industry-standard development practices and project workflows.",
  skills: [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "Full Stack Development",
    "Web Development"
      ],
    },
  ];
  
  export const education = [
  {
    id: 0,
    img: inv,
    school: "Invertis University, Bareilly",
    date: "July 2023 - Present",
    grade: "7.5+ CGPA",
    desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering. Building strong knowledge in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Actively working on projects and enhancing problem-solving skills through practical implementation.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
  },
  {
    id: 1,
    img: nss,
    school: "Nalanda Shikshan Sansthan, Hardoi",
    date: "Apr 2022 - Mar 2023",
    grade: "64%",
    desc: "Completed Higher Secondary Education (Class XII) under the CBSE Board with Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: nss,
    school: "Nalanda Shikshan Sansthan, Hardoi",
    date: "Apr 2020 - Mar 2021",
    grade: "72.4%",
    desc: "Completed Secondary Education (Class X) under the CBSE Board with Science and Computer Applications.",
    degree: "CBSE (X) - Science with Computer Applications",
  },
];
  
  export const projects = [

    {
    id: 0,
    title: "Virtual Assistant ",
    description:
      "A full-stack AI Virtual Assistant developed using React, Node.js, Express, MongoDB, and Gemini AI with voice recognition, speech synthesis, authentication, and customizable assistant features.",
    image: virtuallogo,
    tags: ["React JS", "Tailwind CSS", "JavaScript", "Node JS", "Express JS", "MongoDB", "Gemini AI","axios","cloudinary","Mongoose","mongodb atlas","react-router-dom" ,"react-icons"],
    github: "https://github.com/Dhiraj-yadav7/Virtual-Assistant",
    webapp: "https://virtual-assistant-pcvg.onrender.com",
  },
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website built using React.js and Tailwind CSS. It showcases my skills, projects, education, and contact information with a clean and attractive user interface.",
    image: portfolioLogo,
    tags: ["React JS", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Dhiraj-yadav7/React-Portfolio",
    webapp: "https://dhiraj-portfolio-beta.vercel.app/",
  },



  {
    id: 2,
    title: "Rock Paper Scissors Game",
    description:
      "An interactive browser-based game developed using HTML, CSS, and JavaScript. Users can play against the computer with real-time score tracking and responsive gameplay.",
    image: rpsLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhiraj-yadav7/ROCK-PAPER-SCISSOR-GAME-",
    webapp: ""
  },

  {
    id: 3,
    title: "Tic Tac Toe Game",
    description:
      "A responsive Tic Tac Toe game built using HTML, CSS, and JavaScript. It features winner detection, game reset functionality, and an intuitive user interface.",
    image: tttLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhiraj-yadav7/TIC-TAC-TOC-GAME-",
    webapp: "",
  },

  {
    id: 4,
    title: "Invertis Fitness Landing Page",
    description:
      "A modern and responsive fitness landing page designed to promote fitness services and programs. Built with a focus on clean UI design, responsiveness, and user engagement.",
    image: fitnessLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhiraj-yadav7/Invertis-Fitness-Landing-Page",
    webapp: "",
  },
];