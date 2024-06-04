import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar_title">
          <h1>Anime</h1>
        </Link>
        <div className="navbar_links">
          <Link to="/" className="navbar_link">
            Home
          </Link>
          <Link to="/create" className="navbar_link">
            Share
          </Link>
          <Link to="/profile" className="navbar_link">
            Profile
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
