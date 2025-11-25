import { Step } from "react-joyride";

export const stepAboutMe: Step = {
  target: "#aboutMe-btn",
  content: null,
  placement: "top",
};

export const stepTechStack: Step = {
  target: "#techStack-btn",
  content: null,
  placement: "top",
};

export const stepSoftSkills: Step = {
  target: "#softSkills-btn",
  content: null,
  placement: "top",
};

export const stepSocialLinks: Step = {
  target: "#profile-social-icons",
  content: null,
  placement: "bottom",
};

export const stepRole: Step = {
  target: "#profile-role",
  content: null,
  placement: "bottom",
};

export const stepProfileName: Step = {
  target: "#profile-name-h1",
  content: null,
  placement: "bottom",
  disableBeacon: true,
};

export const stepFavouriteCards: Step = {
  target: "#profile-cards-area",
  content: null,
  placement: "left",
};

export const stepHobbies: Step = {
  target: "#hobbies-btn",
  content: null,
  placement: "top",
};

export const minitourSteps: Step[] = [
  stepProfileName,
  stepSocialLinks,
  stepRole,
  stepFavouriteCards,
  stepAboutMe,
  stepTechStack,
  stepHobbies,
  stepSoftSkills,
];

export const minitourButtonsName = {
  last: "Create portfolio",
  next: "Next step",
  back: "Back",
  close: "Close",
};

export const minitourStyles = {
    optionsStyle: {
    zIndex: 10000,
    backgroundColor: "#181818",
    textColor: "#fff",
  },
  tooltipStyle: {
    backgroundColor: "#181818",
    color: "#fff",
    borderRadius: "10px",
    paddingTop: "32px",
    paddingBottom: "32px",
    width: "360px",
    minWidth: "360px",
    maxWidth: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as React.CSSProperties,
  buttonNextStyle: {
    backgroundColor: "#8207A3",
    width: "150px",
    height: "35px",
    color: "#fff",
    fontSize: "14px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "5px",
    marginLeft: "8px",
    marginRight: "8px",
    display: "inline-block",
  } as React.CSSProperties,
  buttonBackStyle: {
    color: "#fff",
    borderRadius: "5px",
    backgroundColor: "black",
    width: "150px",
    height: "38px",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "5px",
    marginLeft: "8px",
    marginRight: "8px",
    display: "inline-block",
  } as React.CSSProperties,
  buttonCloseStyle: {
    color: "#fff",
    background: "none",
    fontSize: "24px",
    position: "absolute",
    top: "12px",
    right: "12px",
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties,
};
