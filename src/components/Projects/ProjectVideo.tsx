import { useState } from "react";
import { ProjectVideoProps } from "../../types";

const ProjectVideo = ({ project }: ProjectVideoProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={
        `${project.isMobileFormatVideo
          ? "w-full max-w-[350px] aspect-[9/16] mx-auto min-h-[330px]"
          : "w-full max-w-[560px] aspect-video mx-auto min-h-[330px]"} relative flex items-center justify-center`
      }
    >
      {loading && (
        <div className="flex items-center justify-center absolute inset-0 bg-white bg-opacity-80 rounded-[10px] z-10 border-2 border-blue-500">
          <div className="flex items-center justify-center h-full w-full">
            <svg className="animate-spin h-16 w-16 text-blue-500 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          </div>
        </div>
      )}
      <iframe
        className={`rounded-[10px] w-full ${
          project.isMobileFormatVideo ? "h-full" : "h-[330px]"
        } ${loading ? "invisible" : "visible"}`}
        src={project.youtubeLink}
        title={`${project?.name} video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoading(false)}
        style={{ minHeight: project.isMobileFormatVideo ? "350px" : "330px" }}
      ></iframe>
    </div>
  );
};

export default ProjectVideo;
