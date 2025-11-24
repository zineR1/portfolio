import React from "react";
import { HobbiesStepContentProps } from "../../types";

const HobbiesStepContent: React.FC<HobbiesStepContentProps> = ({ hobbyInputs, setHobbyInputs }) => {
  return (
    <>
      <div className={"flex flex-row items-center gap-[10px]"}>
        <h2 className={"text-[white] text-[20px] font-[500]"}>
          Add your Hobbies
        </h2>
        <button
          type="button"
          style={{
            height: 32,
            background: hobbyInputs.length >= 2 ? "#aaa" : "#8207A3",
            color: "#fff",
            borderRadius: 7,
            border: "none",
            fontWeight: 500,
            fontSize: 14,
            padding: "0 14px",
            cursor: hobbyInputs.length >= 2 ? "not-allowed" : "pointer",
          }}
          disabled={hobbyInputs.length >= 2}
          onClick={() => {
            if (hobbyInputs.length < 2) setHobbyInputs([...hobbyInputs, ""]);
          }}
        >
          Add more
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {hobbyInputs.map((_, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={`Hobby ${idx + 1}`}
            style={{
              width: "100%",
              height: 45,
              fontSize: 14,
              outline: "none",
              border: "none",
              backgroundColor: "rgb(173, 173, 173)",
              borderRadius: 10,
              boxShadow: "0 8px 16px rgba(56,56,56,0.493)",
              paddingLeft: 10,
              paddingRight: 10,
              color: "#181818",
              boxSizing: "border-box",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HobbiesStepContent;
