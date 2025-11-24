import { Loader } from "../shared";
import { useAppStore } from "../store";
import { useEffect } from "react";
import {
  ProjectHeaderInfo,
  ProjectContentInfo,
  ProjectVideo,
} from "../components";

const Projects = () => {
  const { user, isLoading, setLoading } = useAppStore();
  const { projects } = user;

  useEffect(() => {
    if (!projects?.some((project) => project.youtubeLink)) {
      setLoading(false);
    } else {
      setLoading(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Loader />}
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
