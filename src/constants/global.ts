import { User } from "../types";
import mvp from "../assets/mvp.jpg";
import premio from "../assets/premio.jpg";

export const consoleActionButtons = [
  { text: "About Me", key: "aboutMe" },
  { text: "Tech Stack", key: "techStack" },
  { text: "Hobbies", key: "hobbies" },
  { text: "Soft Skills", key: "softSkills" },
];

export const initialData: User = {
  name: "Agustín Dalvit",
  role: "Frontend Engineer (React, React Native & TypeScript)",
  description: "with Full-Stack experience (Node.js, Nest.js, PostgreSQL)",
  linkedinLink: "https://www.linkedin.com/in/agustindalvit/",
  githubLink: "https://github.com/zineR1",
  job: {
    title: "Accenture",
    subtitle: "Current Job",
  },
  sideProject: {
    title: "Vincufy",
    subtitle: "Side-project",
  },
  experience: "3+",
  consoleData: {
    intro:
      "Hey! I’m Agustín. I built this interactive bot so you can explore my work in a more fun, developer-friendly way.",
    aboutMe:
      "I'm a Frontend Engineer focused on building fast, scalable, and intuitive user experiences.\nI specialize in React, React Native, and TypeScript, and have experience delivering large-scale applications used by hundreds of thousands of users.\n\nI bring a mix of strong engineering fundamentals, product thinking, and clean UX/UI. My strengths include scalable frontend architectures, performance optimization, and modern state management (Zustand, Redux, React Query).\n\nI currently work at Accenture (LATAM), contributing to high-complexity financial products with strict performance and reliability requirements.\nOn the side, I build mobile and web products — including Vincufy — using React Native Web, Nest.js, PostgreSQL, and Google Cloud.",
    techStack:
      "Frontend: React, React Native, Next.js, TypeScript, Zustand, React Query, Tailwind. • Backend: Node.js, Nest.js, Express, PostgreSQL, Prisma, Sequelize • Full-Stack Skills: API design, authentication (JWT), database modeling, cloud deployments.",
    hobbies:
      "Music production & DJing • Exploring AI and emerging tech • UX/UI experimentation • Startup building • Fitness & travel",
    softSkills: [
      "product thinking",
      "ownership",
      "clear communication",
      "leadership",
      "problem solving",
      "user-centric mindset",
      "creativity",
      "innovation",
      "adaptability",
      "collaboration",
      "decision-making",
    ],
  },
  projects: [
    {
      name: "Vincufy — Event Social Platform",
      shortDescription:
        "Event ticketing, accreditation & real attendee networking — all in one platform.",
      projectTag:
        "(Event-Tech Startup Product · Co-founded & actively used in real events)",
      longDescription:
        "Vincufy is a platform designed to enhance the entire event journey — before, during, and after the experience. While we offer ticketing and on-site accreditation, these features are primarily a strategic entry point: they let us onboard 100% of attendees, enabling the real value of the product — localized, time-bound social discovery. Participants can explore who’s attending before the event, see who’s around them in real time, and continue discovering people for a limited period after the event, building meaningful connections aligned with their interests. Organizers can also create event communities to retain engagement and strengthen their audience. As CTO and co-founder, I lead the technical direction and core architecture, working closely with our team to build a fast, reliable, and scalable product used in real-world events.",
      youtubeLink:
        "https://www.youtube.com/embed/tHMbzt-w2wo?si=mcesmnLTxzW2sqRK",
      isMobileFormatVideo: true,
      techStack: [
        "React",
        "React Native",
        "React Native Web",
        "Expo",
        "Redux",
        "Nest.js",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Google Cloud",
      ],
      liveLink: "https://vincufy.com",
      highlights: {
        details: [
          "Over 2,000 active attendees in a single event and 6,000+ users on the platform.",
          "Official social network of Universidad Siglo 21 for their innovation week.",
          "2nd place in a startup competition, recognized for execution and product vision.",
          "Used in real events with on-site accreditation, ticketing, and live attendee engagement.",
        ],
        pictures: [
          {
            url: mvp,
            description: "First public MVP launch(2024) — Siglo 21",
          },
          {
            url: premio,
            description: "Award (2025)— 2nd place in startup competition",
          },
        ],
      },
    },
    {
      name: "This Portfolio",
      shortDescription: "Personal Portfolio & Interactive Showcase",
      projectTag: "Live Project",
      longDescription:
        "This portfolio is a fully custom web experience built to present my work, background, and technical focus. It's designed as a fast, responsive, and minimalistic interface where you can explore my projects, skills, and career story in an intuitive way. Everything you're seeing—animations, layout logic, routing, UI components, and project presentation—was developed from scratch, with special attention to smooth interactions and clear storytelling. The goal was to create a clean, modern experience that not only shows my work, but also reflects how I approach design, performance, and user experience.",
      techStack: [
        "React",
        "React Router",
        "TypeScript",
        "Zustand",
        "Tailwind CSS",
        "CSS Modules",
        "Vite",
        "EmailJS",
        "GitHub Pages",
        "Jest",
        "Testing Library",
      ],
      githubLink: "https://github.com/zineR1/portfolio",
      liveLink: "https://ziner1.github.io/portfolio/",
    },
  ],
  resume: null,
  emailContact: "",
};

export const emptyUser: User = {
  name: "",
  role: "",
  description: "",
  linkedinLink: "",
  githubLink: "",
  job: { title: "", subtitle: "Current job" },
  sideProject: { title: "", subtitle: "Side-project" },
  experience: "",
  consoleData: {
    intro: "",
    aboutMe: "",
    techStack: "",
    hobbies: "",
    softSkills: [""],
  },
  projects: [],
  resume: "",
  emailContact: "",
};
