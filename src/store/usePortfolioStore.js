import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialData = {
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
      "Welcome to my portfolio! My name is Agustin. I developed this simple bot to let you know a bit more about me",
    aboutMe:
      "I’m a Frontend Engineer specializing in React, React Native, and TypeScript, with experience building large-scale, high-performance applications used by hundreds of thousands of users. I focus on: Scalable front-end architectures • Performance optimizations (lazy loading, caching, bundle strategy) • Clean UI/UX and accessibility • State management with Zustand, Redux, React Query • Modern tooling and DevOps practices I currently work at Accenture (LATAM), contributing to enterprise financial products with complex architectures and strict performance and reliability requirements. On my side projects — including Vincufy — I build mobile and web experiences using React Native Web, Nest.js, PostgreSQL and Google Cloud.",
    techStack:
      "Frontend: React, React Native, Next.js, TypeScript, Zustand, React Query, Tailwind. • Backend: Node.js, Nest.js, Express, PostgreSQL, Prisma, Sequelize • Full-Stack Skills: API design, authentication (JWT), database modeling, cloud deployments.",
    location:
      " I'm located in Cordoba, Argentina. I would prefer to work remotely although I'm open to discuss all proposals.",
    softSkills: [
      "creativity",
      "innovation",
      "leadership",
      "perseverance",
      "persuasion",
      "proactive",
      "sociable",
    ],
  },
  projects: [
    {
      name: "Pokédex App",
      shortDescription: "My First Project",
      longDescription:
        "I developed a SPA (Single Page Application) with ReactJs, Redux and CSS for the front-end and NodeJs in conjunction with Sequelize and Express for the back-end. I worked with PostgreSQL to create the database and an external API called PokéApi to make all the requests to obtain the necessary information. In the app you can see many pokemons, different types of filters, search methods and the possibility of creating your own Pokemon.",
      youtubeLink: "https://www.youtube.com/embed/gyAVEUYAU1o",
      techStack:
        "React - Redux - CSS - Javascript - Node.js - Express - Sequalize - PostgreSQL.",
      githubLink:
        "https://github.com/zineR1/POKEMON-PI/tree/master/Henry%20Labs/PI-Pokemon-main",
      liveLink: "https://pokeapi.co/api/v2/pokemon",
    },
    {
      name: "Tripper App",
      shortDescription: "My Second Project",
      longDescription:
        "I developed a SPA (Single Page Application) with ReactJs, Redux and CSS for the front-end and the use of NodeJs in conjunction with Sequelize and Express for the back-end. I worked with PostgreSQL to create the database and an external API called TheDogApi to make all the requests to obtain the necessary information. In the app you can see many dog breeds, different types of filters, search methods and the possibility of creating your own breed.",
      youtubeLink: "https://www.youtube.com/embed/TbTFbx_pXFQ",
      techStack:
        "React - Redux - CSS - Javascript - Node.js - Express - Sequalize - PostgreSQL.",
      githubLink: "https://github.com/zineR1/TRIPPER-APP",
      liveLink: "https://restcountries.com/v3/all",
    },
    {
      name: "Buyme App",
      shortDescription: "The Final Group Project",
      longDescription:
        "Buyme App is a final project developed by a group of 8 people to graduate from Henry's Bootcamp. It consists of a client-server application to manage an ecommerce. It consists of two parts, the client (buyer) and the administrative part (administrator). Among its functionalities is to log in, manage sales, view product and sales information, receive payments, etc. It uses Mercado Pago as a payment platform.",
      youtubeLink: "https://www.youtube.com/embed/bhKQKhmR5Rw",
      techStack:
        "React - Redux -Javascript - Node - PostgreSQL - Nodemailer - Mercado Pago API - Express - Sequelize - CSS -HTML",
      githubLink: "https://github.com/Buyme-App/Buyme-app-PF",
      liveLink: "",
    },
  ],
  resume: null,
  emailContact: "",
};

export const usePortfolioStore = create(
  persist(
    (set) => ({
      data: initialData,
      updateField: (path, value) =>
        set((state) => {
          const keys = path.split(".");
          const newData = structuredClone(state.data);

          let obj = newData;
          while (keys.length > 1) {
            obj = obj[keys.shift()];
          }
          obj[keys[0]] = value;

          return { data: newData };
        }),
      reset: () => set({ data: initialData }),
    }),
    {
      name: "portfolioData",
    }
  )
);
