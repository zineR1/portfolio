import React from "react";

interface Props {
  aboutMe: string;
  setAboutMe: (value: string) => void;
}

const AboutMeStepContent: React.FC<Props> = ({ aboutMe, setAboutMe }) => (
  <>
    <h2 className="text-white text-[20px] font-[500] mb-[30px]">About Me</h2>
    <textarea
      placeholder="About me"
      value={aboutMe}
      onChange={(e) => setAboutMe(e.target.value)}
      className="w-[300px] min-h-[100px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] py-[10px] box-border text-[#181818] resize-none"
      maxLength={300}
    />
  </>
);

export default AboutMeStepContent;
