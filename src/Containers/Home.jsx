import React from "react";
import styles from "./Home.module.css";
import {Header, Navbar, Man, Technologies, TopHeader} from "../Components";
import {Projects, Contact, Resume} from "../Containers";

export default function Home() {

  const [panelActive, setPanelActive] = React.useState({
    home: true,
    projects: false,
    timeline: false,
    resume: false,
  });


  return (
    <div className={styles.main1}>
      <TopHeader/>
      <Header />
      <div className={styles.div_Navbar}>
      <Navbar setPanelActive={setPanelActive} panelActive={panelActive}/>
      <section>
          {panelActive.home &&  <Man/>}
          {panelActive.projects && <Projects/>}
          {panelActive.timeline && <Contact/>}
          {panelActive.resume && <Resume/>}
        </section>
      </div>
      <div>
          <Technologies/>
      </div>
    </div>
  );
}
