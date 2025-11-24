import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, TopHeader } from "./shared";
import { Home, Projects, Contact, Resume, CreateProfile } from "./pages";
import { Modal } from "./shared";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <TopHeader />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Routes>
      </div>
      <Modal />
    </BrowserRouter>
  );
};

export default App;
