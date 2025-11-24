export interface PortfolioBannerProps {
  setRunTour?: (run: boolean) => void;
}
export interface JoyrideProfileTourProps {
  run: boolean;
  setRun: (run: boolean) => void;
}
export type TechStackStepContentProps = {
  techInputs: string[];
  setTechInputs: React.Dispatch<React.SetStateAction<string[]>>;
};
export type HobbiesStepContentProps = {
  hobbyInputs: string[];
  setHobbyInputs: React.Dispatch<React.SetStateAction<string[]>>;
};
export type SoftSkillsStepContentProps = {
  softSkillInputs: string[];
  setSoftSkillInputs: React.Dispatch<React.SetStateAction<string[]>>;
};
