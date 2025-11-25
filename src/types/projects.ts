export interface Project {
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
export interface ProjectVideoProps {
  project: Project;
}
export interface ProjectHeaderInfoProps {
  eventName: string;
  shortDescription: string;
  projectTag?: string;
}
export interface ProjectContentInfoProps {
  techStack: string[];
  longDescription: string;
  githubLink?: string;
  liveLink?: string;
  highlights?: HighlightsInfo;
}
export interface HighlightsInfo {
  details: string[];
  pictures: { url: string; description: string }[];
}
