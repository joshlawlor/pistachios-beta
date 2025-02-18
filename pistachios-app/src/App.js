import logo from "./pistachio.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="App-Nav">
        <div className="App-Title-Container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>PISTACHIOS
          </h1>
        </div>
        <div className="navLinks">
          <Link className="navLinks" to="/">HOME</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
