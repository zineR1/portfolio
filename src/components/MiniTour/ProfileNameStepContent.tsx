import React from "react";

interface Props {
  name: string;
  setName: (value: string) => void;
}

const ProfileNameStepContent: React.FC<Props> = ({ name, setName }) => {
  const inputStyle =
    "my-[8px] w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[#181818]";
  return (
    <div>
      <h2 className="text-white text-[20px] font-[500] mb-[30px]">
        Please enter your full name
      </h2>
      <input
        type="text"
        placeholder="First name"
        value={name.split(" ")[0] || ""}
        maxLength={20}
        onChange={(e) => {
          const last = name.split(" ")[1] || "";
          setName(`${e.target.value} ${last}`.trim());
        }}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Last name"
        value={name.split(" ")[1] || ""}
        maxLength={20}
        onChange={(e) => {
          const first = name.split(" ")[0] || "";
          setName(`${first} ${e.target.value}`.trim());
        }}
        className={inputStyle}
      />
    </div>
  );
};

export default ProfileNameStepContent;
