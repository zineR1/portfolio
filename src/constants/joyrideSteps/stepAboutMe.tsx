import { Step } from "react-joyride";

export const stepAboutMe: Step = {
  target: "#aboutMe-btn",
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
        About Me
      </h2>
      <textarea
        placeholder="About me"
        style={{
          marginBottom: 16,
          width: "calc(100% - 20px)",
          minWidth: "320px",
          maxWidth: "360px",
          marginLeft: 10,
          marginRight: 10,
          minHeight: 100,
          fontSize: 14,
          outline: "none",
          border: "none",
          backgroundColor: "rgb(173, 173, 173)",
          borderRadius: 10,
          boxShadow: "0 8px 16px rgba(56,56,56,0.493)",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 8,
          color: "#181818",
          boxSizing: "border-box",
          resize: "none",
        }}
      />
    </div>
  ),
  placement: "top",
};