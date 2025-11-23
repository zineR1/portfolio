import githubIcon from "../../assets/github.png";
import apiIcon from "../../assets/browser.png";
import { ProjectContentInfoProps } from "../../types";

const ProjectContentInfo = ({
  techStack,
  longDescription,
  githubLink,
  liveLink,
}: ProjectContentInfoProps) => {
  return (
    <>
      <div
        className={
          "bg-[var(--color-bg-black)] flex items-center p-[15px] min-h-[60px] max-w-[560px] rounded-[10px]"
        }
      >
        <h3 className="text-[14px]">{techStack}</h3>
      </div>
      <div
        className={
          "flex my-auto bg-[black] p-[20px] max-w-[560px] rounded-[10px]"
        }
      >
        <h3 className="text-[15px] text-[white]">{longDescription}</h3>
      </div>
      <div className={"mt-[15px]"}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              alt="github"
              className="mx-[20px] h-[30px] w-[30px]"
            />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer">
            <img
              src={apiIcon}
              alt="live link"
              className="mx-[20px] h-[30px] w-[30px]"
            />
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectContentInfo;
