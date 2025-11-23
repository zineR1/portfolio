import githubIcon from "../../assets/github.png";
import webIcon from "../../assets/webLink.png";
import { ProjectContentInfoProps } from "../../types";

const ProjectContentInfo = ({
  techStack,
  longDescription,
  githubLink,
  liveLink,
  highlights,
}: ProjectContentInfoProps) => {
  return (
    <>
      <h2 className="text-[18px] text-[white] mb-[10px]">Techstack</h2>
      <div
        className={
          "bg-[var(--color-bg-black)] flex items-center p-[15px] min-h-[60px] max-w-[560px] rounded-[10px]"
        }
      >
        <h3 className="text-[14px]">
          {Array.isArray(techStack)
            ? techStack.map((tech, idx) => (
                <span key={idx}>
                  {tech}
                  {idx < techStack.length - 1 && " - "}
                </span>
              ))
            : techStack}
        </h3>
      </div>
      <h2 className="text-[18px] text-[white] mb-[10px]">Description</h2>
      <div
        className={
          "flex my-auto bg-[black] p-[20px] max-w-[560px] rounded-[10px]"
        }
      >
        <h3 className="text-[15px] text-[white]">{longDescription}</h3>
      </div>
      {highlights && (
        <div className={"mt-[15px]"}>
          <h2 className="text-[18px] text-[white] mb-[30px]">Highlights</h2>
          <div className="bg-[var(--color-bg-black)] mx-[20px] p-[15px] rounded-[10px]">
            {highlights?.details?.map((item, index) => (
              <div key={index} className="mb-[8px]">
                <h3 className="text-[15px] text-[white]">• {item}</h3>
              </div>
            ))}
          </div>
          {highlights.pictures && (
            <div className="flex flex-row justify-center items-center gap-[55px] flex-wrap mt-[20px]">
              {highlights?.pictures?.map((pic, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center mt-[10px] gap-[10px]"
                >
                  <img
                    src={pic.url}
                    alt={pic.description}
                    className="rounded-[10px] max-w-[560px] max-h-[300px]"
                  />
                  <span className="text-[13px] text-[white] mt-[5px] text-center max-w-[200px]">
                    {pic.description}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
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
              src={webIcon}
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
