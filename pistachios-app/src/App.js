import logo from "./pistachio.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"; // Import useState

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Events from "./pages/EventsPage/EventsPage";
import Menu from "./pages/MenuPage/MenuPage";
import Blog from "./pages/BlogPage/BlogPage";
import Contact from "./pages/ContactPage/ContactPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  return (
    <div className="App">
      <div className="App-Nav">
        <div className="App-Title-Container">
          {/* Hamburger Menu Button */}
          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 id="siteTitle">PISTACHIOS</h1>
        </div>

        <div className={`navLinks-Container ${menuOpen ? "open" : ""}`}>
          {" "}
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
        <div id="footerContainer">
          <div id="footerCopyright">
            <h4 className="footerFont">@LAWLOR LLC</h4>
          </div>
          <div id="footerAddress">
            <h4 className="footerFont">Albany, NY</h4>
            <h4 className="footerFont"> 1 Pistachio Lane, 12205 </h4>
          </div>
          <div id="footerContact">
            <h4 className="footerFont">Follow Us</h4>
            <h4 className="footerFont">@PISTACHIOBAR</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
