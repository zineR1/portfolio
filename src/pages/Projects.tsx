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
console.log(user,"user data in projects");
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
              "mx-auto py-[30px] m-[40px_20px] flex flex-col justify-center gap-[20px] items-center rounded-[10px] lg:w-[50%] px-[20px] lg:px-[40px]"
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
