import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white fixed h-screen overflow-auto">
      <Header />
      <Hero /> 
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
