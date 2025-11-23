import { ProjectHeaderInfoProps } from "../../types";

const ProjectHeaderInfo = ({ eventName, shortDescription, projectTag }: ProjectHeaderInfoProps) => {
  return (
    <>
      <h1 className="mt-[60px] gradient-text text-[33px]">{eventName}</h1>
      <h2
        className="mt-[15px] font-light text-white text-[19px]"
        style={{
          color: "white",
          fontWeight: 500,
        }}
      >
        {shortDescription}
      </h2>
      <h3 className="mt-[10px] text-[15px]">{projectTag}</h3>
    </>
  );
};

export default ProjectHeaderInfo;
