import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import { User } from "../types";
import { useAppStore } from "../store";

const SocialLinks = () => {
  const { user } = useAppStore() as { user: User };
  
  return (
    <div className={'flex flex-row items-center gap-[15px]'}>
      {user?.githubLink && (
        <a href={user?.githubLink} target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="github" height="30px" width="30px" />
        </a>
      )}
      {user?.linkedinLink && (
        <a href={user.linkedinLink} target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="linkedin" height="30px" width="30px" />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
