import logo from "./pistachio.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Events from "./pages/EventsPage/EventsPage";
import Menu from "./pages/MenuPage/MenuPage";
import Blog from "./pages/BlogPage/BlogPage";
import Contact from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="App-Nav">
        <div className="App-Title-Container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>PISTACHIOS</h1>
        </div>
        <div className="navLinks-Container">
          <div>
            {" "}
            <Link className="navLinks" to="/">
              HOME
            </Link>
          </div>
          <div>
            <Link className="navLinks" to="/events">
              EVENTS
            </Link>
          </div>
          <div>
            <Link className="navLinks" to="/menu">
              MENU
            </Link>
          </div>
          <div>
            <Link className="navLinks" to="/blog">
              BLOG
            </Link>
          </div>
          <div>
            <Link className="navLinks" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="appFooter">
          <div>
            <h1>FOOTER</h1></div>
          </footer>
    </div>

    
  );
}

export default App;
