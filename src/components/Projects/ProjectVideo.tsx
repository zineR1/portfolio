import { ProjectVideoProps } from "../../types";
import { useAppStore } from "../../store";

const ProjectVideo = ({ project }: ProjectVideoProps) => {
  const { setLoading } = useAppStore();
  return (
    <div
      className={`$
        project.isMobileFormatVideo
          ? "w-full max-w-[350px] aspect-[9/16] mx-auto min-h-[330px]"
          : "w-full max-w-[560px] aspect-video mx-auto min-h-[330px]"
      } relative flex items-center justify-center`}
    >
      <iframe
        className={`rounded-[10px] w-full border-none ${
          project.isMobileFormatVideo ? "h-full" : "h-[330px]"
        }`}
        src={project.youtubeLink}
        title={`${project?.name} demo video`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoading(false)}
        style={{ minHeight: project?.isMobileFormatVideo ? "350px" : "330px" }}
      ></iframe>
    </div>
  );
};

export default ProjectVideo;
