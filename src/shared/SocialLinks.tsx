import githubIcon from "../assets/github.webp";
import linkedinIcon from "../assets/linkedin.webp";
import { User } from "../types";
import { useAppStore } from "../store";

const SocialLinks = () => {
  const { user } = useAppStore() as { user: User };

  return (
    <div className={"flex flex-row items-center gap-[15px]"}>
      {user?.githubLink && (
        <a
          href={user?.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
        >
          <img
            src={githubIcon}
            alt="GitHub icon"
            height={30}
            width={30}
            loading="lazy"
          />
        </a>
      )}
      {user?.linkedinLink && (
        <a
          href={user.linkedinLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            height={30}
            width={30}
            loading="lazy"
          />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
