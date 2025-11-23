import gitbash from "../../assets/gitbash.png";
import styles from "../../shared/ConsoleBot/ConsoleBot.module.css";

const ConsoleHeader = () => {
  return (
    <div className={styles.top}>
      <div className={styles.gitbash}>
        <img src={gitbash} alt="git" height="18px" width="17px" />
      </div>
      <p>BotConsole:/c/Users/Recruiter/Desktop</p>
    </div>
  );
};

export default ConsoleHeader;
