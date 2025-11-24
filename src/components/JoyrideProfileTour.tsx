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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
          }}
        />
      </div>
    ),
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: "#profile-social-icons",
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
          Add your GitHub & LinkedIn links
        </h2>
        <input
          type="text"
          placeholder="GitHub link (optional)"
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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
          }}
        />
        <input
          type="text"
          placeholder="LinkedIn link (optional)"
          style={{
            width: "100%",
            height: 45,
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "rgb(173, 173, 173)",
            borderRadius: 10,
            boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
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
        <h2
          style={{
            color: "white",
            fontSize: 20,
            marginBottom: 30,
            fontWeight: "500",
          }}
        >
          What is your role?
        </h2>
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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
          }}
        />
        <input
          type="text"
          placeholder="Role description (optional)"
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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
          }}
        />
      </div>
    ),
    placement: "bottom",
  },
  {
    target: "#profile-cards-area",
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
          Share your professional highlights
        </h2>
        <input
          type="text"
          placeholder="Main area (e.g. Frontend, UX/UI, Data Science)"
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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
        >
          <input
            type="text"
            placeholder="Current company name"
            style={{
              width: "100%",
              height: 45,
              fontSize: 14,
              outline: "none",
              border: "none",
              backgroundColor: "rgb(173, 173, 173)",
              borderRadius: 10,
              boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
              paddingLeft: 10,
              paddingRight: 10,
              color: "#181818",
              boxSizing: "border-box",
            }}
          />
            <label htmlFor="company-logo-upload" style={{ marginLeft: 8, cursor: 'pointer', height: 45, display: 'flex', alignItems: 'center' }}>
              <span style={{ background: '#8207A3', color: '#fff', borderRadius: 5, padding: '0 18px', fontSize: 15, height: 45, lineHeight: '45px', display: 'inline-block', boxSizing: 'border-box', fontWeight: 500 }}>Upload</span>
              <input id="company-logo-upload" type="file" accept="image/*" style={{ display: 'none' }} />
            </label>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
        >
          <input
            type="text"
            placeholder="Side project name (optional)"
            style={{
              width: "100%",
              height: 45,
              fontSize: 14,
              outline: "none",
              border: "none",
              backgroundColor: "rgb(173, 173, 173)",
              borderRadius: 10,
              boxShadow: "0 8px 16px rgba(56, 56, 56, 0.493)",
              paddingLeft: 10,
              paddingRight: 10,
              color: "#181818",
              boxSizing: "border-box",
            }}
          />
            <label htmlFor="sideproject-logo-upload" style={{ marginLeft: 8, cursor: 'pointer', height: 45, display: 'flex', alignItems: 'center' }}>
              <span style={{ background: '#8207A3', color: '#fff', borderRadius: 5, padding: '0 18px', fontSize: 15, height: 45, lineHeight: '45px', display: 'inline-block', boxSizing: 'border-box', fontWeight: 500 }}>Upload</span>
              <input id="sideproject-logo-upload" type="file" accept="image/*" style={{ display: 'none' }} />
            </label>
        </div>
        <input
          type="number"
          min={0}
          placeholder="Years of experience"
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
            paddingLeft: 10,
            paddingRight: 10,
            color: "#181818",
            boxSizing: "border-box",
          }}
        />
      </div>
    ),
    placement: "left",
  },
];

interface JoyrideProfileTourProps {
  run: boolean;
  setRun: (run: boolean) => void;
}

const JoyrideProfileTour = ({ run, setRun }: JoyrideProfileTourProps) => {
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
          paddingTop: "32px",
          paddingBottom: "32px",
          width: "360px",
          minWidth: "360px",
          maxWidth: "360px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        buttonNext: {
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
        },
        buttonBack: {
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
