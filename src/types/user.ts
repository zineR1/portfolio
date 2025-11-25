import { Project, ConsoleData } from "./";

export interface User {
  linkedinLink: string;
  githubLink: string;
  name: string;
  role: string;
  description: string;
  position: string;
  job: Job;
  sideProject: SideProject;
  experience: string;
  consoleData: ConsoleData;
  projects: Project[];
  resume: string | null;
  emailContact: string;
}
export interface Job {
  title: string;
  subtitle: string;
  image: string;
}
export interface SideProject {
  title: string;
  subtitle: string;
  image: string;
}
export interface InfoMiniCardProps {
  icon: string;
  title: string;
  subtitle?: string;
}
