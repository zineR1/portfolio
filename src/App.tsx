import "./App.css";
import { Header, TopHeader, MiniTour, Modal } from "./shared";
import { useAppStore } from "./store/useAppStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Projects, Contact, Resume } from "./pages";

const App = () => {
  const runTour = useAppStore((state) => state.runTour);
  const setRunTour = useAppStore((state) => state.setRunTour);
  return (
    <BrowserRouter basename="/portfolio">
      <TopHeader />
      <Header />
      <MiniTour/>
      <Modal />
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
