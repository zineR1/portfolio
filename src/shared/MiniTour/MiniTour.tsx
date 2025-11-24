import { useState, useEffect } from "react";
import Joyride, { CallBackProps } from "react-joyride";
import { JoyrideProfileTourProps } from "../../types";
import {
  minitourSteps,
  minitourButtonsName,
  minitourStyles,
} from "../../constants";
import {
  TechStackStepContent,
  HobbiesStepContent,
  SoftSkillsStepContent,
} from "../../components";

const MiniTour = ({ run, setRun }: JoyrideProfileTourProps) => {
  useEffect(() => {
    if (run) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [run]);

  const [techInputs, setTechInputs] = useState([""]);
  const [hobbyInputs, setHobbyInputs] = useState([""]);
  const [softSkillInputs, setSoftSkillInputs] = useState([""]);

  const techStackStepContent = (
    <TechStackStepContent
      techInputs={techInputs}
      setTechInputs={setTechInputs}
    />
  );
  const hobbiesStepContent = (
    <HobbiesStepContent
      hobbyInputs={hobbyInputs}
      setHobbyInputs={setHobbyInputs}
    />
  );
  const softSkillsStepContent = (
    <SoftSkillsStepContent
      softSkillInputs={softSkillInputs}
      setSoftSkillInputs={setSoftSkillInputs}
    />
  );

  const handleJoyrideCallback = (data: CallBackProps) => {
    if (
      data.action === "close" ||
      data.status === "finished" ||
      data.status === "skipped"
    ) {
      setRun(false);
    }
  };

  const stepsWithDynamicInputs = minitourSteps?.map((step) => {
    if (step.target === "#techStack-btn") {
      return { ...step, content: techStackStepContent };
    }
    if (step.target === "#hobbies-btn") {
      return { ...step, content: hobbiesStepContent };
    }
    if (step.target === "#softSkills-btn") {
      return { ...step, content: softSkillsStepContent };
    }
    return step;
  });

  return (
    <Joyride
      steps={stepsWithDynamicInputs}
      run={run}
      continuous
      callback={handleJoyrideCallback}
      locale={minitourButtonsName}
      styles={{
        options: minitourStyles.optionsStyle,
        tooltip: minitourStyles.tooltipStyle,
        buttonNext: minitourStyles.buttonNextStyle,
        buttonBack: minitourStyles.buttonBackStyle,
        buttonClose: minitourStyles.buttonCloseStyle,
      }}
    />
  );
};

export default MiniTour;
