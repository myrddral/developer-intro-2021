import React from "react";
import "./App.css";
import "animate.css";
import Navbar from "./Components/Navbar";
import TriangleBackground from "./Components/TriangleBackground";
import OpeningSection from "./Components/OpeningScreen/OpeningSection";
import ProjectsSection from "./Components/Projects/ProjectsSection";
import About from "./Components/About/About";
import ContactSection from "./Components/Contact/ContactSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TriangleBackground />
      <section className="section-content" id="section1">
        <OpeningSection />
      </section>
      <section className="section-content" id="section2">
        <ProjectsSection />
      </section>
      <section className="section-content" id="section3">
        <About />
      </section>
      <section className="section-content" id="section4">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
