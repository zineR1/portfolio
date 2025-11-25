import githubIcon from "../../assets/github.webp";
import webIcon from "../../assets/webLink.webp";
import { ProjectContentInfoProps } from "../../types";

const ProjectContentInfo = ({
  techStack,
  longDescription,
  githubLink,
  liveLink,
  highlights,
}: ProjectContentInfoProps) => {
  console.log(highlights,"highlights");
  console.log(highlights?.pictures[0].url,"url");
    console.log(typeof highlights?.pictures[0].url,"typeof url");

  return (
    <>
      <h2 className="text-[15px] text-[white] lg:text-[18px]">Techstack</h2>
      <div
        className={
          "bg-[var(---color-bg-dark-black)] flex items-center p-[15px] min-h-[60px] max-w-[560px] rounded-[10px]"
        }
      >
        <p className="customCodeText text-[14px]">
          {Array.isArray(techStack)
            ? techStack.map((tech, idx) => (
                <span key={idx}>
                  {tech}
                  {idx < techStack.length - 1 && " - "}
                </span>
              ))
            : techStack}
        </p>
      </div>
      <h2 className="text-[18px] text-[white] mb-[10px]">Description</h2>
      <div
        className={
          "flex my-auto bg-[var(---color-bg-dark-black)] p-[20px] max-w-[560px] rounded-[10px]"
        }
      >
        <p className="text-[16px]/[28px] text-[white] l">{longDescription}</p>
      </div>
      {highlights && (
        <div className={"mt-[15px]"}>
          <h2 className="text-[18px] text-[white] mb-[30px]">Highlights</h2>
          <div className="bg-[var(---color-bg-dark-black)] mx-[20px] p-[25px] rounded-[10px]">
            {highlights?.details?.map((item, index) => (
              <div key={index} className="mb-[30px]">
                <p className="text-[16px] text-[white]">• {item}</p>
              </div>
            ))}
            {highlights?.pictures && (
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
                      loading="lazy"
                    />
                    <span className="text-[13px] text-[white] mt-[5px] text-center max-w-[200px]">
                      {pic.description}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <div className={"flex flex-row items-center justify center mt-[15px]"}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" aria-label="Ver repositorio en GitHub">
            <img
              src={githubIcon}
              alt=""
              aria-hidden="true"
              className="mx-[20px] h-[30px] w-[30px]"
              loading="lazy"
            />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer" aria-label="Ver sitio en vivo">
            <img
              src={webIcon}
              alt=""
              aria-hidden="true"
              className="mx-[20px] h-[30px] w-[30px]"
              loading="lazy"
            />
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectContentInfo;
