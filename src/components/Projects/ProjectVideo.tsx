import { ProjectVideoProps } from "../../types";

const ProjectVideo = ({ project }: ProjectVideoProps) => {
  return (
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
  );
};

export default ProjectVideo;
