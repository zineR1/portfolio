import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, TopHeader } from "./shared";
import { Home, Projects, Contact, Resume } from "./pages";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
