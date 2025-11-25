import "./App.css";
import { Header, TopHeader } from "./shared";
import { useAppStore } from "./store/useAppStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Suspense, lazy } from "react";
import Loader from "./shared/Loader/Loader";

const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const MiniTour = lazy(() => import("./shared/MiniTour"));
const Modal = lazy(() => import("./shared/Modal/Modal"));

const App = () => {
  const setRunTour = useAppStore((state) => state.setRunTour);

  return (
    <BrowserRouter basename="/portfolio">
      <TopHeader />
      <Header />
      <Suspense fallback={null}>
        <MiniTour />
        <Modal />
      </Suspense>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setRunTour={setRunTour} />} />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Loader />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<Loader />}>
                <Resume />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
