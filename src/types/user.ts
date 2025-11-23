import { ConsoleData, Project } from ".";

export interface User {
  linkedinLink: string;
  githubLink: string;
  name: string;
  role: string;
  description: string;
  job: Job;
  sideProject: SideProject;
  experience: string;
  consoleData: ConsoleData;
  projects: ProjectsInfo[];
  resume: string | null;
  emailContact: string;
}
export interface Job {
  title: string;
  subtitle: string;
}
export interface SideProject {
  title: string;
  subtitle: string;
}
export interface InfoMiniCardProps {
  icon: string;
  title: string;
  subtitle?: string;
}

interface ProjectsInfo {
  name: string;
  shortDescription: string;
  projectTag: string;
  longDescription: string;
  youtubeLink?: string;
  isMobileFormatVideo?: boolean;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  highlights?: HighlightsInfo;
}

export interface HighlightsInfo {
  details: string[];
  pictures: { url: string; description: string }[];
}
