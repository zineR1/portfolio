import styles from "./Header.module.css";
import Logo from "../../assets/ziner1.png";
import GithubIcon from "../../assets/github.png";
import LinkedinIcon from "../../assets/linkedin.png";
import { usePortfolioStore } from "../../store/usePortfolioStore";

const Header = () => {
  const { data } = usePortfolioStore();

  const handleSelectLanguage = (e) => {
    // dispatch(filterCreated(e.target.value)) // por ahora queda comentado
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <img
          className={styles.imagelogo}
          src={Logo}
          alt="logo"
          height="30px"
          width="135px"
        />
        <div className={styles.rs}>
          <select
            className={styles.select}
            onChange={handleSelectLanguage}
          >
            <option className={styles.option} value="en">
              English
            </option>
            <option className={styles.option} value="es">
              Español (coming soon)
            </option>
          </select>

          <div className={styles.rs_circle}>
            {data?.githubLink && (
              <a href={data?.githubLink} target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="github" height="30px" width="30px" />
              </a>
            )}
            {data?.linkedinLink && (
              <a href={data.linkedinLink} target="_blank" rel="noreferrer">
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  height="30px"
                  width="30px"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
