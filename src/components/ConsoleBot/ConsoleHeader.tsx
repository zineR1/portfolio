import gitbash from "../../assets/gitbash.webp";
import styles from "../../shared/ConsoleBot/ConsoleBot.module.css";

const ConsoleHeader = () => {
  return (
    <div className={styles.top}>
      <div className={styles.gitbash}>
        <img
          src={gitbash}
          alt="git"
          height={18}
          width={17}
          loading="lazy"
        />
      </div>
      <p>BotConsole:/c/Users/Recruiter/Desktop</p>
    </div>
  );
};

export default ConsoleHeader;
