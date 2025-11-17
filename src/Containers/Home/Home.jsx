import React from "react";
import styles from "./Home.module.css";
import {
  Header,
  Navbar,
  PersonCard,
  Technologies,
  TopHeader,
  ConsoleBot,
} from "../../Components";
import { Projects, Contact, Resume } from "..";

const Home = () => {
  const [panelActive, setPanelActive] = React.useState({
    home: true,
    projects: false,
    timeline: false,
    resume: false,
  });

  return (
    <div className={styles.main1}>
      <TopHeader />
      <Header />
      <div className={styles.div_Navbar}>
        <Navbar setPanelActive={setPanelActive} panelActive={panelActive} />
        <section>
          {panelActive.home && <PersonCard />}
          {panelActive.projects && <Projects />}
          {panelActive.timeline && <Contact />}
          {panelActive.resume && <Resume />}
        </section>
      </div>
      <div className={styles.consoleContainer}>
        <h2>About me</h2>
        <ConsoleBot />
      </div>
      <div>
        <Technologies />
      </div>
    </div>
  );
};

export default Home;
