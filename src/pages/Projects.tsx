import {
  ProjectHeaderInfo,
  ProjectContentInfo,
  ProjectVideo,
} from "../components";
import { useAppStore } from "../store";

const Projects = () => {
  const { user } = useAppStore();
  const { projects } = user;

  return (
    <>
      {projects?.map((project, index) => (
        <div key={index}>
          <ProjectHeaderInfo
            eventName={project?.name}
            shortDescription={project?.shortDescription}
            projectTag={project?.projectTag}
          />
          <div
            className={
              "flex flex-col gap-[20px] py-[30px] m-[40px_20px] items-center bg-[#181818] rounded-[10px] w-[50%] mx-auto justify-center"
            }
          >
            {project?.youtubeLink && <ProjectVideo project={project} />}
            <ProjectContentInfo
              techStack={project?.techStack}
              longDescription={project?.longDescription}
              githubLink={project?.githubLink}
              liveLink={project?.liveLink}
              highlights={project?.highlights}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
