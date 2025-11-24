import { Step } from "react-joyride";

export const stepRole: Step = {
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
};