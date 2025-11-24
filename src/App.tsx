import "./App.css";
import { useState } from "react";
import { Header, TopHeader, MiniTour } from "./shared";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Projects, Contact, Resume } from "./pages";

const App = () => {
  const [runTour, setRunTour] = useState(false);
  return (
    <BrowserRouter basename="/portfolio">
      <TopHeader />
      <Header />
      <MiniTour run={runTour} setRun={setRunTour} />
      <div className="App">
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
