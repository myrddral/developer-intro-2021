import React from "react";
import "./App.css";
import "animate.css";
import Navbar from "./Components/Navbar";
import TriangleBackground from "./Components/TriangleBackground";
import Iconlist from "./Components/Iconlist";
import me from "./attilabeli.png";
import ContactForm from "./Components/ContactForm";
import redditThumbnail from "./assets/reddit.png";
import rideshareThumbnail from "./assets/rideshare.png";
import punkapiThumbnail from "./assets/punkapi.png";
import quizThumbnail from "./assets/quiz.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TriangleBackground />
      <section className="section-content" id="section1">
        <div className="columns is-vcentered">
          <div className="title-wrapper column">
            <h1 className="title ml-3">Hi,</h1>
            <p className="subtitle has-text-centered" style={{ fontSize: 40 }}>
              I'm <strong>{"<Attila Béli />"}</strong>, I build modern web
              applications!
            </p>
          </div>
        </div>
        <Iconlist />
        <div className="has-text-centered mt-6 pt-6">
          <span>
            <i className="fas fa-chevron-down fa-3x animate__animated animate__bounce animate__slower animate__infinite"></i>
          </span>
        </div>
      </section>
      <section className="section-content" id="section2">
        <div className="section-title has-text-centered">PROJECTS</div>
        <div className="columns">
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <figure className="image">
                  <img src={redditThumbnail} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <img src={rideshareThumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <img src={punkapiThumbnail} alt="" />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box p-1 lift-on-hover" style={{ height: 230 }}>
              <div className="box-content">
                <img src={quizThumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-content" id="section3">
        <div className="section-title has-text-centered">ABOUT ME</div>
        <div className="box" style={{ textAlign: "justify" }}>
          <div className="columns is-vcentered">
            <div className="column is-two-thirds">
              As a Junior ReactJS developer, I use the tools of modern
              Javascript with confidence. Combined with the semantic elements of
              HMTL5 and CSS/SASS or Bootstrap, I'm able to satisfy all the needs
              for an effective and responsive design. I'm also able to implement
              a simple, Javascript based REST API back-end with NodeJS and
              express.
            </div>
            <div className="column">
              <div className="portrait-wrapper">
                <img src={me} className="portrait" alt="Myself" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-content" id="section4">
        <div className="section-title has-text-centered">CONTACT</div>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
