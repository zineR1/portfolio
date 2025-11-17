import { useState } from "react";
import styles from "./ConsoleBot.module.css";
import gitbash from "../../assets/gitbash.png";
import TextConsole from "./TextConsole";
import { usePortfolioStore } from "../../store/usePortfolioStore";

const ConsoleBot = () => {
  const { data } = usePortfolioStore();
  const [about, setAbout] = useState(false);
  const [loadAbout, setLoadAbout] = useState(false);
  const [goals, setGoals] = useState(false);
  const [loadGoals, setLoadGoals] = useState(false);
  const [location, setLocation] = useState(false);
  const [loadLocation, setLoadLocation] = useState(false);
  const [soft, setSoft] = useState(false);
  const [loadSoft, setLoadSoft] = useState(false);
  const [activeButtonAbout, setActiveButtonAbout] = useState(false);
  const [activeButtonGoals, setActiveButtonGoals] = useState(false);
  const [activeButtonLocation, setActiveButtonLocation] = useState(false);
  const [activeButtonSoft, setActiveButtonSoft] = useState(false);

  const handleAbout = (e) => {
    setAbout(true);
    setTimeout(() => {
      setLoadAbout(true);
    }, 1350);
    setActiveButtonAbout(true);
  };

  const handleGoals = (e) => {
    setGoals(true);
    setTimeout(() => {
      setLoadGoals(true);
    }, 1350);
    setActiveButtonGoals(true);
  };

  const handleLocation = (e) => {
    setLocation(true);
    setTimeout(() => {
      setLoadLocation(true);
    }, 1350);
    setActiveButtonLocation(true);
  };
  const handleSoft = (e) => {
    setSoft(true);
    setTimeout(() => {
      setLoadSoft(true);
    }, 1350);
    setActiveButtonSoft(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.gral}>
        <div className={styles.top}>
          <div className={styles.gitbash}>
            <img src={gitbash} alt="git" height="18px" width="17px" />
          </div>
          <p>BotConsole:/c/Users/Recruiter/Desktop</p>
        </div>
        <div className={styles.console_titles}>
          <div className={styles.title1}>
            <h3>Recruiter@DESKTOP-9UT4PCT</h3>
          </div>
          <div className={styles.title2}>
            <h3>BOTCONSOLE</h3>
          </div>
          <div className={styles.title3}>
            <h3>~/Portfolio</h3>
          </div>
        </div>

        <p>$ intro</p>
        <p>
          Welcome to my portfolio! My name is Agustin. I developed this simple
          bot to let you know a bit more about me. Click one of the buttons and
          see the magic.
        </p>

        <div className={styles.console_titles}>
          <div className={styles.title1}>
            <h3>Recruiter@DESKTOP-9UT4PCT</h3>
          </div>
          <div className={styles.title2}>
            <h3>BOTCONSOLE</h3>
          </div>
          <div className={styles.title3}>
            <h3>~/Portfolio</h3>
          </div>
        </div>
        <div className={styles.write}>
          <p>$</p>
          {/* ABOUT */}
          <div>
            <div className={styles.intro}>
              {about && (
                <p className={styles.writemachine1}>
                  about<span>&#160;</span>
                </p>
              )}
            </div>
            <div className={styles.intro}>
              {loadAbout && about && <p>{data?.consoleData?.aboutMe}</p>}
            </div>
            <div className={styles.textconsole}>
              {loadAbout && about && <TextConsole />}
              <div className={styles.bar}>
                {loadAbout && about && !goals && !location && !soft && <p>$</p>}
                {loadAbout && about && !goals && !location && !soft && (
                  <p className={styles.text1}>|</p>
                )}
              </div>
            </div>

            {/* GOALS */}
            <div>
              <div className={styles.intro}>
                {goals && (
                  <p className={styles.writemachine}>
                    $ techStack<span>&#160;</span>
                  </p>
                )}
              </div>
              <div className={styles.intro}>
                {loadGoals && goals && (
                  <p>
                    {data?.consoleData?.techStack}
                  </p>
                )}
              </div>
              <div className={styles.textconsole}>
                {loadGoals && goals && <TextConsole />}
                <div className={styles.bar}>
                  {loadGoals && goals && !location && !soft && <p>$</p>}
                  {loadGoals && goals && !location && !soft && (
                    <p className={styles.text1}>|</p>
                  )}
                </div>
              </div>
            </div>
            {/* LOCATION */}
            <div>
              <div className={styles.intro}>
                {location && (
                  <p className={styles.writemachine}>
                    $ location<span>&#160;</span>
                  </p>
                )}
              </div>
              <div className={styles.intro}>
                {loadLocation && location && (
                  <p>
                   {data?.consoleData?.location}
                  </p>
                )}
              </div>
              <div className={styles.textconsole}>
                {loadLocation && location && <TextConsole />}
                <div className={styles.bar}>
                  {loadLocation && location && !soft && <p>$</p>}
                  {loadLocation && location && !soft && (
                    <p className={styles.text1}>|</p>
                  )}
                </div>
              </div>
            </div>
            {/* SOFT SKILLS */}
            <div>
              <div className={styles.intro}>
                {soft && (
                  <p className={styles.writemachine}>
                    $ softSkills<span>&#160;</span>
                  </p>
                )}
              </div>
              <div className={styles.intro}>
                {loadSoft && soft && (
                  <p>
                    {data?.consoleData?.softSkills}
                  </p>
                )}
              </div>
              <div className={styles.textconsole}>
                {loadSoft && soft && <TextConsole />}
                <div className={styles.bar}>
                  {loadSoft && soft && <p>$</p>}
                  {loadSoft && soft && <p className={styles.text1}>|</p>}
                </div>
              </div>
            </div>
            {!about && !goals && !location && !soft && (
              <p className={styles.text1}>|</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleAbout} disabled={activeButtonAbout}>
          About Me
        </button>
        <button onClick={handleGoals} disabled={activeButtonGoals}>
          Tech Stack
        </button>
        <button onClick={handleLocation} disabled={activeButtonLocation}>
          Location
        </button>
        <button onClick={handleSoft} disabled={activeButtonSoft}>
          Soft Skills
        </button>
      </div>
    </div>
  );
};

export default ConsoleBot;
