import logo from "./pistachio.png";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      

      
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>

    
  );
}

export default App;
