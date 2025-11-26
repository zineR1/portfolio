import { ProjectHeaderInfoProps } from "../../types";

const ProjectHeaderInfo = ({
  eventName,
  shortDescription,
  projectTag,
}: ProjectHeaderInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-[20px]">
      <h1 className="mt-[40px] gradient-text text-[20px] font-[700] lg:text-[33px] lg:mt-[60px]">
        {eventName}
      </h1>
      <h2
        className="mt-[15px] font-light text-white text-[15px] lg:text-[19px]"
        style={{
          color: "white",
          fontWeight: 500,
        }}
      >
        {shortDescription}
      </h2>
      <h3 className="mt-[10px] text-[15px]">{projectTag}</h3>
    </div>
  );
};

export default ProjectHeaderInfo;
