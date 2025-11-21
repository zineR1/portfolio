import { usePortfolioStore } from "../store/usePortfolioStore";
import { EventHeaderInfo, EventContentInfo } from "../components";
import { useGetDeviceType } from "../hooks";

const Projects = () => {
  const { data } = usePortfolioStore();
  const { projects } = data;

  return (
    <>
      {projects?.map((project, index) => (
        <div key={index}>
          <EventHeaderInfo
            eventName={project?.name}
            shortDescription={project?.shortDescription}
            projectTag={project?.projectTag}
          />
          <div
            className={
              "flex flex-col gap-[20px] py-[30px] m-[40px_20px] items-center bg-[#181818] border border-[rgb(173,173,173)] rounded-[10px] w-[50%] mx-auto justify-center"
            }
          >
            {project?.youtubeLink && (
              <div
                className={
                  project.isMobileFormatVideo
                    ? "w-full max-w-[350px] aspect-[9/16] mx-auto"
                    : "w-full max-w-[560px] aspect-video mx-auto"
                }
              >
                <iframe
                  className={`rounded-[10px] w-full ${
                    project.isMobileFormatVideo ? "h-full" : "h-[330px]"
                  }`}
                  src={project.youtubeLink}
                  title={`${project?.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <EventContentInfo
              techStack={project?.techStack}
              longDescription={project?.longDescription}
              githubLink={project?.githubLink}
              liveLink={project?.liveLink}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
