import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
