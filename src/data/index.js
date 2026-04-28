import { 
  Code2, 
  Layout, 
  Database, 
  Mail, 
  Terminal,
  Monitor,
  Smartphone
} from 'lucide-react';
import { 
  FaGithub as Github, 
  FaLinkedin as Linkedin, 
  FaFigma as Figma 
} from 'react-icons/fa6';

export const personalInfo = {
  name: "Nishant",
  role: "Full Stack Developer",
  tagline: "I build modern, scalable, and user-focused web experiences.",
  email: "hello@nishant.dev",
  phone: "+91 1234567890",
  location: "India",
  resumeUrl: "#",
  socials: [
    { name: "GitHub", icon: Github, url: "https://github.com/nishantsolanki029-rgb" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/nishant-solanki-049448394" },
    { name: "Twitter", icon: Terminal, url: "#" }
  ]
};

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: Terminal,
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 75 }
    ]
  },
  {
    category: "Tools & Others",
    icon: Monitor,
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 95 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Shopping App",
    description: "A modern e-commerce application featuring product browsing and cart management. Built with React and Vite.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Vite", "Frontend"],
    category: "Frontend",
    liveUrl: "https://shopping-nishant9.vercel.app",
    githubUrl: "https://github.com/nishantsolanki029-rgb/Shopping",
    caseStudyUrl: "#",
    problem: "Users need a seamless online shopping experience with fast page loads and intuitive cart management.",
    approach: "I used React and Vite for a fast development experience and optimized build. Focused on component reusability and clean state management for the shopping cart.",
    solution: "Developed a responsive e-commerce frontend that provides quick navigation, a dynamic product display, and robust cart functionality."
  },
  {
    id: 2,
    title: "Note App",
    description: "A clean and intuitive note-taking application for managing daily tasks and ideas.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Vite"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/nishantsolanki029-rgb/noteapp",
    caseStudyUrl: "#",
    problem: "People often lose track of quick ideas or daily tasks without a simple, accessible tool.",
    approach: "Built a fast, single-page application focused on minimal distraction. Emphasized a clean UI for maximum productivity.",
    solution: "A lightweight React application that allows users to quickly create, edit, and organize their notes seamlessly."
  },
  {
    id: 3,
    title: "Node.js Projects",
    description: "A collection of Node.js projects and experiments demonstrating backend development skills.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Node.js", "Express.js", "JavaScript"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "https://github.com/nishantsolanki029-rgb/Node",
    caseStudyUrl: "#",
    problem: "Demonstrating backend capabilities requires concrete examples of server-side logic and API creation.",
    approach: "Created a centralized repository to store various backend implementations, showcasing routing, middleware, and database connections.",
    solution: "A well-structured codebase that serves as a solid foundation for building scalable Node.js backend services and REST APIs."
  }
];

export const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js.",
    icon: Layout
  },
  {
    title: "Backend Development",
    description: "Developing secure and scalable server-side logic, APIs, and database architectures using Node.js and Express.",
    icon: Database
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually stunning user interfaces with a focus on user experience and accessibility.",
    icon: Figma
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring your web application looks and performs perfectly on all mobile devices and screen sizes.",
    icon: Smartphone
  }
];

export const experience = [
  {
    company: "Digital Agency Co.",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using the MERN stack. Collaborated with designers to implement pixel-perfect UIs.",
    skills: ["MongoDB", "Express", "Node.js", "Next.js"]
  },
  {
    company: "StartUp Hub",
    role: "Junior Web Developer",
    period: "2019 - 2020",
    description: "Assisted in building responsive web pages and bug fixing. Gained hands-on experience with modern JavaScript frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js"]
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    content: "Working with Nishant was a game-changer for our project. His attention to detail and ability to translate complex requirements into beautiful UI is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Innovate AI",
    content: "Nishant is not just a great developer but also a fantastic problem solver. He helped us optimize our application's performance by 50% within just two weeks.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Emily Davis",
    role: "Founder, GreenLeaf",
    content: "The portfolio he built for me exceeded all expectations. It's fast, modern, and has already helped me land three high-ticket clients. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export const githubStats = {
  username: "nishantsolanki029-rgb",
  stats: [
    { label: "Total Stars", value: "10+" },
    { label: "Total Contributions", value: "300+" },
    { label: "Repositories", value: "7" },
    { label: "Followers", value: "5" }
  ]
};

export const blogs = [
  {
    id: 1,
    title: "How I Built My Portfolio",
    description: "A deep dive into the tech stack and design decisions behind this website.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    date: "April 20, 2024",
    link: "#",
    content: "When I set out to build this portfolio, I had one goal in mind: to create a digital space that truly represents my technical skills and design philosophy. I chose React for its component-based architecture and Tailwind CSS for its utility-first approach that allows for rapid styling. The most challenging part was ensuring the smooth animations didn't compromise performance. By using Framer Motion and optimizing our assets, I achieved a lighthouse score of 98. In this post, I'll break down the folder structure and the custom hooks that make this site tick."
  },
  {
    id: 2,
    title: "Top React Tips for 2024",
    description: "Essential patterns and hooks that every modern React developer should know.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1600&auto=format&fit=crop",
    date: "April 15, 2024",
    link: "#",
    content: "React 19 is just around the corner, and the ecosystem is evolving faster than ever. One of my top tips for 2024 is mastering the new 'use' hook for data fetching and transitioning from Redux to simpler state management like Zustand where appropriate. Also, don't sleep on Server Components! They are changing the way we think about the 'waterfall' of data in our apps. In this article, we'll walk through a code example of an optimized custom hook for handling infinite scrolls."
  },
  {
    id: 3,
    title: "The Future of Web Dev",
    description: "Exploring the impact of AI and edge computing on the next generation of web apps.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    date: "April 10, 2024",
    link: "#",
    content: "We are entering the era of AI-native applications. It's no longer just about building a UI; it's about how that UI interacts with LLMs to provide a smarter experience. Edge computing is also minimizing latency, making apps feel faster than ever regardless of where the user is. In this piece, I discuss why 'Prompt Engineering' is becoming a core skill for frontend developers and how Vercel's AI SDK is leading the charge in making these integrations seamless."
  }
];
