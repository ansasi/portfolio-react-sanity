import { images } from "../constants";

export const AboutData = [
  {
    title: "Profile",
    description:
      "Industrial engineer. Having studied a double master's degree in Industrial Engineering and Smart Industry has made me a person with great adaptability and problem solving skills, and has also awakened in me a great passion for Big Data, the Cloud and the Web.",
    image: images.about02,
  },
  {
    title: "Technologies and tools",
    description:
      "My main field of knowledge is data and its use. Thanks to that I have been able to expand my knowledge to other areas such as web development or cloud architecture. My best friends are Python, React and AWS.",
    image: images.tools,
  },
  {
    title: "Background",
    description:
      "My experience as a Data Engineer, Data Scientist and Fullstack Developer has given me the knowledge and skills to be part of all kinds of projects. From the development of SQL data models to the design and deployment of cloud architectures, through Fullstack web development.",
    image: images.about04,
  },
  {
    title: "Awards and Achievements",
    description:
      "Winner of the IV Hackathon in collaboration with Prosegur and ICAI and AWS Certified Cloud Practitioner.",
    image: images.about03,
  },
];

export const ExperienceData = [
  {
    name: "Data Engineer",
    company: "DataCentric",
    date: "DEC 2022 - PRESENT",
    desc: "I develop the cloud infrastructure of the company and its clients using AWS to launch ETLs, Dockers, VM (EC2) and other tools, in order to improve the automation of their data process and to standardize it using the last cloud technology.",
    order: 1,
  },
  {
    name: "Business Intelligence Engineer",
    company: "Amazon",
    date: "MAR 2022 - SEP 2022",
    desc: "I worked in the headquarters of Amazon EU in Luxembourg developing SQL models, automating repetitive tasks with Python, developing websites and designing and deploying cloud architectures for the Logistic department. ",
    order: 2,
  },
  {
    name: "Data Scientist",
    company: "CIC Lab",
    date: "SEP 2021 - DEC 2021",
    desc: "I worked on a project for a Saargummi's factory, I improved their Data process using Python and R and developed a Machine Learning model using Python libraries to predict when the parts produced will have an error. ",
    order: 3,
  },
  {
    name: "Data Scientist",
    company: "IIT",
    date: "JUN 2021 - JUL 2021 ",
    desc: "I enhanced data processing and predictive modeling for Saargummi's factory. Continuing with the project that I started when working for CIC Lab.",
    order: 4,
  },
];

export const PortfolioData = [
  {
    title: "E-commerce Website",
    description:
      "A website created with Next.JS, Stripe and Sanity. It simulates an e-commerce store in which you can validate payments with Stripe.",
    codeLink: "https://github.com/ansasi/ecommerce-stripe-sanity",
    projectLink: "https://ecommerce-ansasi.vercel.app/",
    image: images.ecommerce,
    tags: ["E-commerce", "Mobile App", "Web App", "Next JS", "React JS", "Stripe", "Sanity"],
  },
  {
    title: "Gym App",
    description:
      "This is a gym app with a variety of exercise. It uses Rapid to get the exercise and YouTube videos related to them.",
    codeLink: "https://github.com/ansasi/fitness-react-app",
    projectLink: "https://ansasi.github.io/fitness-react-app/",
    image: images.gym,
    tags: ["Sports", "Mobile App", "Web App", "React JS"],
  },
  {
    title: "Netflix Clone",
    description:
      "This website is a Netflix clone (your browser may detect it as phishing). It uses firebase to authenticate the users and to save their favorite TV shows and films. ",
    codeLink: "https://github.com/ansasi/react-netflix-clone",
    projectLink: "https://ansasi.github.io/react-netflix-clone/",
    image: images.netflix_clone,
    tags: ["Streaming Platform", "Web App", "React JS", "Firebase"],
  },
  {
    title: "Social Media Website",
    description:
      "A website to post, save and comment pictures, just like Pinterest. It uses React JS, Google Auth and Sanity. You can register and post pictures or use it anonymously and just see the pictures.",
    codeLink: "https://github.com/ansasi/connected-social-media",
    projectLink: "https://connected-app.netlify.app/",
    image: images.social_media,
    tags: ["Social Media", "Mobile App", "Web App", "React JS", "Sanity", "User Auth"],
  },
];

export const SkillsData = [
  {
    name: "AWS",
    level: "advanced",
    type: "all",
    icon: images.aws,
  },
  {
    name: "Bootstrap",
    level: "intermediate",
    type: "frontend",
    icon: images.bootstrap,
  },
  {
    name: "C++",
    level: "intermediate",
    type: "backend, other",
    icon: images.cpp,
  },
  {
    name: "CSS",
    level: "intermediate",
    type: "frontend",
    icon: images.css,
  },
  {
    name: "Django",
    level: "advanced",
    type: "backend",
    icon: images.django,
  },
  {
    name: "Firebase",
    level: "intermediate",
    type: "backend",
    icon: images.firebase,
  },
  {
    name: "Git",
    level: "advanced",
    type: "other",
    icon: images.git,
  },
  {
    name: "HTML",
    level: "advanced",
    type: "frontend",
    icon: images.html,
  },
  {
    name: "JavaScript",
    level: "advanced",
    type: "all",
    icon: images.javascript,
  },
  {
    name: "Pandas",
    level: "professional",
    type: "other",
    icon: images.pandas,
  },
  {
    name: "Python",
    level: "professional",
    type: "backend, other",
    icon: images.python,
  },
  {
    name: "Terrafom",
    level: "intermediate",
    type: "other",
    icon: images.terraform,
  },
  {
    name: "R",
    level: "intermediate",
    type: "other",
    icon: images.r,
  },
  {
    name: "React",
    level: "advanced",
    type: "frontend",
    icon: images.react,
  },
  {
    name: "Sass",
    level: "intermediate",
    type: "frontend",
    icon: images.sass,
  },
  {
    name: "SQL",
    level: "professional",
    type: "backend",
    icon: images.sql,
  },
];
