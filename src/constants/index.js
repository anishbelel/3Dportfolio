
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    expres,
    html,
    css,
    reactjs,
    linux,
    tailwind,
    nodejs,
    postgre,
    git,
    c,
    cpp,
    
    siemens,

    carrent,
    port,
    healthyfy,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Comepetive Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student",
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
      name: "expres",
      icon: expres,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "linux Toolkit",
      icon: linux,
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
      name: "postgre",
      icon: postgre,
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
      name: "c",
      icon: c,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "STA Training",
      company_name: "siemens",
      icon: siemens,
      iconBg: "#383E56",
      date: "Nov 2023 - Dec 2023",
      points: [
        "First training programme about the real industries.",
        "Familiarisaion with the actual mechanical and electrical system of the industries.",
        "Factory visit at the working hour of the Siemens office Kalwa, Mumbai.",
        "Implementing the theoritical knowledge in real world industries.",
      ],
    },
    {
      title: "Basic Mechatronics Training",
      company_name: "siemens",
      icon: siemens,
      iconBg: "#E6DEDD",
      date: "June 2024 - July 2024",
      points: [
        "Basic understanding about the automation ststem of industries and PLC.",
        "Building Ladder diagram of complex automation ststem.",
        "Knowledge about Hydraulics and Pneumatics System.",
        
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Travel Engine",
      description:
        "Our travel web app is your ultimate guide to navigating Kolkata effortlessly. Discover the best options, from trains and buses to tourist spots, hotels, and restaurants.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgre",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D Portfolio",
      description:
        "A dynamic site tells all about myself. It is highly user interactive gives a smooth transition and usses 3D model, dynamic buttons and much more. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/",
    },
    {
      name: "Healthyfy",
      description:
        "This is a business model of our company healthyfy which encourages prople to live a healthy life. This is very simple made using only HTML & CSS.",
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
      image: healthyfy,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  