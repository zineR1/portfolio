import { User } from "../types";
import { StateCreator } from "zustand";

const initialData: User = {
  linkedinLink: "https://www.linkedin.com/in/agustindalvit/",
  githubLink: "https://github.com/zineR1",
  name: "Agustín Dalvit",
  role: "Frontend Engineer (React, React Native & TypeScript)",
  description: "with Full-Stack experience (Node.js, Nest.js, PostgreSQL)",
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
      youtubeLink: "https://www.youtube.com/embed/gyAVEUYAU1o",
      isMobileFormatVideo: true,
      techStack:
        "React - React Native - React Native Web - Expo - Redux - Nest.js - Prisma - PostgreSQL - Docker - Google Cloud",
    },
    {
      name: "This Portfolio",
      shortDescription: "My Second Project",
      longDescription:
        "I developed a SPA (Single Page Application) with ReactJs, Redux and CSS for the front-end and the use of NodeJs in conjunction with Sequelize and Express for the back-end. I worked with PostgreSQL to create the database and an external API called TheDogApi to make all the requests to obtain the necessary information. In the app you can see many dog breeds, different types of filters, search methods and the possibility of creating your own breed.",
      youtubeLink: "https://www.youtube.com/embed/TbTFbx_pXFQ",
      techStack:
        "React - Redux - CSS - Javascript - Node.js - Express - Sequalize - PostgreSQL.",
      githubLink: "https://github.com/zineR1/TRIPPER-APP",
      liveLink: "https://restcountries.com/v3/all",
    },
  ],
  resume: null,
  emailContact: "",
};

export interface UserSlice {
  user: User;
  setUser: (user: User) => void;
  updateField: (path: string, value: any) => void;
  resetUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set, get, store) => ({
  user: initialData,
  setUser: (user: User) => set({ user }),
  updateField: (path: string, value: any) =>
    set((state) => {
      const keys = path.split(".");
      const newData: User = JSON.parse(JSON.stringify(state.user));
      let obj: any = newData;
      while (keys.length > 1) {
        obj = obj[keys.shift() as string];
      }
      obj[keys[0]] = value;
      return { user: newData };
    }),
  resetUser: () => set({ user: initialData }),
});
