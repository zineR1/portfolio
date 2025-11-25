import React from "react";

interface Props {
  githubLink: string;
  setGithubLink: (value: string) => void;
  linkedinLink: string;
  setLinkedinLink: (value: string) => void;
}

const SocialLinksStepContent: React.FC<Props> = ({
  githubLink,
  setGithubLink,
  linkedinLink,
  setLinkedinLink,
}) => {
  const inputStyle =
    "my-[8px] w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[#181818]";
  return (
    <div>
      <h2 className="text-white text-[20px] font-[500] mb-[30px]">
        Add your GitHub & LinkedIn links
      </h2>
      <input
        type="text"
        placeholder="GitHub link (optional)"
        value={githubLink}
        maxLength={120}
        onChange={(e) => setGithubLink(e.target.value)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="LinkedIn link (optional)"
        value={linkedinLink}
        maxLength={120}
        onChange={(e) => setLinkedinLink(e.target.value)}
        className={inputStyle}
      />
    </div>
  );
};

export default SocialLinksStepContent;
