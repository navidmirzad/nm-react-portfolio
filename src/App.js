import React from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
