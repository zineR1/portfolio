import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Containers";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
