import React from "react";

interface Props {
  name: string;
  setName: (value: string) => void;
}

const ProfileNameStepContent: React.FC<Props> = ({ name, setName }) => {
  const inputStyle =
    "my-[8px] w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[#181818]";

  const firstName = name.split(" ")[0] || "";
  const lastName = name.split(" ")[1] || "";

  return (
    <div>
      <h2 className="text-white text-[20px] font-[500] mb-[30px]">
        Please enter your full name
      </h2>

      <label htmlFor="first-name-input" className="sr-only">
        First name
      </label>
      <input
        id="first-name-input"
        type="text"
        placeholder="First name"
        value={firstName}
        maxLength={20}
        onChange={(e) => setName(`${e.target.value} ${lastName}`.trim())}
        className={inputStyle}
      />

      <label htmlFor="last-name-input" className="sr-only">
        Last name
      </label>
      <input
        id="last-name-input"
        type="text"
        placeholder="Last name"
        value={lastName}
        maxLength={20}
        onChange={(e) => setName(`${firstName} ${e.target.value}`.trim())}
        className={inputStyle}
      />
    </div>
  );
};

export default ProfileNameStepContent;
