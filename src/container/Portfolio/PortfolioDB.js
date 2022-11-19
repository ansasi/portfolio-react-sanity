import { images } from "../../constants";

export const PortfolioDB = [
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
    projectLink: "https://ansasi.github.io/react-netflix-clone/signup",
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
