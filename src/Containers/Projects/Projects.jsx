import { usePortfolioStore } from "../../store/usePortfolioStore";
import styles from "./Projects.module.css";
import Github from "../../assets/github.png";
import Api from "../../assets/browser.png";

const Projects = () => {
  const { data } = usePortfolioStore();
  const { projects } = data;

  return (
    <div className={styles.gral}>
      {projects?.map((project, index) => (
        <div key={index}>
          <h2>{project?.name}</h2>
          <h3>{project?.shortDescription}</h3>
          <div className={styles.videos_div}>
            <div className={styles.videos}>
              {project?.youtubeLink && (
                <iframe
                  width="560"
                  height="315"
                  src={project.youtubeLink}
                  title={`${project?.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

              <div className={styles.description_div}>
                <div className={styles.tech1}>
                  <h3>{project?.techStack}</h3>
                </div>
                <div className={styles.description}>
                  <h3>{project?.longDescription}</h3>
                </div>
                <div className={styles.rs_circle}>
                  {project?.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} alt="github" height="30px" width="30px" />
                    </a>
                  )}
                  {project?.liveLink && (
                    <a
                      href={project?.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Api} alt="live link" height="30px" width="30px" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;