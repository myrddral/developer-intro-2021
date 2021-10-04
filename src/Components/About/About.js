import me from "../../assets/attilabeli.png";

const About = () => {
  return (
    <>
      <div className="section-title has-text-centered">ABOUT ME</div>
      <div className="box" style={{ textAlign: "justify" }}>
        <div className="columns is-vcentered">
          <div className="column is-two-thirds">
            As a Junior ReactJS developer, I use the tools of modern Javascript
            with confidence. Combined with the semantic elements of HMTL5 and
            CSS/SASS or Bootstrap, I'm able to satisfy all the needs for an
            effective and responsive design. I'm also able to implement a
            simple, Javascript based REST API back-end with NodeJS and express.
          </div>
          <div className="column">
            <div className="portrait-wrapper">
              <img src={me} className="portrait" alt="Myself" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
