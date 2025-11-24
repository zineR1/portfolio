import { Step } from "react-joyride";

export const stepFavouriteCards: Step = {
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
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
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
        <label
          htmlFor="company-logo-upload"
          style={{
            marginLeft: 8,
            cursor: "pointer",
            height: 45,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#8207A3",
              color: "#fff",
              borderRadius: 5,
              padding: "0 18px",
              fontSize: 15,
              height: 45,
              lineHeight: "45px",
              display: "inline-block",
              boxSizing: "border-box",
              fontWeight: 500,
            }}
          >
            Upload
          </span>
          <input
            id="company-logo-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
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
        <label
          htmlFor="sideproject-logo-upload"
          style={{
            marginLeft: 8,
            cursor: "pointer",
            height: 45,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#8207A3",
              color: "#fff",
              borderRadius: 5,
              padding: "0 18px",
              fontSize: 15,
              height: 45,
              lineHeight: "45px",
              display: "inline-block",
              boxSizing: "border-box",
              fontWeight: 500,
            }}
          >
            Upload
          </span>
          <input
            id="sideproject-logo-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
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
};