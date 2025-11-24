import { useState, useEffect } from "react";
import Joyride, { CallBackProps, Step } from "react-joyride";

const steps: Step[] = [
  {
    target: "#profile-name-h1",
    content: (
      <div>
        <h2
          style={{
            color: "white",
            fontSize: 20,
            marginBottom: 30,
            fontWeight: "500",
          }}
        >
          Please enter your full name
        </h2>
        <input
          type="text"
          placeholder="First name"
          style={{
            marginBottom: 12,
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            padding: "0 10px",
            color: "#181818",
          }}
        />
        <input
          type="text"
          placeholder="Last name"
          style={{
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            padding: "0 10px",
            color: "#181818",
          }}
        />
      </div>
    ),
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: "#profile-links",
    content: (
      <div>
        <h3>Add your GitHub and LinkedIn links</h3>
        <input
          type="text"
          placeholder="GitHub"
          style={{
            marginBottom: 12,
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            padding: "0 10px",
            color: "#181818",
          }}
        />
        <input
          type="text"
          placeholder="LinkedIn"
          style={{
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            padding: "0 10px",
            color: "#181818",
          }}
        />
      </div>
    ),
    placement: "bottom",
  },
  {
    target: "#profile-role",
    content: (
      <div>
        <h3>What is your role?</h3>
        <input
          type="text"
          placeholder="Role"
          style={{
            marginBottom: 12,
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            padding: "0 10px",
            color: "#181818",
          }}
        />
        <input
          type="text"
          placeholder="Role description"
          style={{
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            padding: "0 10px",
            color: "#181818",
          }}
        />
      </div>
    ),
    placement: "bottom",
  },
];

interface JoyrideProfileTourProps {
  run: boolean;
  setRun: (run: boolean) => void;
}

const JoyrideProfileTour = ({ run, setRun }: JoyrideProfileTourProps) => {
  const [stepIndex, setStepIndex] = useState(0);

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

  const handleJoyrideCallback = (data: CallBackProps) => {
    if (typeof data.index === "number") {
      setStepIndex(data.index);
    }
    if (
      data.action === "close" ||
      data.status === "finished" ||
      data.status === "skipped"
    ) {
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      continuous
      callback={handleJoyrideCallback}
      locale={{
        last: "Finish",
        next: "Next step",
        back: "Back",
        close: "Close",
      }}
      styles={{
        options: {
          zIndex: 10000,
          backgroundColor: "#181818",
          textColor: "#fff",
        },
        tooltip: {
          backgroundColor: "#181818",
          color: "#fff",
          borderRadius: "10px",
          padding: "32px",
          minWidth: "320px",
        },
        buttonNext: {
          backgroundColor: "#8207A3",
          width: "160px",
          height: "35px",
          color: "#fff",
          borderRadius: "5px",
          marginTop: "5px",
          border: "none",
          cursor: "pointer",
        },
        buttonBack: {
          backgroundColor: "#181818",
          color: "#fff",
          borderRadius: "5px",
          border: "1px solid #fff",
          marginTop: "5px",
          cursor: "pointer",
        },
        buttonClose: {
          color: "#fff",
          background: "none",
          fontSize: "24px",
          position: "absolute",
          top: "12px",
          right: "12px",
          border: "none",
          cursor: "pointer",
        },
      }}
    />
  );
};

export default JoyrideProfileTour;
