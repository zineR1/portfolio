import { useState, useEffect } from "react";
import { useAppStore } from "../store";
import { userAdapter } from "../adapters/user.adapter";
import Joyride, { CallBackProps } from "react-joyride";
import { JoyrideProfileTourProps } from "../types";
import {
  minitourSteps,
  minitourButtonsName,
  minitourStyles,
  emptyUser,
} from "../constants";
import {
  TechStackStepContent,
  HobbiesStepContent,
  SoftSkillsStepContent,
  ProfileNameStepContent,
  RoleStepContent,
  SocialLinksStepContent,
  FavouriteCardsStepContent,
  AboutMeStepContent,
} from "../components";
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

  const [newUser, setNewUser] = useState(emptyUser);
  console.log(newUser, "NEWUSER");
  const profileNameStepContent = (
    <ProfileNameStepContent
      name={newUser.name}
      setName={(name: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, name }))
      }
    />
  );
  const roleStepContent = (
    <RoleStepContent
      role={newUser.role}
      setRole={(role: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, role }))
      }
      description={newUser.description}
      setDescription={(description: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, description }))
      }
    />
  );
  const socialLinksStepContent = (
    <SocialLinksStepContent
      githubLink={newUser.githubLink}
      setGithubLink={(githubLink: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, githubLink }))
      }
      linkedinLink={newUser.linkedinLink}
      setLinkedinLink={(linkedinLink: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, linkedinLink }))
      }
    />
  );
  const favouriteCardsStepContent = (
    <FavouriteCardsStepContent
      position={newUser.position}
      setPosition={(position: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, position }))
      }
      jobTitle={newUser.job.title}
      setJobTitle={(title: string) =>
        setNewUser((prev: typeof newUser) => ({
          ...prev,
          job: { ...prev.job, title },
        }))
      }
      setJobImage={(image: string) =>
        setNewUser((prev: typeof newUser) => ({
          ...prev,
          job: { ...prev.job, image },
        }))
      }
      sideProjectTitle={newUser.sideProject.title}
      setSideProjectTitle={(title: string) =>
        setNewUser((prev: typeof newUser) => ({
          ...prev,
          sideProject: { ...prev.sideProject, title },
        }))
      }
      setSideProjectImage={(image: string) =>
        setNewUser((prev: typeof newUser) => ({
          ...prev,
          sideProject: { ...prev.sideProject, image },
        }))
      }
      experience={newUser.experience}
      setExperience={(experience: string) =>
        setNewUser((prev: typeof newUser) => ({ ...prev, experience }))
      }
    />
  );
  const aboutMeStepContent = (
    <AboutMeStepContent
      aboutMe={newUser.consoleData.aboutMe}
      setAboutMe={(aboutMe: string) =>
        setNewUser((prev: typeof newUser) => ({
          ...prev,
          consoleData: { ...prev.consoleData, aboutMe },
        }))
      }
    />
  );
  const techStackStepContent = (
    <TechStackStepContent
      techInputs={newUser.consoleData.techStack}
      setTechInputs={(value) =>
        setNewUser((prev) => ({
          ...prev,
          consoleData: {
            ...prev.consoleData,
            techStack:
              typeof value === "function"
                ? value(prev.consoleData.techStack)
                : value,
          },
        }))
      }
    />
  );
  const hobbiesStepContent = (
    <HobbiesStepContent
      hobbyInputs={newUser.consoleData.hobbies}
      setHobbyInputs={(value) =>
        setNewUser((prev) => ({
          ...prev,
          consoleData: {
            ...prev.consoleData,
            hobbies:
              typeof value === "function"
                ? value(prev.consoleData.hobbies)
                : value,
          },
        }))
      }
    />
  );
  const softSkillsStepContent = (
    <SoftSkillsStepContent
      softSkillInputs={newUser.consoleData.softSkills}
      setSoftSkillInputs={(value) =>
        setNewUser((prev) => ({
          ...prev,
          consoleData: {
            ...prev.consoleData,
            softSkills:
              typeof value === "function"
                ? value(prev.consoleData.softSkills)
                : value,
          },
        }))
      }
    />
  );

  const setUser = useAppStore((state) => state.setUser);

  const handleJoyrideCallback = (data: CallBackProps) => {
    if (data.status === "finished") {
      const userData = userAdapter(newUser);
      console.log(userData, "USERDATA");
      setUser(userData);
      setRun(false);
    }
    if (data.action === "close") {
      setRun(false);
    }
    if (data.status === "skipped") {
      setRun(false);
    }
  };

  const stepsWithDynamicInputs = minitourSteps?.map((step) => {
    if (step.target === "#profile-name-h1") {
      return { ...step, content: profileNameStepContent };
    }
    if (step.target === "#profile-role") {
      return { ...step, content: roleStepContent };
    }
    if (step.target === "#profile-social-icons") {
      return { ...step, content: socialLinksStepContent };
    }
    if (step.target === "#profile-cards-area") {
      return { ...step, content: favouriteCardsStepContent };
    }
    if (step.target === "#aboutMe-btn") {
      return { ...step, content: aboutMeStepContent };
    }
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
