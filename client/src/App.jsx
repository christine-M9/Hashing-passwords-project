import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>Auth System</h1>
          <div className="nav-links">
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Authentication System by C.K JUMA.</h2>
      <p>Please sign up or sign in to continue</p>
      <div className="home-links">
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
        <Link to="/signin" className="btn">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default App;
