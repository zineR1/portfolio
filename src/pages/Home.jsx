import React from "react";
import { PersonCard } from "../components";
import { Header, Navbar, Technologies, TopHeader, ConsoleBot } from "../shared";
import { Projects, Contact, Resume } from ".";

const Home = () => {
  const [panelActive, setPanelActive] = React.useState({
    home: true,
    projects: false,
    timeline: false,
    resume: false,
  });

  return (
    <>
      <TopHeader />
      <Header />
      <Navbar setPanelActive={setPanelActive} panelActive={panelActive} />
      <section>
        {panelActive.home && <PersonCard />}
        {panelActive.projects && <Projects />}
        {panelActive.timeline && <Contact />}
        {panelActive.resume && <Resume />}
      </section>
      <ConsoleBot />
      <Technologies />
    </>
  );
};

export default Home;
