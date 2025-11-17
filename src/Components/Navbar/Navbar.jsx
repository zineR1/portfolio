import styles from "./Navbar.module.css";
import Casa from "../../assets/casa2.png";
import Projects from "../../assets/layer1.png";
import Timeline from "../../assets/timeline.png";
import Resume from "../../assets/resume.png";

const Navbar = ({setPanelActive, panelActive}) => {

  const clickHandler = (e) => {
    setPanelActive({ [e]: true });
  };

  return (
    <div className={styles.div_gral}>
    <div className={styles.container}>
    <button
            className={`${styles.btn} ${panelActive.home && styles.active}`}
            type="submit"
            id="home"
            onClick={(e) => clickHandler(e.target.id)}
          >
      <img src={Casa} alt="home" height="28px" width="28px"/>
      <p>Home</p>
      </button>
      </div>
    <div className={styles.container}>
    <button
            className={`${styles.btn} ${panelActive.projects && styles.active}`}
            type="submit"
            id="projects"
            onClick={(e) => clickHandler(e.target.id)}
          >
      <img src={Projects} alt="projects" height="28px" width="28px"/>
        <p>Projects</p>
        </button>
      </div>
    <div className={styles.container}>
    <button
            className={`${styles.btn} ${panelActive.timeline && styles.active}`}
            type="submit"
            id="timeline"
            onClick={(e) => clickHandler(e.target.id)}
          >
       <img src={Timeline} alt="timeline" height="28px" width="28px"/>
           <p>Contact</p>
           </button>
      </div>
    <div className={styles.container}>
    <button
            className={`${styles.btn} ${panelActive.resume && styles.active}`}
            type="submit"
            id="resume"
            onClick={(e) => clickHandler(e.target.id)}
          >
       <img src={Resume} alt="resume" height="28px" width="25px"/>
           <p>Resume</p>
           </button>
      </div>
    </div>
  )
}

export default Navbar