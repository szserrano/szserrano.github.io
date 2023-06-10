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
    vite,
    meta,
    starbucks,
    tesla,
    shopify,
    tpumps,
    google,
    chicostate,
    exertus,
    carrent,
    capstone,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "vite",
      icon: vite,
    },
  ];
  
  const experiences = [
    {
      title: "Google CSSIx Developer",
      company_name: "Google",
      icon: google,
      iconBg: "#383E56",
      date: "August 2018 - September 2018",
      points: [
        "Developing and deploying small personal websites using EC2 instance.",
        "Collaborating within a team to develop a workout app that allows other gym goers to connect, workout together, and keep track of their workouts.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Hands-on Lab Instructor",
      company_name: "California State University, Chico",
      icon: chicostate,
      iconBg: "#E6DEDD",
      date: "August 2019 - December 2019",
      points: [
        "Collaborate with other instructors to build science lessons to present to fourth through fifth graders that visit the school on field trips.",
        "Presented complex science topics in a concise way that is fun, interactive, and digestible for children.",
        "Provided support for multiple presentations by sometimes giving multiple presentations on different topics in the event another instructor was struggling.",
      ],
    },
    {
      title: "Barista",
      company_name: "Tpumps",
      icon: tpumps,
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
        "Work with a team of up to five others to operate a bar in order to create drinks which customers order on the spot.",
        "Communicate and operate efficiently with other teammates in order to maintain a steady output of drinks.",
        "Fluidly swap between roles on bar in a manner that does not disrupt other coworker's workflow while maintaining the drink output.",
      ],
    },
    {
      title: "Licensed Life Insurance Agent",
      company_name: "Exertus Financial Partners",
      icon: exertus,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Collaborating with a mentor and other experienced financial professionals to provide solutions for families in financial need.",
        "Creating presentations of financial solutions that cater to each client's specific situation.",
        "Building and leading a team so members become their own self-sustatining producer so that they can grow as I grow.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Kyle Reeves",
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
      name: "Home Monitor App",
      description:
        "Mobile application that allows users to monitor live and past statuses of entrance sensors within their house. Users within the same house can also message each other.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "expo-cli",
          color: "green-text-gradient",
        },
        {
          name: "google-firebase",
          color: "pink-text-gradient",
        },
      ],
      image: capstone,
      source_code_link: "https://github.com/szserrano/HomeMonitorGit",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };