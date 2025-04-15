import logo from "./pistachio.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"; // Import useState

import { Route, Routes, Link, useLocation } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Events from "./pages/EventsPage/EventsPage";
import Menu from "./pages/MenuPage/MenuPage";
import Blog from "./pages/BlogPage/BlogPage";
import Contact from "./pages/ContactPage/ContactPage";

import searchIcon from "./assets/Pictures/searchIcon.png"

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const [searchQuery, setSearchQuery] = useState(""); // 🔹 Search query state
  // 🔹 Function to handle search submission
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    const terms = searchQuery
      .split(/[\s,;]+/)
      .map(term => term.trim().toLowerCase())
      .filter(term => term !== "");
  
    const uniqueTerms = [...new Set(terms)];
  
    if (uniqueTerms.length === 0) {
      alert("Please enter a search term.");
      return;
    }
  
    const updatedHistory = [...searchHistory, ...uniqueTerms];
    const uniqueHistory = [...new Set(updatedHistory)];
  
    const alertMessage = 
      "Current Search Terms:\n" + uniqueTerms.join("\n") +
      "\n\nSearch History:\n" + uniqueHistory.join("\n");
  
    alert(alertMessage);
    setSearchHistory(updatedHistory);
    setSearchQuery("");
  };
  
  

  const location = useLocation();
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
            <Link
              className={`navLinks ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              to="/"
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              className={`navLinks ${
                location.pathname === "/events" ? "active-link" : ""
              }`}
              to="/events"
            >
              EVENTS
            </Link>
          </div>
          <div>
            <Link
              className={`navLinks ${
                location.pathname === "/menu" ? "active-link" : ""
              }`}
              to="/menu"
            >
              MENU
            </Link>
          </div>
          <div>
            <Link
              className={`navLinks ${
                location.pathname === "/blog" ? "active-link" : ""
              }`}
              to="/blog"
            >
              BLOG
            </Link>
          </div>
          <div>
            <Link
              className={`navLinks ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
              to="/contact"
            >
              CONTACT
            </Link>
          </div>
          <div className="navSearch">
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearch}>
              <img id="searchIcon" src={searchIcon} alt="img"/>
            </button>
            
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
            <h4 className="footerFont">Contact Us:</h4>
            <h4 className="footerFont">
              {" "}
              <a href="mailto:pistachio@example.com">pistachios@gmail.com</a>
            </h4>

            <p></p>
          </div>
          <div id="footerAddress">
            <h4 className="footerFont">Albany, NY</h4>
            <h4 className="footerFont"> 1 Pistachio Lane, 12205 </h4>
          </div>
          <div id="footerContact">
            <h4 className="footerFont">Follow Us</h4>
            <h4 className="footerFont">@PISTACHIOBAR on Instagram</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
