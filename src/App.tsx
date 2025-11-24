import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header, TopHeader } from "./shared";
import { Home, Projects, Contact, Resume } from "./pages";
import JoyrideProfileTour from "./components/JoyrideProfileTour";

const App = () => {
  const [runTour, setRunTour] = useState(false);
  return (
    <BrowserRouter basename="/portfolio">
      <TopHeader />
      <Header />
      <JoyrideProfileTour run={runTour} setRun={setRunTour} />
      <div id="blur-content" className="App">
        <Routes>
          <Route path="/" element={<Home setRunTour={setRunTour} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
