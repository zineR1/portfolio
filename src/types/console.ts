export interface ConsoleData {
  intro: string;
  aboutMe: string;
  techStack: string;
  hobbies: string;
  softSkills: string[];
}
export interface ActionButtonsProps {
  setRenderedData: React.Dispatch<
    React.SetStateAction<
      { key: string; value: string | string[] | undefined }[]
    >
  >;
  setShowEmptyLine: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TypewriterLineProps {
  text: string;
  onDone?: () => void;
  setShowEmptyLine: (show: boolean) => void;
}
interface ConsoleLine {
  key: string;
  value: string | string[] | undefined;
}
export interface AnimatedConsoleLineProps {
  line: ConsoleLine;
  setShowEmptyLine: (show: boolean) => void;
}
export interface ResponseLineProps {
  renderedData: ConsoleLine[];
  setShowEmptyLine: (show: boolean) => void;
}
